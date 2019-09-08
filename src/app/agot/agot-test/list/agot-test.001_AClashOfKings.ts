import { AgotCardSeed as s, AngIcon } from './../../../graphql-types';
import { AgotTest } from '../agot-test';
import * as decks from '../decks/agot-core-decks';

import * as fromAgot from '../../store';

export class T001_AClashOfKings extends AgotTest {
  
  async execute (): Promise<boolean> {
    await this.goToHomePage ();
    const { game, leo, fede } = await this.newGame ("T001_AClashOfKings", decks.baratheonDeck (), decks.greyjoyDeck ());
    await this.goToGamePage (game.id);
    
    await this.startGame (game.id);

    const [bastardInHiding] = await leo.drawQty (
      { seed: s.BastardInHidingCore, qty: 1 },
    );
    await leo.rejectMulligan ();
    const [ironIslandsFishmonger1, ironIslandsFishmonger2, lordsportShipwright] = await fede.drawQty (
      { seed: s.IronIslandsFishmongerCore, qty: 2 },
      { seed: s.LordsportShipwrightCore, qty: 1 }
    );
    await fede.rejectMulligan ();
    await fede.choosePlot (s.FilthyAccusationsCore);
    const aClashOfKings = await leo.choosePlot (s.AClashOfKingsCore);
    await leo.selectFirstPlayer (fede);
    await fede.endPlotPhase ();
    await fede.draw ();
    await leo.draw ();
    await fede.endDrawPhase ();
    await fede.marshall (ironIslandsFishmonger1);
    await fede.marshall (ironIslandsFishmonger2);
    await fede.marshall (lordsportShipwright);
    await leo.marshall (bastardInHiding);
    await fede.endMarshallingPhase ();
    await fede.initiateChallenge (AngIcon.Intrigue, leo, lordsportShipwright);
    await fede.endChallenge ();
    await this.assertsEqual (fromAgot.getFactionPower (fede.playerId), 1);
    await fede.initiateChallenge (AngIcon.Power, leo, ironIslandsFishmonger1);
    await fede.endChallenge ();
    await this.assertsEqual (fromAgot.getFactionPower (fede.playerId), 2);
    await this.assertsEqual (fromAgot.getFactionPower (leo.playerId), 0);
    await leo.initiateChallenge (AngIcon.Power, fede, bastardInHiding);
    await fede.defend (ironIslandsFishmonger2);
    await leo.reaction (aClashOfKings);
    await leo.endChallenge ();
    await this.assertsEqual (fromAgot.getFactionPower (leo.playerId), 2);
    await this.assertsEqual (fromAgot.getFactionPower (fede.playerId), 0);

    return true;
  } // execute

} // T001_AClashOfKings