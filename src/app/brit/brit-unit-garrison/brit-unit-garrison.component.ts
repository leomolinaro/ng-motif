import { BritRequestService } from './../services/brit-request.service';
import { BritUnit } from './../models/brit-unit.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';
import { BritUIService } from '../services/brit-ui.service';
import { map } from 'rxjs/operators';

@Component({
  selector: '[brit-unit-garrison]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-unit-garrison.component.html',
  styleUrls: ['./brit-unit-garrison.component.css']
})
export class BritUnitGarrisonComponent implements OnInit {

  @Input() id: string;

  unit$: Observable<BritUnit>;
  selectable$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private uiService: BritUIService,
    private requestService: BritRequestService
  ) { }

  ngOnInit() {
    this.unit$ = this.store.select(fromBrit.selectUnitById(this.id));
    this.selectable$ = this.requestService.selectableUnits$.pipe(
      map(selectableUnits => !!selectableUnits[this.id])
    );
  }

  onUnitClick() {
    this.uiService.onUnitClick({ unitId: this.id });
  }

}
