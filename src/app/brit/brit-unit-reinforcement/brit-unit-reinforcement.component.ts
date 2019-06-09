import { BritUIService } from './../services/brit-ui.service';
import { BritUnit } from './../models/brit-unit.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';

@Component({
  selector: 'brit-unit-reinforcement',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-unit-reinforcement.component.html',
  styleUrls: ['./brit-unit-reinforcement.component.css']
})
export class BritUnitReinforcementComponent implements OnInit {

  @Input () id: string;

  unit$: Observable<BritUnit>;

  constructor (
    private store: Store<any>,
    private uiService: BritUIService
  ) { }

  ngOnInit () {
    this.unit$ = this.store.select (fromBrit.selectUnitById (this.id));
  } // ngOnInit

  onUnitClick () {
    this.uiService.onUnitClick ({ unitId: this.id });
  } // onUnitClick

} // BritUnitReinforcementComponent
