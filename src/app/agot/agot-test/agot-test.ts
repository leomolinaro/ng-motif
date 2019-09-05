import { TypedAction } from '@ngrx/store/src/models';
import { Actions, ofType } from '@ngrx/effects';
import { AgotGameService } from './../agot-game/services/agot-game.service';
import { AgotGameEffects } from './../store/agot-game.effects';
import { take, filter, map, share, reduce, toArray } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AgotHomeEffects } from './../store/agot-home.effects';
import { InputPlayerInput, AgotChoiceInput, AgotChoiceType, AgotRequestType, AgotCardSeed, PlotCard, AngPhase, DrawCard_AngDrawCard, AngArea, AddCardData, AgotReduxActionType } from './../../graphql-types';
import { Store } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';

import * as fromAgot from '../store';
import * as fromAgotHome from '../store/agot-home.actions';
import * as fromAgotGame from '../store/agot-game.actions';

const WAITING_MILLISECONDS = 1000;

export abstract class AgotTest {

  constructor (
    private store: Store<any>,
    public actions$: Actions,
    private router: Router,
    private gameService: AgotGameService
  ) {}

  async abstract execute ();

  async newGame (gameName: string, inputPlayers: InputPlayerInput[]) {
    const promise = this.actions$.pipe (
      ofType (fromAgotHome.gameNewSuccess),
      take (1)
    ).toPromise ();
    this.store.dispatch (fromAgotHome.gameNew ({ gameName, inputPlayers }));
    const [toReturn] = await Promise.all ([promise, this.wait ()]);
    const game = toReturn.game;
    const p1 = new AgotTestPlayer (game.allPlayers[0].id, this);
    const p2 = new AgotTestPlayer (game.allPlayers[1].id, this);
    return { game, p1, p2 };
  } // newGame

  async goToGamePage (gameId: number) {
    const promise = this.router.events.pipe (
      filter (e => e instanceof NavigationEnd),
      take (1)
    ).toPromise ();
    this.router.navigate (["agot", "game", gameId]);
    await Promise.all ([promise, this.wait ()]);
  } // goToGamePage

  async startGame (gameId: number) {
    const promise = this.actions$.pipe (
      ofType (fromAgotGame.gameStartSuccess),
      take (1)
    ).toPromise ();
    this.store.dispatch (fromAgotGame.gameStart ({ gameId }));
    await Promise.all ([promise, this.wait ()]);
  } // startGame

  async wait () {
    return new Promise<void> ((resolve, reject) => {
      setTimeout (() => resolve (), WAITING_MILLISECONDS);
    });
  } // wait

  async chooseAction (choiceInput: AgotChoiceInput, playerId: string) {
    const promise = this.actions$.pipe (
      ofType (fromAgotGame.requestRemove),
      take (1)
    ).toPromise ();

    combineLatest (
      this.store.select (fromAgot.getGame),
      this.store.select (fromAgot.getRequests)
    ).pipe (
      take (1)
    ).subscribe (([game, requests]) => {
      this.store.dispatch (fromAgotGame.actionChoice ({
        choice: choiceInput,
        request: requests.find (request => request.player.id == playerId),
        gameId: game.id
      }));
    });

    await Promise.all ([promise, this.wait ()]);
  } // chooseAction

  async getGameState () {
    return this.store.select (fromAgot.getGameState).pipe (take (1)).toPromise ();
  } // getGameState

} // AgotTest

export class AgotTestPlayer {
  
  constructor (
    private playerId: string,
    private test: AgotTest
  ) {}

  async rejectMulligan () {
    await this.test.chooseAction ({
      choiceType: AgotChoiceType.YesNo,
      requestType: AgotRequestType.YesNo,
      yesNoAnswer: false
    }, this.playerId);
  } // rejectMulligan

  async acceptMulligan () {
    await this.test.chooseAction ({
      choiceType: AgotChoiceType.YesNo,
      requestType: AgotRequestType.YesNo,
      yesNoAnswer: true
    }, this.playerId);
  } // acceptMulligan

  async getPlayer () {
    const gameState = await this.test.getGameState ();
    return gameState.game.playerMap[this.playerId];
  } // getPlayer

  async getCardFromPlotDeck (seed: AgotCardSeed) {
    const gameState = await this.test.getGameState ();
    const player = gameState.game.playerMap[this.playerId];
    return player.plotDeckIds
    .map (cardId => gameState.game.cardMap[cardId] as PlotCard)
    .find (card => card.seed == seed);
  } // getCardFromPlotDeck

  async choosePlot (plotCard: PlotCard) {
    await this.test.chooseAction ({
      choiceType: AgotChoiceType.SelectCard,
      requestType: AgotRequestType.SelectPlotToReveal,
      cardId: plotCard.id
    }, this.playerId);
  } // choosePlot

  async selectFirstPlayer (testPlayer: AgotTestPlayer) {
    await this.test.chooseAction ({
      choiceType: AgotChoiceType.SelectPlayer,
      requestType: AgotRequestType.SelectFirstPlayer,
      player: testPlayer.playerId
    }, this.playerId);
  } // selectFirstPlayer

  async endPlotPhase () { await this.endPhase (AngPhase.Plot); }
  async endDrawPhase () { await this.endPhase (AngPhase.Draw); }
  async endMarshallingPhase () { await this.endPhase (AngPhase.Marshalling); }
  async endChallengePhase () { await this.endPhase (AngPhase.Challenges); }
  async endDominancePhase () { await this.endPhase (AngPhase.Dominance); }
  async endStandingPhase () { await this.endPhase (AngPhase.Standing); }
  async endTaxationPhase () { await this.endPhase (AngPhase.Taxation); }

  async endPhase (phase: AngPhase) {
    await this.test.chooseAction ({
      choiceType: AgotChoiceType.Continue,
      requestType: AgotRequestType.Continue,
      actionLabel: "Continue"
    }, this.playerId);
  } // endPhase

  async draw (...seeds: AgotCardSeed[]) {

    const promise = this.test.actions$.pipe (
      ofType (fromAgotGame.addCard),
      filter (addCardAction => addCardAction.payload.toArea == AngArea.Hand),
      map (addCardAction => addCardAction.payload.cardId as number),
      take (seeds.length),
      toArray ()
    ).toPromise ();

    const [drawCardIds] = await Promise.all ([promise, this.test.chooseAction ({
      choiceType: AgotChoiceType.Draw,
      requestType: AgotRequestType.Draw,
      drawCardSeeds: seeds
    }, this.playerId)]);

    const s = await this.test.getGameState ();
    return drawCardIds.map (cardId => s.game.cardMap[cardId] as DrawCard_AngDrawCard);
  } // draw

} // AgotTestPlayer