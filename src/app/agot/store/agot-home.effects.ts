import { AgotApiService } from './../api/agot-api.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import * as actions from './agot-home.actions';
import { of } from 'rxjs';
import { mergeMap, map, exhaustMap, catchError, tap, switchMap } from 'rxjs/operators';

@Injectable ()
export class AgotHomeEffects {

  constructor(
    private actions$: Actions,
    private api: AgotApiService
  ) {}

  loadGames$ = createEffect (() => this.actions$.pipe (
    ofType (actions.gamesGet),
    // tap (x => console.log (x)),
    exhaustMap ((action) => this.api.getGames ()
      .pipe (
        // tap (x => console.log (x)),
        map (games => actions.gamesGetSuccess ({ games })),
        catchError (error => of (actions.gamesGetFailure ({ error })))
      )
    )
  ));

  newGame$ = createEffect (() => this.actions$.pipe (
    // tap (x => console.log (x)),
    ofType (actions.gameNew),
    exhaustMap ((action) => this.api.newGame (action.gameName, action.inputPlayers)
      .pipe (
        map (res => actions.gameNewSuccess ({ game: res })),
        catchError (error => of (actions.gameNewFailure ({ error })))
      )
    )
  ));

  removeGame$ = createEffect (() => this.actions$.pipe (
    ofType (actions.gameRemove),
    exhaustMap ((action) => this.api.removeGame (action.gameId)
      .pipe (
        map (gameId => actions.gameRemoveSuccess ({ gameId: gameId })),
        catchError (error => of (actions.gameRemoveFailure ({ error })))
      )
    )
  ));

} // AgotHomeEffects
