import { MessageOut } from './models/message-out.model';
import { MessageIn } from './models/message-in.model';
import { map, share } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//import { QueueingSubject } from 'queueing-subject/lib';
//import websocketConnect from 'rxjs-websockets/lib';

import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable ()
export class WebsocketService {

  //private inputStream: QueueingSubject<string>;
  public messages$: Observable<MessageIn<any>>;

  public notifyOpenConnection$ = new Subject<MessageIn<void>> ();
  public echoMessage$ = new Subject<MessageIn<void>> ();
  public notifyCloseConnection$ = new Subject<MessageIn<void>> ();
  public notifyError$ = new Subject<MessageIn<void>> ();
  public agotReduxActions$ = new Subject<MessageIn<{ actions: Action[] }>> ();
  public britReduxActions$ = new Subject<MessageIn<{ actions: Action[] }>> ();

  private webSocketSubject: WebSocketSubject<any>;

  constructor () {
  } // constructor

  public connect (username: string) {
    if (this.messages$) { return; }

    let url = "ws://localhost:8080/motif-web-project/motif/websocket/" + username;

    // // Using share() causes a single websocket to be created when the first
    // // observer subscribes. This socket is shared with subsequent observers
    // // and closed when the observer count falls to zero.
    // this.messages$ = websocketConnect (
    //   url,
    //   this.inputStream = new QueueingSubject<string>()
    // ).messages.pipe (
    //   share (), 
    //   map (message => JSON.parse (message))
    // );
    // this.messages$.subscribe (mess => {
    //   console.log (mess);
    //   switch (mess.type) {
    //     case MessageIn.NOTIFY_OPEN_CONNECTION: this.notifyOpenConnection$.next (mess); break;
    //     case MessageIn.ECHO_MESSAGE: this.echoMessage$.next (mess); break;
    //     case MessageIn.NOTIFY_CLOSE_CONNECTION: this.notifyCloseConnection$.next (mess); break;
    //     case MessageIn.NOTIFY_ERROR: this.notifyError$.next (mess); break;
    //     case MessageIn.AGOT_REDUX_ACTION_LIST: this.agotReduxActions$.next (mess); break;
    //     case MessageIn.BRIT_REDUX_ACTION_LIST: this.britReduxActions$.next (mess); break;
    //     default: console.error ("mess.type", mess.type);
    //   } // switch - case
    // });

    this.webSocketSubject = webSocket(url);
    this.webSocketSubject.subscribe (mess => {
      console.log (mess);
      switch (mess.type) {
        case MessageIn.NOTIFY_OPEN_CONNECTION: this.notifyOpenConnection$.next (mess); break;
        case MessageIn.ECHO_MESSAGE: this.echoMessage$.next (mess); break;
        case MessageIn.NOTIFY_CLOSE_CONNECTION: this.notifyCloseConnection$.next (mess); break;
        case MessageIn.NOTIFY_ERROR: this.notifyError$.next (mess); break;
        case MessageIn.AGOT_REDUX_ACTION_LIST: this.agotReduxActions$.next (mess); break;
        case MessageIn.BRIT_REDUX_ACTION_LIST: this.britReduxActions$.next (mess); break;
        default: console.error ("mess.type", mess.type);
      } // switch - case
    });
    

  } // connect

  public send (message: MessageOut) {
    // // If the websocket is not connected then the QueueingSubject will ensure
    // // that messages are queued and delivered when the websocket reconnects.
    // // A regular Subject can be used to discard messages sent when the websocket
    // // is disconnected.
    // this.inputStream.next (JSON.stringify (message));
    this.webSocketSubject.next(message);
  } // send

} // WebsocketService
