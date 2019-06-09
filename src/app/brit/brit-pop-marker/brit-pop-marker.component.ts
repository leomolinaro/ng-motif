import { BritNation } from './../models/brit-nation.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';

@Component({
  selector: '[brit-pop-marker]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-pop-marker.component.html',
  styleUrls: ['./brit-pop-marker.component.css']
})
export class BritPopMarkerComponent implements OnInit {

  @Input() id;

  nation$: Observable<BritNation>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.nation$ = this.store.select(fromBrit.selectNationById(this.id));
  }

}
