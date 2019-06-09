import { MessageOut } from './../../../shared/websocket/models/message-out.model';
import { filter } from 'rxjs/operators';
import { RequestChoice } from '../../models/request-choice.model';
import { AuthService } from '../../../shared/login/auth.service';
import { AgotRequestDialogComponent } from '../agot-request-dialog/agot-request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material';
import { WebsocketService } from '../../../shared/websocket/websocket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as fromAgot from '../../store/agot.reducer';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AgotRequestService {

  private requestSnackBarRef: MatSnackBarRef<SimpleSnackBar>;

  private choicesByCard = new BehaviorSubject<{ [cardId: number]: RequestChoice[] }>({});
  private choicesByCard$ = this.choicesByCard.asObservable();
  
  private genChoices = new BehaviorSubject<RequestChoice[]>(null);
  public genChoices$ = this.genChoices.asObservable ();

  private requestedPlayerId: string;

  constructor (
    private store: Store<any>,
    private webSocket: WebsocketService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loginService: AuthService
  ) {

    const request$ = this.store.select(fromAgot.selectNewRequest).pipe (filter (request => !!request));

    request$.subscribe(request => {
      this.requestedPlayerId = request.playerId;
      this.showRequestSnackBar(request.instruction);
      const choicesByCard: { [cardId: number]: RequestChoice[] } = {};
      const genChoices: RequestChoice[] = [];
      for (const choice of request.choices) {
        if (choice.cardId) {
          let cardChoices = choicesByCard[choice.cardId];
          if (!cardChoices) { cardChoices = []; this.choicesByCard[choice.cardId] = cardChoices; }
          cardChoices.push(choice);
        } else {
          genChoices.push(choice);
        }
      }
      this.choicesByCard.next(choicesByCard);
      this.genChoices.next(genChoices);
    });

  }

  getCardChoices$(cardId: number): Observable<RequestChoice[]> {
    return this.choicesByCard$.pipe(
      map(choicesByCard => choicesByCard[cardId])
    );
  }

  respond(choice: RequestChoice): void {
    if (this.requestSnackBarRef) {
      this.requestSnackBarRef.dismiss();
      this.requestSnackBarRef = null;
    }
    this.choicesByCard.next({});
    this.genChoices.next([]);
    console.log("this.requestedPlayerId", this.requestedPlayerId);
    this.webSocket.send({ type: MessageOut.AGOT_ACTION_CHOICE, data: { choice: choice, playerId: this.requestedPlayerId }});
    this.requestedPlayerId = null;
  }

  showRequestSnackBar(requestTitle: string) {
    this.requestSnackBarRef = this.snackBar.open (requestTitle);
  }

  openGenericRequestDialog (request: Request) {
    let requestDialogRef = this.dialog.open (AgotRequestDialogComponent, {
      height: '400px',
      width: '600px',
      data: request
    });
    requestDialogRef.afterClosed ().pipe(
      filter(choice => !!choice)
    ).subscribe (choice => {
      this.respond (choice);
    });
  }

}
