import { Observable } from 'rxjs';
import { BritNation } from './../models/brit-nation.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';

@Component({
  selector: 'brit-nation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-nation.component.html',
  styleUrls: ['./brit-nation.component.css']
})
export class BritNationComponent implements OnInit {

  @Input() id;

  nation$: Observable<BritNation>;

  constructor (
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.nation$ = this.store.select(fromBrit.selectNationById(this.id));
  }

}
