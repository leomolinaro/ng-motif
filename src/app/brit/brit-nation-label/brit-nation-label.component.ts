import { BritNation } from './../models/brit-nation.model';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';

@Component({
  selector: 'brit-nation-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-nation-label.component.html',
  styleUrls: ['./brit-nation-label.component.css']
})
export class BritNationLabelComponent implements OnInit {

  @Input() id;

  nation$: Observable<BritNation>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.nation$ = this.store.select(fromBrit.selectNationById(this.id));
  }

}
