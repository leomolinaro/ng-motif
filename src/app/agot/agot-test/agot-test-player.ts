import { Action } from '@ngrx/store';
import { AgotChoiceType, AgotRequestType, AgotCardSeed, PlotCard, AngPhase, DrawCard_AngDrawCard, AngArea, AgotChoiceCardAction, AngIcon, CharacterCard } from './../../graphql-types';
import { AgotTest } from './agot-test';
import { ofType } from '@ngrx/effects';
import { filter, map, take, toArray, switchMap, tap } from 'rxjs/operators';
import { Card } from '../store/agot-game.reducer';

import * as fromAgotGame from '../store/agot-game.actions';

export class AgotTestPlayer {
  
  constructor (
    public readonly playerId: string,
    private test: AgotTest
  ) {}

  async rejectMulligan () {
    await this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.YesNo,
      requestType: AgotRequestType.YesNo,
      yesNoAnswer: false
    }, this.playerId).toPromise ();
  } // rejectMulligan

  async acceptMulligan () {
    await this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.YesNo,
      requestType: AgotRequestType.YesNo,
      yesNoAnswer: true
    }, this.playerId).toPromise ();
  } // acceptMulligan

  private player$ () {
    return this.test.gameState$ ().pipe (
      map (gameState => gameState.game.playerMap[this.playerId])
    );
  } // player$

  private cardFromPlotDeck$ (seed: AgotCardSeed) {
    return this.test.gameState$ ().pipe (
      map (gameState => {
        const player = gameState.game.playerMap[this.playerId];
        return player.plotDeckIds
        .map (cardId => gameState.game.cardMap[cardId] as PlotCard)
        .find (card => card.seed == seed);
      })
    )
  } // getCardFromPlotDeck

  async choosePlot (seed: AgotCardSeed) {
    const plotCard = await this.cardFromPlotDeck$ (seed).toPromise ();
    await this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectCard,
      requestType: AgotRequestType.SelectPlotToReveal,
      cardId: plotCard.id
    }, this.playerId).toPromise ();
    return plotCard;
  } // choosePlot

  async selectFirstPlayer (testPlayer: AgotTestPlayer) {
    await this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectPlayer,
      requestType: AgotRequestType.SelectFirstPlayer,
      player: testPlayer.playerId
    }, this.playerId).toPromise ();
  } // selectFirstPlayer

  async endPlotPhase () { await this.endPhase (AngPhase.Plot); }
  async endDrawPhase () { await this.endPhase (AngPhase.Draw); }
  async endMarshallingPhase () { await this.endPhase (AngPhase.Marshalling); }
  async endChallengePhase () { await this.endPhase (AngPhase.Challenges); }
  async endDominancePhase () { await this.endPhase (AngPhase.Dominance); }
  async endStandingPhase () { await this.endPhase (AngPhase.Standing); }
  async endTaxationPhase () { await this.endPhase (AngPhase.Taxation); }

  async endPhase (phase: AngPhase) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.Continue,
      requestType: AgotRequestType.Continue,
      actionLabel: "Continue"
    }, this.playerId).toPromise ();
  } // endPhase

  async endChallenge () {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.Continue,
      requestType: AgotRequestType.Continue,
      actionLabel: "Continue"
    }, this.playerId).toPromise ();
  } // endChallenge

  async drawQty (...seeds: { seed: AgotCardSeed, qty: number }[]) {
    const seedList: AgotCardSeed[] = [];
    for (const s of seeds) {
      for (let i = 0; i < s.qty; i++) {
        seedList.push (s.seed);
      } // for
    } // for
    return await this.draw (...seedList);
  } // drawQty

  async draw (...seeds: AgotCardSeed[]) {
    const promise = this.test.actions$.pipe (
      ofType (fromAgotGame.addCard),
      filter (addCardAction => addCardAction.payload.toArea == AngArea.Hand),
      map (addCardAction => addCardAction.payload.cardId as number),
      take (seeds.length),
      toArray ()
    ).toPromise ();
    const [drawCardIds] = await Promise.all ([promise, this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.Draw,
      requestType: AgotRequestType.Draw,
      drawCardSeeds: seeds
    }, this.playerId).toPromise ()]);
    const s = await this.test.gameState$ ().toPromise ();
    return drawCardIds.map (cardId => s.game.cardMap[cardId] as DrawCard_AngDrawCard);
  } // draw

  async marshall (card: Card) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectCardAction,
      requestType: AgotRequestType.SelectActionToPerform,
      cardId: card.id,
      cardAction: AgotChoiceCardAction.Marshall
    }, this.playerId).toPromise ();
  } // marshall

  async marshallAttachment (attachment: Card, attachTo: Card) {
    await this.marshall (attachment);
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectCard,
      requestType: AgotRequestType.SelectCardToAttach,
      cardId: attachTo.id
    }, this.playerId).toPromise ();
  } // marshallAttachment

  async selectChallengeType (icon: AngIcon) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectIcon,
      requestType: AgotRequestType.SelectChallengeToInitiate,
      icon: icon
    }, this.playerId).toPromise ();
  } // selectChallengeType

  async selectDefenderPlayer (defenderPlayer: AgotTestPlayer) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectPlayer,
      requestType: AgotRequestType.SelectDefender,
      player: defenderPlayer.playerId
    }, this.playerId).toPromise ();
  } // selectDefenderPlayer

  async selectAttacker (attacker: Card) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectCard,
      requestType: AgotRequestType.SelectCharacterToAttack,
      cardId: attacker.id
    }, this.playerId).toPromise ();
  } // selectAttacker
  
  async initiateChallenge (icon: AngIcon, defender: AgotTestPlayer, ...attackers: DrawCard_AngDrawCard[]) {
    await this.selectChallengeType (icon);
    await this.selectDefenderPlayer (defender);
    for (const attacker of attackers) {
      await this.selectAttacker (attacker);
    } // for
  } // initiateChallenge

  async reaction (card: Card) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectCardAction,
      requestType: AgotRequestType.SelectReactionToPerform,
      cardAction: AgotChoiceCardAction.Reaction,
      cardId: card.id
    }, this.playerId).toPromise ();
  } // reaction

  async action (card: Card) {
    return this.test.chooseActionOrPass$ ({
      choiceType: AgotChoiceType.SelectCardAction,
      requestType: AgotRequestType.SelectActionToPerform,
      cardAction: AgotChoiceCardAction.Action,
      cardId: card.id
    }, this.playerId).toPromise ();
  } // action

  async defend (...defenders: DrawCard_AngDrawCard[]) {
    for (const defender of defenders) {
      await this.test.chooseActionOrPass$ ({
        choiceType: AgotChoiceType.SelectCard,
        requestType: AgotRequestType.SelectCharacterToDefend,
        cardId: defender.id
      }, this.playerId).toPromise ();
    } // for
  } // defend

} // AgotTestPlayer