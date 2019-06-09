import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface BritAreaClickEvent {
  areaId: string,
  svgX: number,
  svgY: number 
} // BritAreaClickEvent

export interface BritUnitClickEvent {
  unitId: string,
} // BritUnitClickEvent

@Injectable()
export class BritUIService {

  private areaClick = new Subject<BritAreaClickEvent> ();
  private unitClick = new Subject<BritUnitClickEvent> ();
  private passClick = new Subject<void> ();
  private continueClick = new Subject<void> ();

  areaClick$ = this.areaClick.asObservable ();
  unitClick$ = this.unitClick.asObservable ();
  passClick$ = this.passClick.asObservable ();
  continueClick$ = this.continueClick.asObservable ();

  onAreaClick (event: BritAreaClickEvent) { this.areaClick.next (event); }
  onUnitClick (event: BritUnitClickEvent) { this.unitClick.next (event); }
  onPassClick () { this.passClick.next (); }
  onContinueClick () { this.continueClick.next (); }

  constructor () { }

} // BritUIService
