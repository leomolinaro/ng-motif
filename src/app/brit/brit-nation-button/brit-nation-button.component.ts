import { BritNation } from './../models/brit-nation.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromBrit from '../store/brit.reducer';
import { MotifComponent } from '../../shared/components/motif.component';

@Component({
  selector: 'brit-nation-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-nation-button.component.html',
  styleUrls: ['./brit-nation-button.component.css']
})
export class BritNationButtonComponent extends MotifComponent implements OnInit {

  @Input() id: string;
  @Output() select = new EventEmitter<BritNation>();

  nation: BehaviorSubject<BritNation> = new BehaviorSubject<BritNation>(null);

  constructor(
    private store: Store<any>
  ) { super(); }

  ngOnInit() {
    this.subscribe(
      this.store.select(fromBrit.selectNationById(this.id)),
      n => this.nation.next(n)
    );
  }

  onClick() {
    this.select.emit(this.nation.getValue());
  }

}
