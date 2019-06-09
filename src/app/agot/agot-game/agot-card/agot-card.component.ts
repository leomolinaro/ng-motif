import { RequestChoice } from '../../models/request-choice.model';
import { Store, select } from '@ngrx/store';
import { Card } from '../../models/card.model';
import { MotifComponent } from '../../../shared/components/motif.component';
import { AgotRequestService } from '../services/agot-request.service';
import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AgotCardHoverService } from '../services/agot-card-hover.service';
import { MatMenuTrigger } from '@angular/material';

import * as fromAgot from '../../store/agot.reducer';

@Component({
  selector: 'agot-card',
  templateUrl: './agot-card.component.html',
  styleUrls: ['./agot-card.component.css']
})
export class AgotCardComponent extends MotifComponent implements OnInit {

  @ViewChild (MatMenuTrigger, { static: true }) menuTrigger: MatMenuTrigger;
  @Input () cardId: number;
  @Input () horizontal: boolean;
  
  card$: Observable<Card>;
  card: Card;
  duplicateIds: number[];
  attachmentIds: number[];
  dupSpan: number;
  attSpan: number;
  powerArray: any[];

  active: boolean;
  entered: boolean;
  choices: RequestChoice[];

  constructor (
    private store: Store<any>,
    private hoverService: AgotCardHoverService,
    private requestService: AgotRequestService
  ) { super (); }
  
  ngOnChanges () {
    //console.log("ngOnChanges cardId", this.cardId);
  }

  ngOnInit () {
    //console.log("ngOnInit cardId", this.cardId);
    this.card$ = this.store.select (fromAgot.selectCardById (this.cardId));
    
    this.subscribe(this.card$, card => {
      //console.log("ngOnInit card", card);
      this.card = card;
      this.duplicateIds = card.duplicateIds;
      this.attachmentIds = card.attachmentIds; //console.log ("ngOnInit this.attachmentIds", this.attachmentIds);
      this.attSpan = this.attachmentIds ? this.attachmentIds.length : 0;
      this.powerArray = [];
      for (let i = 1; i <= this.card.power; i++) {
        this.powerArray.push(i);
      }
    });

    this.subscribe(this.card$.pipe(
      switchMap(c => {
        return combineLatest ([
          this.card$,
          ...(c.attachmentIds ? c.attachmentIds.map (attId => this.store.select (fromAgot.selectCardById (attId))) : [])
        ]);
      })
    ), attLst => {
        let dupSpan = 0;
        for (let att of attLst) {
          if (att.duplicateIds) {
            if (att.duplicateIds.length > dupSpan) { dupSpan = att.duplicateIds.length; }
          }
        }
      this.dupSpan = dupSpan;
    });

    this.subscribe(this.requestService.getCardChoices$(this.cardId), cardChoices => {
      this.choices = cardChoices;
      this.active = cardChoices && cardChoices.length > 0;
    });
  }

  ngOnDestroy () {
    //console.log ("destroy card", this.card);
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

  private onMouseEnter (event: MouseEvent) {
    this.entered = true;
    this.hoverService.onCardEnter (this.card, event.x/* , this.show */);
  } // onMouseEnter
  
  private onMouseLeave (event: MouseEvent) {
    this.entered = false;
    this.hoverService.onCardLeave (this.card);
  }

}
