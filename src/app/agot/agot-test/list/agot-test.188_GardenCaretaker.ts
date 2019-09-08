import { AngFaction, AgotCardSeed as s, AgotChoiceType, AgotRequestType, AngIcon, CharacterCard } from '../../../graphql-types';
import { AgotTest } from '../agot-test';
import { InputPlayerInput } from 'src/app/graphql-types';

import * as fromAgot from '../../store';

export class T188_GardenCaretaker extends AgotTest {
  
  async execute (): Promise<boolean> {
    

    return false;
  } // execute

  getPlayer1 (): InputPlayerInput {
    return {
      id: "leo",
      name: "Leo",
      faction: AngFaction.Tyrell,
      deck: [
        { card: s.AClashOfKingsCore, quantity: 7 },
        { card: s.GardenCaretakerCore, quantity: 6 },
        { card: s.CourtesanOfTheRoseCore, quantity: 3 }
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
        { card: s.TargaryenLoyalistCore, quantity: 6 },
        { card: s.HandmaidenCore, quantity: 3 }
      ]
    }; // return
  } // getPlayer1

} // T001_AClashOfKings