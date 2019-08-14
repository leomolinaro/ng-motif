import { MessageOut } from './models/message-out.model';
import { MessageIn } from './models/message-in.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable ()
export class WebsocketServic {

  public messages$: Observable<MessageIn<any>>;

  public notifyOpenConnection$ = new Subject<MessageIn<void>> ();
  public echoMessage$ = new Subject<MessageIn<void>> ();
  public notifyCloseConnection$ = new Subject<MessageIn<void>> ();
  public notifyError$ = new Subject<MessageIn<void>> ();
  // public agotReduxActions$ = new Subject<MessageIn<{ actions: Action[] }>> ();
  // public britReduxActions$ = new Subject<MessageIn<{ actions: Action[] }>> ();

  private webSocketSubject: WebSocketSubject<any>;

  constructor () {
  } // constructor

  public connect (username: string) {
    if (this.messages$) { return; }

    let url = "ws://localhost:8080/motif-web-project/motif/websocket/" + username;

    this.webSocketSubject = webSocket(url);
    this.webSocketSubject.subscribe (mess => {
      console.log (mess);
      switch (mess.type) {
        case MessageIn.NOTIFY_OPEN_CONNECTION: this.notifyOpenConnection$.next (mess); break;
        case MessageIn.ECHO_MESSAGE: this.echoMessage$.next (mess); break;
        case MessageIn.NOTIFY_CLOSE_CONNECTION: this.notifyCloseConnection$.next (mess); break;
        case MessageIn.NOTIFY_ERROR: this.notifyError$.next (mess); break;
        // case MessageIn.AGOT_REDUX_ACTION_LIST: this.agotReduxActions$.next (mess); break;
        // case MessageIn.BRIT_REDUX_ACTION_LIST: this.britReduxActions$.next (mess); break;
        default: console.error ("mess.type", mess.type);
      } // switch - case
    });

  } // connect

  public send (message: MessageOut) {
    this.webSocketSubject.next(message);
  } // send

} // WebsocketService
