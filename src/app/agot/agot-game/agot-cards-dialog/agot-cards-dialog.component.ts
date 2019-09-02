import { Card } from './../../store/agot-game.reducer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { AgotCardsDialogData } from './agot-cards-dialog-data';

@Component({
  selector: 'app-agot-cards-dialog',
  templateUrl: './agot-cards-dialog.component.html',
  styleUrls: ['./agot-cards-dialog.component.css']
})
export class AgotCardsDialogComponent implements OnInit {

  horizontal: boolean;
  cards: Card[];

  constructor (
    public dialogRef: MatDialogRef<AgotCardsDialogComponent>,
    @Inject (MAT_DIALOG_DATA) data: AgotCardsDialogData
  ) {
    this.cards = data.cards;
    this.horizontal = data.horizontal;
  }

  ngOnInit () {
  }

}
