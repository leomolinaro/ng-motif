import { AngFaction, AgotCardSeed as s, AgotChoiceType, AgotRequestType } from './../../../graphql-types';
import { AgotTest } from '../agot-test';
import { InputPlayerInput } from 'src/app/graphql-types';

export class T001_AClashOfKings extends AgotTest {
  
  async execute () {
    const { game, p1: leo, p2: fede } = await this.newGame ("T001_AClashOfKings", [this.getPlayer1 (), this.getPlayer2 ()]);
    await this.goToGamePage (game.id);
    
    const aClashOfKings = await leo.getCardFromPlotDeck (s.AClashOfKingsCore);
    const aNobleCauseCore = await fede.getCardFromPlotDeck (s.ANobleCauseCore);
    await this.startGame (game.id);

    await leo.draw (
      s.BastardInHidingCore,
      s.BastardInHidingCore,
      s.BastardInHidingCore,
      s.BastardInHidingCore,
      s.BastardInHidingCore,
      s.MaesterCressenCore,
      s.MaesterCressenCore
    );
    await leo.rejectMulligan ();
    await fede.draw (
      s.TargaryenLoyalistCore,
      s.TargaryenLoyalistCore,
      s.TargaryenLoyalistCore,
      s.TargaryenLoyalistCore,
      s.TargaryenLoyalistCore,
      s.HandmaidenCore,
      s.HandmaidenCore
    );
    await fede.rejectMulligan ();
    await fede.choosePlot (aNobleCauseCore);
    await leo.choosePlot (aClashOfKings);
    await leo.selectFirstPlayer (leo);
    await leo.endPlotPhase ();
    const [bastardInHiding] = await leo.draw (s.BastardInHidingCore, s.MaesterCressenCore);

  } // execute

  getPlayer1 (): InputPlayerInput {
    return {
      id: "leo",
      name: "Leo",
      faction: AngFaction.Baratheon,
      deck: [
        { card: s.AClashOfKingsCore, quantity: 7 },
        { card: s.BastardInHidingCore, quantity: 6 },
        { card: s.MaesterCressenCore, quantity: 3 }
      ]
    }; // return
  } // getPlayer1

  getPlayer2 (): InputPlayerInput {
    return {
      id: "fede",
      name: "Fede",
      faction: AngFaction.Targaryen,
      deck: [
        { card: s.ANobleCauseCore, quantity: 7 },
        { card: s.TargaryenLoyalistCore, quantity: 5 },
        { card: s.HandmaidenCore, quantity: 4 }
      ]
    }; // return
  } // getPlayer1

} // T001_AClashOfKings