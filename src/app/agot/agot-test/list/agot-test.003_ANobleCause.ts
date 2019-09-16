import { AgotCardSeed as s } from '../../../graphql-types';
import { AgotTest } from '../agot-test';
import * as decks from '../decks/agot-core-decks';

import * as fromAgot from '../../store';

export class T003_ANobleCause extends AgotTest {
  
  async execute (): Promise<boolean> {
    await this.goToHomePage ();
    const { game, leo, fede } = await this.newGame ("T003_ANobleCause", decks.baratheonDeck (), decks.starkDeck ());
    await this.goToGamePage (game.id);
    
    await this.startGame (game.id);

    const [theKingsRoad, robertBaratheon] = await leo.draw (s.TheKingsroadCore, s.RobertBaratheonCore);
    await leo.rejectMulligan ();
    await fede.draw ();
    await fede.rejectMulligan ();
    await leo.setup (theKingsRoad);
    await leo.choosePlot (s.ANobleCauseCore);
    await fede.choosePlot (s.ANobleCauseCore);
    await leo.selectFirstPlayer (leo);
    await leo.endPlotPhase ();
    await leo.draw ();
    await fede.draw ();
    await leo.endDrawPhase ();
    await leo.marshall (robertBaratheon);
    await this.assertsEqual (fromAgot.getGold (leo.playerId), 0);
    await leo.endMarshallingPhase ();
    await leo.endChallengePhase ();
    await leo.endDominancePhase ();
    await leo.endStandingPhase ();
    // TODO testare prossimo turno effetto svanito anche se non consumato
    // await leo.endTaxationPhase ();
    return true;
  } // execute

} // T003_ANobleCause