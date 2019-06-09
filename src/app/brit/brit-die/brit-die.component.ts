import { BritUnit } from './../models/brit-unit.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BritDie } from '../models/brit-die';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';

@Component({
  selector: 'brit-die',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-die.component.html',
  styleUrls: ['./brit-die.component.css']
})
export class BritDieComponent implements OnInit {

  @Input() die: BritDie;

  unit$: Observable<BritUnit>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.unit$ = this.store.select(fromBrit.selectUnitById(this.die.unitId));
  }

}
