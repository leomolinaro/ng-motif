import { RequestChoice } from '../../models/request-choice.model';
import { Store, select, createSelector } from '@ngrx/store';
import { Card } from '../../models/card.model';
import { MotifComponent } from '../../../shared/components/motif.component';
import { AgotGameService } from '../services/agot-game.service';
import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, share, tap, filter } from 'rxjs/operators';
import { AgotCardHoverService } from '../services/agot-card-hover.service';
import { MatMenuTrigger } from '@angular/material';

import * as fromAgot from '../../store/agot.reducer';

interface RequestChoiceView {
  requestChoice: RequestChoice,
  label: string
}

@Component({
  selector: 'agot-card',
  templateUrl: './agot-card.component.html',
  styleUrls: ['./agot-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgotCardComponent extends MotifComponent {

  @ViewChild(MatMenuTrigger, { static: false }) menuTrigger: MatMenuTrigger;
  @Input() card: Card;
  @Input() horizontal: boolean;
  
  dupSpan$: Observable<number>;
  attSpan: number;
  powerArray: any[];

  active$: Observable<boolean>;
  entered: boolean;
  choices$: Observable<RequestChoiceView[]>;

  attachments$: Observable<Card[]>;
  duplicates$: Observable<Card[]>;

  constructor (
    private store: Store<any>,
    private hoverService: AgotCardHoverService,
    private requestService: AgotGameService
  ) { super (); }
  
  ngOnChanges(changes: SimpleChanges) {
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

    const choices$ = this.requestService.getCardChoices$(this.card.id);

    this.choices$ = choices$.pipe(
      map(choices => choices ? choices.map(choice => ({
        requestChoice: choice,
        label: this.getLabelByChoice(choice)
      })) : [])
    );

    this.active$ = choices$.pipe(map(choices => choices && choices.length > 0))

  }

  getLabelByChoice(choice: RequestChoice): string {
    switch (choice.choiceType) {
      case "SELECT_CARD": return "Select";
      case "SELECT_CARD_ACTION": {
        switch (choice.cardAction) {
          case "ACTION": return "Action";
          case "INTERRUP": return "Interrupt";
          case "MARSHALL": return "Marshall";
          case "PLAY": return "Play";
          case "REACTION": return "Reaction";
        }
      }
    }
    return "---";
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribeAll ();
    if (this.entered) {
      this.entered = false;
      this.hoverService.onCardLeave (null);
    }
  }

  onClick(active: boolean) {
    if (active) {
      this.menuTrigger.openMenu();
    }
  }
  
  onClickChoice(choice: RequestChoice) {
    this.requestService.respond(choice);
  }

  onMouseEnter(card: Card, event: MouseEvent) {
    this.entered = true;
    this.hoverService.onCardEnter(card, event.x/* , this.show */);
  }
  
  onMouseLeave(card: Card, event: MouseEvent) {
    this.entered = false;
    this.hoverService.onCardLeave(card);
  }

}