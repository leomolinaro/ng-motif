import { Card } from './../../store/agot-game.reducer';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export class AgotCardHoverData {
  constructor (public card: Card, public left: boolean) {}
} // AgotCardHoverData

@Injectable()
export class AgotCardHoverService {

  constructor () { }

  private cardHover = new BehaviorSubject<AgotCardHoverData> (null);
  public cardHover$ = this.cardHover.asObservable ();
  public onCardEnter (crd: Card, xPx: number/* , show: boolean */) { this.cardHover.next (/* (crd.crdRvl || show) ? */ new AgotCardHoverData (crd, xPx > 700) /* : null */); }
  public onCardLeave (crd: Card) { this.cardHover.next (null); }

} // AgotCardHoverService
