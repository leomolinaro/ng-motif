import { AgotChoice, AAgotRequest, AgotChoiceCardAction, AgotChoiceType } from './../../../graphql-types';
import { filter, take } from 'rxjs/operators';
import { AuthService } from '../../../shared/login/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as fromAgot from '../../store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromGameActions from '../../store/agot-game.actions';

export interface AgotChoiceWrapper {
  choice: AgotChoice,
  label: string,
  request: AAgotRequest
} // AgotChoiceWrapper

export interface SnackBarRequest {
  instruction: string,
  getChoices: AgotChoiceWrapper[]
} // SnackBarRequest

@Injectable ({
  providedIn: "root"
})
export class AgotGameService {

  private choicesByCard = new BehaviorSubject<{ [cardId: number]: AgotChoiceWrapper[] }>({});
  private choicesByCard$ = this.choicesByCard.asObservable();
  
  private snackBarRequests = new BehaviorSubject<SnackBarRequest[]>(null);
  public snackBarRequests$ = this.snackBarRequests.asObservable ();
  
  constructor (
    private store: Store<any>,
    public loginService: AuthService
  ) {

    const requests$ = this.store.select (fromAgot.getRequests);
    requests$.subscribe (requests => {
      const choicesByCard: { [cardId: number]: AgotChoiceWrapper[] } = {};
      const snackBarRequests: SnackBarRequest[] = [];
      requests.forEach (request => {
        // console.log (request);
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
            snackBarRequest.getChoices.push (choiceWrapper);
          }
        }
        snackBarRequests.push (snackBarRequest);
      });
      this.choicesByCard.next (choicesByCard);
      this.snackBarRequests.next (snackBarRequests);
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
      case "DRAW": return "Draw";
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
    this.store.select (fromAgot.getPlayerById (playerId)).pipe (take (1)).subscribe (p => name = p.name);
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
    this.store.select (fromAgot.getGame).pipe (
      take (1),
      map (game => game.id)
    ).subscribe (gameId => {
      this.store.dispatch (fromGameActions.actionChoice ({
        choice: choiceInput,
        playerId: request.player.id,
        gameId: gameId
      }))
    });
  } // respond

} // AgotGameService
