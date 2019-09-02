import { AgotChoiceWrapper } from './../services/agot-game.service';
import { Store } from '@ngrx/store';
import { AgotGameService } from '../services/agot-game.service';
import { MotifComponent } from '../../../shared/components/motif.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAgot from '../../store';

@Component({
  selector: 'agot-button-list',
  templateUrl: './agot-button-list.component.html',
  styleUrls: ['./agot-button-list.component.css']
})
export class AgotButtonListComponent extends MotifComponent implements OnInit {
  
  gameStarted$: Observable<boolean>;
  
  constructor (
    private gameService: AgotGameService,
    private store: Store<any>
  ) { super (); }

  choices$: Observable<AgotChoiceWrapper[]>;

  ngOnInit () {
    this.gameStarted$ = this.store.select(fromAgot.getGameStarted);
    this.choices$ = this.gameService.genChoices$;
  } // ngOnInit

  startGame () {
    this.gameService.startGame ();
  }

  createGame () {
    this.gameService.createGame ();
  }

  getGame () {
    this.gameService.getGame ();
  }

  onChoiceClick (choice: AgotChoiceWrapper) {
    this.gameService.respond (choice);
  }

}
