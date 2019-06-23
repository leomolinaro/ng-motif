import { Card } from './../../models/card.model';
import { Observable } from 'rxjs';

export class AgotCardsDialogData {
  constructor (public cards$: Observable<Card[]>, horizontal: boolean) {}
}