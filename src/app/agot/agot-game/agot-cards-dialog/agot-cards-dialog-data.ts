import { Observable } from 'rxjs';

export class AgotCardsDialogData {
  constructor (public cardIds$: Observable<number[]>, horizontal: boolean) {}
}