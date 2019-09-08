import { DefaultProjectorFn } from '@ngrx/store/src/selector';
import { AgotTestPlayer } from './agot-test-player';
import { TypedAction, ActionCreator } from '@ngrx/store/src/models';
import { Actions, ofType } from '@ngrx/effects';
import { take, filter, map, share, reduce, toArray, switchMap, debounceTime, tap, delay, concatMap, finalize } from 'rxjs/operators';
import { combineLatest, race, forkJoin, interval, Observable, concat, of, empty, throwError } from 'rxjs';
import { AgotHomeEffects } from './../store/agot-home.effects';
import { InputPlayerInput, AgotChoiceInput, AgotChoiceType, AgotRequestType, AgotCardSeed, PlotCard, AngPhase, DrawCard_AngDrawCard, AngArea, AddCardData, AgotReduxActionType, AgotChoiceCardAction, AngFaction } from './../../graphql-types';
import { Store, Action, MemoizedSelector } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';

import * as fromAgot from '../store';
import * as fromAgotHome from '../store/agot-home.actions';
import * as fromAgotGame from '../store/agot-game.actions';

const WAITING_MILLISECONDS = 200;

export abstract class AgotTest {

  constructor (
    private store: Store<any>,
    public actions$: Actions,
    private router: Router
  ) {}

  async abstract execute (): Promise<boolean>;

  private waitForAction$<T extends string, P> (actionCreator: ActionCreator<T, (props: P) => P & TypedAction<T>>): Observable<P> {
    return forkJoin (
      this.actions$.pipe (
        ofType (actionCreator),
        take (1),
      ),
      this.wait$ ()
    ).pipe (
      map (([toReturn]) => toReturn)
    );
  } // waitForAction$

  private wait$ () {
    return interval (WAITING_MILLISECONDS).pipe (take (1));
  } // wait$

  async newGame (
    gameName: string,
    leoDeck: { faction: AngFaction, deck: { card: AgotCardSeed, quantity: number }[] },
    fedeDeck: { faction: AngFaction, deck: { card: AgotCardSeed, quantity: number }[] }
  ) {
    this.store.dispatch (fromAgotHome.gameNew ({
      gameName,
      inputPlayers: [
        {
          id: "leo",
          name: "Leo",
          ...leoDeck
        },
        {
          id: "fede",
          name: "Fede",
          ...fedeDeck
        }
      ]
    }));
    return this.waitForAction$ (fromAgotHome.gameNewSuccess).pipe (
      map (a => ({
        game: a.game,
        leo: new AgotTestPlayer (a.game.allPlayers[0].id, this),
        fede: new AgotTestPlayer (a.game.allPlayers[1].id, this)
      })),
    ).toPromise ();
  } // newGame

  private async goTo (commands: any[]) {
    if (this.router.url == ("/" + commands.join ("/"))) {
      return;
    } else {
      this.router.navigate (commands);
      return forkJoin (
        this.router.events.pipe (
          filter (e => e instanceof NavigationEnd),
          take (1)
        ),
        this.wait$ ()
      ).pipe (
        map (([toReturn]) => toReturn)
      ).toPromise ();
    } // if - else
  } // goTo

  async goToGamePage (gameId: number) {
    return this.goTo (["agot", "game", gameId]);
  } // goToGamePage

  async goToHomePage () {
    return this.goTo (["agot", "home"]);
  } // goToHomePage

  async startGame (gameId: number) {
    this.store.dispatch (fromAgotGame.gameStart ({ gameId }));
    return this.waitForAction$ (fromAgotGame.gameStartSuccess)
    .toPromise ();
  } // startGame

  pass$ () {
    return this.gameState$ ().pipe (
      tap (gameState => {
        this.store.dispatch (fromAgotGame.actionChoice ({
          choice: {
            choiceType: AgotChoiceType.Pass,
            requestType: gameState.requests[0].type
          },
          playerId: gameState.requests[0].player.id,
          gameId: gameState.game.id
        }));
      }),
      switchMap (() => this.waitForAction$ (fromAgotGame.actionChoiceSuccess)),
      // tap (x => console.log (x))
    );
  } // pass$

  chooseActionOrPass$ (choiceInput: AgotChoiceInput, playerId: string): Observable<void> {
    // console.log ("chooseActionOrPass");
    return this.gameState$ ().pipe (
      tap (gameState => {
        this.store.dispatch (fromAgotGame.actionChoice ({
          choice: choiceInput,
          playerId: playerId,
          gameId: gameState.game.id
        }));
      }),
      switchMap (() => race (
        this.waitForAction$ (fromAgotGame.actionChoiceSuccess),
        this.waitForAction$ (fromAgotGame.actionChoiceFailure)
      )),
      // tap (x => console.log (x)),
      switchMap ((x: any) => {
        if (x.error) {
          return this.pass$ ().pipe (
            concatMap (() => this.chooseActionOrPass$ (choiceInput, playerId))
          );
        } else {
          return empty ();
        }
      })
    );
  } // chooseActionOrPass$

  public gameState$ () {
    return this.store.select (fromAgot.getGameState).pipe (take (1));
  } // gameState$

  async assertsEqual<T> (selector: MemoizedSelector<object, T, DefaultProjectorFn<T>>, value: T) {
    return this.store.select (selector).pipe (
      take (1),
      switchMap (storeValue => {
        if (storeValue == value) {
          return of (true);
        } else {
          return throwError ("Check failed");
        } // if - else
      }) // switchMap
    ).toPromise ();
  } // assertsEqual

} // AgotTest

