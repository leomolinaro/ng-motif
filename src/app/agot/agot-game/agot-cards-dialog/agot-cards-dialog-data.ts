import { Card } from './../../store/agot-game.reducer';

export class AgotCardsDialogData {
  constructor (public cards: Card[], public horizontal: boolean) {}
}