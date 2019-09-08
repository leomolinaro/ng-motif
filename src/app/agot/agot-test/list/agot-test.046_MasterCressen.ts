import { AgotCardSeed as s, AngIcon } from './../../../graphql-types';
import { AgotTest } from '../agot-test';
import * as decks from '../decks/agot-core-decks';

export class T046_MasterCressen extends AgotTest {
  
  async execute () {
    await this.goToHomePage ();
    const { game, leo, fede } = await this.newGame ("T046_MasterCressen", decks.baratheonDeck (), decks.lannisterDeck ());
    await this.goToGamePage (game.id);
    
    await this.startGame (game.id);

    const [maesterCressen] = await leo.drawQty (
      { seed: s.MaesterCressenCore, qty: 1 }
    );
    await leo.rejectMulligan ();
    const [burnedMen, nobleLineage] = await await fede.drawQty (
      { seed: s.BurnedMenCore, qty: 1 },
      { seed: s.NobleLineageCore, qty: 1 },
    );
    await fede.rejectMulligan ();
    await leo.choosePlot (s.AClashOfKingsCore);
    await fede.choosePlot (s.AGameOfThronesCore);
    await leo.selectFirstPlayer (leo);
    await leo.endPlotPhase ();
    await fede.draw ();
    await leo.draw ();
    await leo.endDrawPhase ();
    await leo.marshall (maesterCressen);
    await fede.marshall (burnedMen);
    await fede.marshallAttachment (nobleLineage, burnedMen);

    return true;
  } // execute

} // T005_AStormOfSwordsCore