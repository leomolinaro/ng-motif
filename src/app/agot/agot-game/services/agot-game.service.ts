import { AgotRequestsSnackBarComponent } from './../agot-requests-snack-bar/agot-requests-snack-bar.component';
import { AgotApiService } from './../../api/agot-api.service';
import { AgotChoice, AAgotRequest, AgotChoiceCardAction, AgotChoiceType } from './../../../graphql-types';
import { AgotRemoteService } from './../../store/agot-remote.service';
import { filter, take } from 'rxjs/operators';
import { AuthService } from '../../../shared/login/auth.service';
import { AgotRequestDialogComponent } from '../agot-request-dialog/agot-request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import * as fromAgot from '../../store/agot.reducer';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { RemoveRequest } from '../../store/agot.actions';

export interface AgotChoiceWrapper {
  choice: AgotChoice,
  label: string,
  request: AAgotRequest
} // AgotChoiceWrapper

export interface SnackBarRequest {
  instruction: string,
  getChoices: AgotChoiceWrapper[]
} // SnackBarRequest

@Injectable()
export class AgotGameService {

  private requestsSnackBarRef: MatSnackBarRef<AgotRequestsSnackBarComponent>;
  private requestsSnackBarSubscription: Subscription;

  private choicesByCard = new BehaviorSubject<{ [cardId: number]: AgotChoiceWrapper[] }>({});
  private choicesByCard$ = this.choicesByCard.asObservable();
  
  private genChoices = new BehaviorSubject<AgotChoiceWrapper[]>(null);
  public genChoices$ = this.genChoices.asObservable ();
  
  constructor (
    private store: Store<any>,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public loginService: AuthService,
    private remoteService: AgotRemoteService,
    private api: AgotApiService
  ) {

    const requests$ = this.store.select (fromAgot.selectRequests).pipe (filter (requests => !!requests));

    requests$.subscribe (requests => {
      
      const choicesByCard: { [cardId: number]: AgotChoiceWrapper[] } = {};
      // const genChoices: AgotChoiceWrapper[] = [];
      const snackBarRequests: SnackBarRequest[] = [];

      requests.forEach (request => {
        console.log (request);
        const snackBarRequest: SnackBarRequest = {
          instruction: request.instruction,
          getChoices: []
        };
        for (const choice of request.choices) {
          const choiceWrapper = { choice, request, label: this.getLabelByChoice (choice) };
          if (choice.cardId) {
            let cardChoices = choicesByCard[choice.cardId];
            if (!cardChoices) { cardChoices = []; choicesByCard[choice.cardId] = cardChoices; }
            cardChoices.push (choiceWrapper);
          } else {
            // genChoices.push (choiceWrapper);
            snackBarRequest.getChoices.push (choiceWrapper);
          }
        }
        snackBarRequests.push (snackBarRequest);
      });
      this.choicesByCard.next (choicesByCard);
      // this.genChoices.next (genChoices);

      if (requests.length) {
        this.showRequestsSnackBar (snackBarRequests);
      } else {
        this.removeRequestsSnackBar ();
      }

    });

  } // constructor

  getLabelByChoice (choice: AgotChoice): string {
    switch (choice.choiceType) {
      case "SELECT_CARD": return "Select";
      case "SELECT_CARD_ACTION": {
        switch (choice.cardAction) {
          case AgotChoiceCardAction.Action: return "Action";
          case AgotChoiceCardAction.Interrupt: return "Interrupt";
          case AgotChoiceCardAction.Marshall: return "Marshall";
          case AgotChoiceCardAction.Play: return "Play";
          case AgotChoiceCardAction.Reaction: return "Reaction";
        }
      }
      case "PASS": return "Pass";
      case "SELECT_ICON": {
        switch (choice.icon) {
          case "INTRIGUE": return "Intrigue";
          case "POWER": return "Power";
          case "MILITARY": return "Military";
        }
      };
      case "CONTINUE": return choice.actionLabel;
      case "SELECT_PLAYER": return this.getPlayerNameById (choice.player);
      case AgotChoiceType.YesNo: {
        switch (choice.yesNoAnswer) {
          case true: return "Yes";
          case false: return "No";
        }
      }
    }
    return "---";
  } // getLabelByChoice

  private getPlayerNameById (playerId: string) {
    let name: string;
    this.store.select (fromAgot.selectPlayerById (playerId)).pipe (take (1)).subscribe (p => name = p.name);
    return name;
  } // getPlayerNameById

  getCardChoices$ (cardId: number): Observable<AgotChoiceWrapper[]> {
    return this.choicesByCard$.pipe (
      map (choicesByCard => choicesByCard[cardId])
    );
  }

  respond (choiceWrapper: AgotChoiceWrapper): void {
    const { __typename, ...choiceInput } = choiceWrapper.choice;
    const request = choiceWrapper.request;
    this.api.chooseAction (choiceInput, request.player.id, 1)
    .subscribe (x => {
      console.log ("Apollo mutation ", x.data);
      this.store.dispatch (new RemoveRequest ({ request: request }));
    });
  } // respond

  showRequestsSnackBar (requests: SnackBarRequest[]) {
    this.requestsSnackBarRef = this.snackBar.openFromComponent (AgotRequestsSnackBarComponent, { data: requests, verticalPosition: "top" });
    this.requestsSnackBarSubscription = this.requestsSnackBarRef.instance.choice$.subscribe (choice => this.respond (choice));
  } // showRequestSnackBar

  removeRequestsSnackBar () {
    if (this.requestsSnackBarRef) {
      this.requestsSnackBarSubscription.unsubscribe ();
      this.requestsSnackBarRef.dismiss ();
      this.requestsSnackBarRef = null;
    } // if 
  } // removeRequestSnackBar

  // openGenericRequestDialog (request: Requests) {
  //   let requestDialogRef = this.dialog.open (AgotRequestDialogComponent, {
  //     height: '400px',
  //     width: '600px',
  //     data: request
  //   });
  //   requestDialogRef.afterClosed ().pipe(
  //     filter(choice => !!choice)
  //   ).subscribe (choice => {
  //     this.respond (choice);
  //   });
  // }

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
    this.api.startGame (1)
    .subscribe (x => console.log ("Apollo mutation ", x.data));
  } // startGame

} // AgotGameService