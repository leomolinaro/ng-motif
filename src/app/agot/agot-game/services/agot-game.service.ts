import { AgotApiService } from './../../api/agot-api.service';
import { AgotChoice } from './../../../graphql-types';
import { AgotRemoteService } from './../../store/agot-remote.service';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../shared/login/auth.service';
import { AgotRequestDialogComponent } from '../agot-request-dialog/agot-request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as fromAgot from '../../store/agot.reducer';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { Request } from '../../store/agot.actions';

@Injectable()
export class AgotGameService {

  private requestSnackBarRef: MatSnackBarRef<SimpleSnackBar>;

  private choicesByCard = new BehaviorSubject<{ [cardId: number]: AgotChoice[] }>({});
  private choicesByCard$ = this.choicesByCard.asObservable();
  
  private genChoices = new BehaviorSubject<AgotChoice[]>(null);
  public genChoices$ = this.genChoices.asObservable ();

  private requestedPlayerId: string;

  constructor (
    private store: Store<any>,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loginService: AuthService,
    private remoteService: AgotRemoteService,
    private api: AgotApiService
  ) {

    const request$ = this.store.select(fromAgot.selectNewRequest).pipe(filter(request => !!request));

    request$.subscribe(request => {
      this.requestedPlayerId = request.player.id;
      console.log(request);
      this.showRequestSnackBar(request.instruction);
      const choicesByCard: { [cardId: number]: AgotChoice[] } = {};
      const genChoices: AgotChoice[] = [];
      for (const choice of request.choices) {
        if (choice.cardId) {
          let cardChoices = choicesByCard[choice.cardId];
          if (!cardChoices) { cardChoices = []; choicesByCard[choice.cardId] = cardChoices; }
          cardChoices.push(choice);
        } else {
          genChoices.push(choice);
        }
      }
      this.choicesByCard.next(choicesByCard);
      this.genChoices.next(genChoices);
    });

  }

  getCardChoices$(cardId: number): Observable<AgotChoice[]> {
    return this.choicesByCard$.pipe(
      map(choicesByCard => choicesByCard[cardId])
    );
  }

  respond(choice: AgotChoice): void {
    if (this.requestSnackBarRef) {
      this.requestSnackBarRef.dismiss();
      this.requestSnackBarRef = null;
    }
    this.choicesByCard.next({});
    this.genChoices.next([]);

    delete choice.__typename;
    this.api.chooseAction ({ choice: choice, playerId: this.requestedPlayerId })
    .subscribe (x => console.log ("Apollo mutation ", x.data));

    this.requestedPlayerId = null;
  }

  showRequestSnackBar(requestTitle: string) {
    this.requestSnackBarRef = this.snackBar.open (requestTitle, null, { verticalPosition: "top" });
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

  loadAll () {
    this.remoteService.loadGame ();
    this.remoteService.loadRequest ();
    this.remoteService.linkRequests ();
    this.remoteService.linkChanges ();
  }

  getGame () {
    this.remoteService.loadGame ();
  }

  createGame () {
    this.remoteService.createSampleGame ();
  }

  startGame () {
    this.api.startGame ()
    .subscribe (x => console.log ("Apollo mutation ", x.data));
  } // startGame

}



