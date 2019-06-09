import { Observable } from 'rxjs';
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
  cardIds$: Observable<number[]>;

  constructor (
    public dialogRef: MatDialogRef<AgotCardsDialogComponent>,
    @Inject (MAT_DIALOG_DATA) data: AgotCardsDialogData
  ) {
    this.cardIds$ = data.cardIds$;
    this.horizontal = true;
  } // constructor

  ngOnInit () {
  } // ngOnInit

} // AgotCardsDialogComponent



// export class AgotCardsDialogData {
//   constructor (public pla: Pla, public cards: FireCrd[], public actions: { uid: string, label: string }[], public horizontal: boolean) {}
// } // AgotCardSelectorInput

// export class AgotCardSelectorComponent implements OnInit {

//   cards: FireCrd[];
//   actions: { uid: string, label: string }[];
//   pla: Pla;
//   horizontal: boolean;

//   constructor (public dialogRef: MatDialogRef<AgotCardSelectorComponent>, @Inject(MAT_DIALOG_DATA) data: AgotCardSelectorInput) {
//     this.cards = data.cards;
//     this.pla = data.pla;
//     this.actions = data.actions;
//     this.horizontal = data.horizontal;
//   } // constructor

//   ngOnInit () {
//   } // ngOnInit

//   onCardClick (card: Crd) { this.dialogRef.close (new AgotCardSelectorOutput (card, null)); }

//   onCardAction (card: Crd, actionUid: string) { this.dialogRef.close (new AgotCardSelectorOutput (card, actionUid)); }

// } // AgotCardSelectorComponent
