import { AgotChoice } from './../../../graphql-types';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AgotGameService } from '../services/agot-game.service';
import { MotifComponent } from '../../../shared/components/motif.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAgot from '../../store/agot.reducer';

interface ChoiceView {
  label: string;
  requestChoice: AgotChoice;
}

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

  choices$: Observable<ChoiceView[]>;

  ngOnInit () {
    this.gameStarted$ = this.store.select(fromAgot.selectGameStarted);
    const choices$ = this.gameService.genChoices$;

    this.choices$ = choices$.pipe (
      // tap(x => console.log("XXX", x)),
      map(choices => choices ? choices.map(choice => ({
        requestChoice: choice,
        label: this.getLabelFromChoice(choice)
      })) : [])
    );
  }

  getLabelFromChoice (choice: AgotChoice) {
    switch (choice.choiceType) {
      case "PASS": return "Pass";
      case "SELECT_ICON": {
        switch (choice.icon) {
          case "INTRIGUE": return "Intrigue";
          case "POWER": return "Power";
          case "MILITARY": return "Military";
        }
      };
      case "CONTINUE": return "Continue";
      case "SELECT_PLAYER": return choice.player;
    }
    return "---";
  }

  startGame () {
    this.gameService.startGame ();
  }

  createGame () {
    this.gameService.createGame ();
  }

  getGame () {
    this.gameService.getGame ();
  }

  onChoiceClick (choice: AgotChoice) {
    this.gameService.respond (choice);
  }

}
