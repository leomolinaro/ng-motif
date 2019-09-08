import { AgotCardSeed as s, AngIcon } from './../../../graphql-types';
import { AgotTest } from '../agot-test';
import * as decks from '../decks/agot-core-decks';

export class T047_Melisandre extends AgotTest {
  
  async execute () {
    await this.goToHomePage ();
    const { game, leo, fede } = await this.newGame ("T047_Melisandre", decks.baratheonDeck (), decks.lannisterDeck ());
    await this.goToGamePage (game.id);
    
    await this.startGame (game.id);

    const [melisandre, fieryFollowers, dragonstonePort1, dragonstonePort2, dragonstonePort3] = await leo.drawQty (
      { seed: s.MelisandreCore, qty: 1 },
      { seed: s.FieryFollowersCore, qty: 1 },
      { seed: s.DragonstonePortCore, qty: 3 },
    );
    await leo.rejectMulligan ();
    const [burnedMen1, burnedMen2] = await await fede.drawQty (
      { seed: s.BurnedMenCore, qty: 2 },
    );
    await fede.rejectMulligan ();
    await leo.choosePlot (s.ANobleCauseCore);
    await fede.choosePlot (s.AGameOfThronesCore);
    await fede.selectFirstPlayer (fede);
    await fede.endPlotPhase ();
    await leo.draw ();
    await fede.draw ();
    await fede.endDrawPhase ();
    await fede.marshall (burnedMen1);
    await fede.marshall (burnedMen2);
    // await leo.marshall (dragonstonePort1);
    // await leo.marshall (dragonstonePort2);
    // await leo.marshall (dragonstonePort3);
    // await leo.action (dragonstonePort1);
    // await leo.action (dragonstonePort2);
    // await leo.action (dragonstonePort3);
    // await leo.marshall (melisandre);
    // await leo.marshall (fieryFollowers);
    // await fede.marshallAttachment (nobleLineage, burnedMen);

    return true;
  } // execute

} // T005_AStormOfSwordsCore