import { Card } from './../../models/card.model';
import { AgotCardsDialogData } from '../agot-cards-dialog/agot-cards-dialog-data';
import { Store, MemoizedSelector } from '@ngrx/store';
import { Player } from '../../models/player.model';
import { MotifComponent } from '../../../shared/components/motif.component';
import { MatDialog } from '@angular/material/dialog';
import { AgotCardsDialogComponent } from '../agot-cards-dialog/agot-cards-dialog.component';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

import * as fromAgot from '../../store/agot.reducer';

import { map, switchMap, share, tap } from 'rxjs/operators';
import { DefaultProjectorFn } from '@ngrx/store/src/selector';

interface PlayerUI {
  reverseLayout: boolean;
  player$: Observable<Player>;
  faction$: Observable<Card>;
  agenda$: Observable<Card>;
  hand$: Observable<Card[]>;
  characters$: Observable<Card[]>;
  locations$: Observable<Card[]>;
  discardPile$: Observable<Card[]>;
  drawDeckEmpty$: Observable<boolean>;
  plotDeck$: Observable<Card[]>;
  usedPlotPile$: Observable<Card[]>;
  revealedPlot$: Observable<Card>;
  deadPile$: Observable<Card[]>;
  discardPileTop$: Observable<Card>;
  deadPileTop$: Observable<Card>;
  goldArray$: Observable<number[]>
}

@Component({
  selector: 'agot-table',
  templateUrl: './agot-table.component.html',
  styleUrls: ['./agot-table.component.css']
})
export class AgotTableComponent extends MotifComponent implements OnInit {
 
  playerUIs: PlayerUI[] = [];
  nPlayers = 2;

  constructor (
    private store: Store<any>,
    public dialog: MatDialog,
  ) { super (); }
  
  selectFromStore<T>(playerIds$: Observable<string[]>, selector: (playerId: string) => MemoizedSelector<object, T, DefaultProjectorFn<T>>, i: number) {
    return playerIds$.pipe(
      switchMap(playerIds => this.store.select(selector(playerIds[i])))
    );
  }
  
  // selectCardFromStore(playerIds$: Observable<string[]>, selector: (playerId: string) => MemoizedSelector<object, number, DefaultProjectorFn<number>>, i: number) {
  //   return this.selectFromStore(playerIds$, selector, i).pipe(
  //     map(cardId => this.store.select(fromAgot.selectCardById(cardId)))
  //   );
  // }

  // selectCardsFromStore(playerIds$: Observable<string[]>, selector: (playerId: string) => MemoizedSelector<object, number[], DefaultProjectorFn<number[]>>, i: number) {
  //   return this.selectFromStore(playerIds$, selector, i).pipe(
  //     switchMap(cardIds => cardIds.map(cardId => this.store.select(fromAgot.selectCardById(cardId))))
  //   );
  // }

  ngOnInit() {
    const playerIds$ = this.store.select(fromAgot.selectPlayerIds);
    let reverseLayout = true;
    for (let i = 0; i < this.nPlayers; i++) {
      const discardPile$ = this.selectFromStore(playerIds$, fromAgot.selectDiscardPile, i);
      const deadPile$ = this.selectFromStore(playerIds$, fromAgot.selectDeadPile, i);
      const gold$ = this.selectFromStore(playerIds$, fromAgot.selectGold, i);
      reverseLayout = !reverseLayout;
      const playerUI: PlayerUI = {
        reverseLayout: reverseLayout,
        player$: this.selectFromStore(playerIds$, fromAgot.selectPlayerById, i),
        faction$: this.selectFromStore(playerIds$, fromAgot.selectFaction, i),
        agenda$: this.selectFromStore(playerIds$, fromAgot.selectAgenda, i),
        hand$: this.selectFromStore(playerIds$, fromAgot.selectHand, i),
        characters$: this.selectFromStore(playerIds$, fromAgot.selectCharacters, i),
        locations$: this.selectFromStore(playerIds$, fromAgot.selectLocations, i),
        discardPile$: this.selectFromStore(playerIds$, fromAgot.selectDiscardPile, i),
        drawDeckEmpty$: this.selectFromStore(playerIds$, fromAgot.selectDrawDeckEmpty, i),
        plotDeck$: this.selectFromStore(playerIds$, fromAgot.selectPlotDeck, i),
        usedPlotPile$: this.selectFromStore(playerIds$, fromAgot.selectUsedPlotPile, i),
        revealedPlot$: this.selectFromStore(playerIds$, fromAgot.selectRevealedPlot, i),
        deadPile$: this.selectFromStore(playerIds$, fromAgot.selectDeadPile, i),
        discardPileTop$: discardPile$.pipe(map(this.getTopPile)),
        deadPileTop$: deadPile$.pipe(map (this.getTopPile)),
        goldArray$: gold$.pipe(map(gold => {
          let goldArray = [];
          for (let i = 1; i <= gold; i++) { goldArray.push (i); }
          return goldArray;
        }))
      };
      this.playerUIs.push(playerUI);
    }
  }

  getTopPile(pile) {
    if (pile && pile.length > 0) { return pile[pile.length - 1]; } else { return null; }
  }

  onPlayerPlotDeckClick(deck: Card[]) {
    let dialogRef = this.dialog.open(AgotCardsDialogComponent, {
      height: '500px',
      width: '600px',
      data: new AgotCardsDialogData(deck, true)
    });
  }

  trackCard(index: number, card: Card) {
    return card.id;
  }

}
