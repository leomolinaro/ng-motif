import { AgotCardSeed as s, AngIcon } from './../../../graphql-types';
import { AgotTest } from '../agot-test';
import * as decks from '../decks/agot-core-decks';

import * as fromAgot from '../../store';

export class T002_AFeastForCrows extends AgotTest {
  
  async execute (): Promise<boolean> {
    await this.goToHomePage ();
    const { game, leo, fede } = await this.newGame ("T002_AFeastForCrows", decks.baratheonDeck (), decks.greyjoyDeck ());
    await this.goToGamePage (game.id);
    
    await this.startGame (game.id);

    await leo.draw ();
    await leo.rejectMulligan ();
    await fede.draw ();
    await fede.rejectMulligan ();
    const aFeastForCrows = await leo.choosePlot (s.AFeastForCrowsCore);
    await fede.choosePlot (s.FilthyAccusationsCore);
    await fede.selectFirstPlayer (leo);
    await leo.endPlotPhase ();
    await fede.draw ();
    await leo.draw ();
    await leo.endDrawPhase ();
    await leo.endMarshallingPhase ();
    await leo.endChallengePhase ();
    await leo.reaction (aFeastForCrows);
    await leo.endDominancePhase ();
    await this.assertsEqual (fromAgot.getFactionPower (leo.playerId), 3);
    await this.assertsEqual (fromAgot.getFactionPower (fede.playerId), 0);

    return true;
  } // execute

} // T001_AClashOfKings