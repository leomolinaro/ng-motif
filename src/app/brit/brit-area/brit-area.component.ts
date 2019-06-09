import { MotifComponent } from './../../shared/components/motif.component';
import { BritRequestService } from './../services/brit-request.service';
import { BritArea } from './../models/brit-area.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import * as fromBrit from '../store/brit.reducer';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: '[brit-area]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brit-area.component.html',
  styleUrls: ['./brit-area.component.scss']
})
export class BritAreaComponent implements OnInit {

  @Output() areaClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() id: string;
  area$: Observable<BritArea>;
  selectable$: Observable<boolean>;
  highlight$: Observable<boolean>;
  color$: Observable<string>;

  constructor(
    private store: Store<any>,
    private requestService: BritRequestService
  ) { }

  ngOnInit() {
    this.area$ = this.store.select(fromBrit.selectAreaById(this.id));
    this.selectable$ = this.requestService.selectableAreas$.pipe(
      map(selectableAreas => !!selectableAreas[this.id])
    );
    this.highlight$ = this.store.select(fromBrit.selectBattle).pipe(
      map(battle => battle ? (battle.battleLandId == this.id) : false)
    );
    this.color$ = this.area$.pipe(
      map(area => area.nationId),
      switchMap(nationId => this.store.select(fromBrit.selectNationById(nationId))),
      map(nation => nation ? nation.color : null)
    );
  }

  onAreaClick(area: BritArea, event: MouseEvent) {
    this.areaClick.emit(event);
  }

}
