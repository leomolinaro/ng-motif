import { RequestChoice } from '../../models/request-choice.model';
import { Store, select, createSelector } from '@ngrx/store';
import { Card } from '../../models/card.model';
import { MotifComponent } from '../../../shared/components/motif.component';
import { AgotRequestService } from '../services/agot-request.service';
import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, share, tap, filter } from 'rxjs/operators';
import { AgotCardHoverService } from '../services/agot-card-hover.service';
import { MatMenuTrigger } from '@angular/material';

import * as fromAgot from '../../store/agot.reducer';

@Component({
  selector: 'agot-card',
  templateUrl: './agot-card.component.html',
  styleUrls: ['./agot-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgotCardComponent extends MotifComponent {

  @ViewChild (MatMenuTrigger, { static: true }) menuTrigger: MatMenuTrigger;
  @Input () card: Card;
  @Input () horizontal: boolean;
  
  dupSpan$: Observable<number>;
  attSpan: number;
  powerArray: any[];

  active: boolean;
  entered: boolean;
  choices: RequestChoice[];

  attachments$: Observable<Card[]>;
  duplicates$: Observable<Card[]>;

  constructor (
    private store: Store<any>,
    private hoverService: AgotCardHoverService,
    private requestService: AgotRequestService
  ) { super (); }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges cardId", this.card.id, changes);
    this.attSpan = this.card.attachmentIds ? this.card.attachmentIds.length : 0;
    this.powerArray = [];
    for (let i = 1; i <= this.card.power; i++) {
      this.powerArray.push(i);
    }
    this.attachments$ = this.store.select(fromAgot.selectAttachments(this.card.attachmentIds));
    this.duplicates$ = this.store.select(fromAgot.selectAttachments(this.card.duplicateIds));
    
    this.dupSpan$ = combineLatest(of(this.card), this.attachments$)
    .pipe(map(([card, attLst]) => {
      let dupSpan = card.duplicateIds ? card.duplicateIds.length : 0;
      for (let card of attLst) {
        if (card.duplicateIds) {
          if (card.duplicateIds.length > dupSpan) { dupSpan = card.duplicateIds.length; }
        }
      }
      return dupSpan;
    }));

  }

  ngOnInit () {
    console.log("ngOnInit cardId", this.card.id);
    
    // const cardAndAttLst$ = this.card$.pipe(
    //   switchMap(card => combineLatest([
    //     of(card),
    //     ...(card.attachmentIds ? card.attachmentIds.map(attId => this.store.select(fromAgot.selectCardById).pipe(map(c => c(attId)))) : [])
    //   ]))
    // );
    // this.dupSpan$ = cardAndAttLst$.pipe(map(cardAndAttLst => {
    //   let dupSpan = 0;
    //   for (let card of cardAndAttLst) {
    //     if (card.duplicateIds) {
    //       if (card.duplicateIds.length > dupSpan) { dupSpan = card.duplicateIds.length; }
    //     }
    //   }
    //   return dupSpan;
    // }));

    this.subscribe(this.requestService.getCardChoices$(this.card.id), cardChoices => {
      this.choices = cardChoices;
      this.active = cardChoices && cardChoices.length > 0;
    });
  }

  ngOnDestroy () {
    console.log ("destroy card", this.card.id);
    this.unsubscribeAll ();
    if (this.entered) {
      this.entered = false;
      this.hoverService.onCardLeave (null);
    }
  }

  onClick() {
    if (this.choices) {
      this.menuTrigger.openMenu();
    }
  }
  
  onClickChoice(choice: RequestChoice) {
    this.requestService.respond(choice);
  }

  private onMouseEnter (card: Card, event: MouseEvent) {
    this.entered = true;
    this.hoverService.onCardEnter(card, event.x/* , this.show */);
  } // onMouseEnter
  
  private onMouseLeave (card: Card, event: MouseEvent) {
    this.entered = false;
    this.hoverService.onCardLeave(card);
  }

}