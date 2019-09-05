import { Action } from '@ngrx/store';
import { exhaustMap, tap, map, catchError, concatMap, takeUntil } from 'rxjs/operators';
import { AgotApiService } from './../api/agot-api.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as actions from './agot-game.actions';
import { toNumberMap, toStringMap } from 'src/app/shared/map.util';
import { of } from 'rxjs';

@Injectable ()
export class AgotGameEffects {

  constructor(
    private actions$: Actions,
    private api: AgotApiService
  ) {
  }

  loadGame$ = createEffect (() => this.actions$.pipe (
    ofType (actions.gameGet),
    exhaustMap ((action) => this.api.getGame (action.gameId).pipe (
      // tap (x => console.log (x)),
      map (game => actions.gameGetSuccess ({
        game: {
          id: game.id,
          cardMap: toNumberMap (game.allCards, c => c.id),
          playerMap: toStringMap (game.allPlayers.map (p => ({
            id: p.id,
            name: p.name,
            gold: p.gold,
            factionId: p.faction.id,
            agendaId: p.agenda ? p.agenda.id : null,
            revealedPlotId: p.revealedPlot ? p.revealedPlot.id : null,
            handIds: p.hand.map (c => c.id),
            charactersIds: p.characters.map (c => c.id),
            locationsIds: p.locations.map (c => c.id),
            discardPileIds: p.discardPile.map (c => c.id),
            plotDeckIds: p.plotDeck.map (c => c.id),
            usedPlotPileIds: p.usedPlotPile.map (c => c.id),
            deadPileIds: p.deadPile.map (c => c.id),
            drawDeckEmpty: p.drawDeckEmpty
          })), p => p.id),
          playerIds: game.allPlayers.map (p => p.id),
          round: game.round,
          phase: game.phase,
          step: game.step,
          log: game.log,
          firstPlayer: game.firstPlayer ? game.firstPlayer.id : null,
          started: game.started
        }
      })),
      catchError (error => of (actions.gameGetFailure ({ error })))
    ))
  ));

  loadRequests$ = createEffect (() => this.actions$.pipe (
    ofType (actions.requestsGet),
    exhaustMap ((action) => this.api.getRequests (action.gameId).pipe (
      map (requests => actions.requestsGetSuccess ({ requests })),
      catchError (error => of (actions.requestsGetFailure ({ error })))
    ))
  ));

  startGame$ = createEffect (() => this.actions$.pipe (
    ofType (actions.gameStart),
    exhaustMap ((action) => this.api.startGame (action.gameId).pipe(
      map (() => actions.gameStartSuccess ({})),
      catchError (error => of (actions.gameStartFailure ({ error })))
    ))
  ));

  chooseAction$ = createEffect (() => this.actions$.pipe (
    ofType (actions.actionChoice),
    exhaustMap ((action) => this.api.chooseAction (action.choice, action.request.player.id, action.gameId).pipe(
      map (() => actions.requestRemove ({ request: action.request })),
      // catchError (error => of (actions.gameStartFailure ({ error })))
    ))
  ));

  subscribeRequests$ = createEffect (() => this.actions$.pipe (
    ofType (actions.requestsSubscription),
    exhaustMap ((action) => this.api.subscribeToRequests (action.gameId).pipe (
      map (requests => actions.requestsNotification ({ requests })),
      takeUntil (this.actions$.pipe (
        ofType (actions.requestsUnsubscription)
      ))
    ))
  ));

  subscribeChanges$ = createEffect (() => this.actions$.pipe (
    ofType (actions.changesSubscription),
    exhaustMap ((action) => this.api.subscribeToChanges (action.gameId).pipe (
      concatMap (changes => changes.actions as Action[]),
      takeUntil (this.actions$.pipe (
        ofType (actions.changesUnsubscription)
      ))
    ))
  ));

} // AgotGameEffects
