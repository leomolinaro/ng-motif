import { AgotCardsDialogData } from '../agot-cards-dialog/agot-cards-dialog-data';
import { Store } from '@ngrx/store';
import { Player } from '../../models/player.model';
import { MotifComponent } from '../../../shared/components/motif.component';
import { MatDialog } from '@angular/material/dialog';
import { AgotCardsDialogComponent } from '../agot-cards-dialog/agot-cards-dialog.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as fromAgot from '../../store/agot.reducer';

import { map, switchMap } from 'rxjs/operators';

interface PlayerUI {
  player$: Observable<Player>;
  faction$: Observable<number>;
  agenda$: Observable<number>;
  hand$: Observable<number[]>;
  characters$: Observable<number[]>;
  locations$: Observable<number[]>;
  discardPile$: Observable<number[]>;
  drawDeckEmpty$: Observable<boolean>;
  plotDeck$: Observable<number[]>;
  usedPlotPile$: Observable<number[]>;
  revealedPlot$: Observable<number>;
  deadPile$: Observable<number[]>;
  discardPileTop$: Observable<number>;
  deadPileTop$: Observable<number>;
  goldArray: number[]
}

@Component({
  selector: 'agot-table',
  templateUrl: './agot-table.component.html',
  styleUrls: ['./agot-table.component.css']
})
export class AgotTableComponent extends MotifComponent implements OnInit {
 
  playerUIs: PlayerUI[];

  constructor (
    private store: Store<any>,
    public dialog: MatDialog,
  ) { super (); }
  
  ngOnInit() {

    this.subscribe(this.store.select(fromAgot.selectPlayerIds), playerIds => {
      this.playerUIs = playerIds.map(playerId => {
        const discardPile$ = this.store.select(fromAgot.selectDiscardPile(playerId));
        const deadPile$ = this.store.select(fromAgot.selectDeadPile(playerId));
        const gold$ = this.store.select(fromAgot.selectGold(playerId));
        const goldArray = [];
        this.subscribe (gold$, g => {
          for (let i = 1; i <= g; i++) { goldArray.push (i); }
        });
        return {
          player$: this.store.select (fromAgot.selectPlayerByUsername (playerId)),
          faction$: this.store.select (fromAgot.selectFaction (playerId)),
          agenda$: this.store.select (fromAgot.selectAgenda (playerId)),
          hand$: this.store.select (fromAgot.selectHand (playerId)),
          characters$: this.store.select (fromAgot.selectCharacters (playerId)),
          locations$: this.store.select (fromAgot.selectLocations (playerId)),
          discardPile$: discardPile$,
          drawDeckEmpty$: this.store.select (fromAgot.selectDrawDeckEmpty (playerId)),
          plotDeck$: this.store.select (fromAgot.selectPlotDeck (playerId)),
          usedPlotPile$: this.store.select (fromAgot.selectUsedPlotPile (playerId)),
          revealedPlot$: this.store.select (fromAgot.selectRevealedPlot (playerId)),
          deadPile$: deadPile$,
          discardPileTop$: discardPile$.pipe (map (this.getTopPile)),
          deadPileTop$: deadPile$.pipe (map (this.getTopPile)),
          goldArray: goldArray
        }
      });
    });

  }

  getTopPile(pile) {
    if (pile && pile.length > 0) { return pile[pile.length - 1]; } else { return null; }
  }

  onPlayerPlotDeckClick(playerIndex: number) {
    this.openPlayerPlotDeckDialog(playerIndex);
  }

  openPlayerPlotDeckDialog(playerIndex: number) {
    let cardIds$ = this.playerUIs[playerIndex].plotDeck$;
    let dialogRef = this.dialog.open (AgotCardsDialogComponent, {
      height: '500px',
      width: '600px',
      data: new AgotCardsDialogData(cardIds$, true)
    });
  }

}
