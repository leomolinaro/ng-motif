import { AgotCardSeed as s, AngIcon } from './../../../graphql-types';
import { AgotTest } from '../agot-test';
import * as decks from '../decks/agot-core-decks';

export class T005_AStormOfSwords extends AgotTest {
  
  async execute () {
    await this.goToHomePage ();
    const { game, leo, fede } = await this.newGame ("T005_AStormOfSwords", decks.starkDeck (), decks.baratheonDeck ());
    await this.goToGamePage (game.id);
    
    await this.startGame (game.id);

    const [tumblestoneKnight1, tumblestoneKnight2, heartTreeGrove] = await leo.drawQty (
      { seed: s.TumblestoneKnightCore, qty: 2 },
      { seed: s.HeartTreeGroveCore, qty: 1 },

    );
    await leo.rejectMulligan ();
    await fede.drawQty ();
    await fede.rejectMulligan ();
    await fede.choosePlot (s.AClashOfKingsCore);
    await leo.choosePlot (s.AStormOfSwordsCore);
    await fede.selectFirstPlayer (leo);
    await leo.endPlotPhase ();
    await fede.draw ();
    await leo.draw ();
    await leo.endDrawPhase ();
    await leo.marshall (heartTreeGrove);
    await leo.action (heartTreeGrove);
    await leo.marshall (tumblestoneKnight1);
    await leo.marshall (tumblestoneKnight2);
    await leo.endMarshallingPhase ();
    await leo.initiateChallenge (AngIcon.Military, fede, tumblestoneKnight1);
    await leo.endChallenge ();
    await leo.initiateChallenge (AngIcon.Military, fede, tumblestoneKnight2);

    return true;
  } // execute

} // T005_AStormOfSwordsCore