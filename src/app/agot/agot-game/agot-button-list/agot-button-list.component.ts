import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MessageOut } from './../../../shared/websocket/models/message-out.model';
import { RequestChoice } from '../../models/request-choice.model';
import { AgotRequestService } from '../services/agot-request.service';
import { MotifComponent } from '../../../shared/components/motif.component';
import { WebsocketService } from '../../../shared/websocket/websocket.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAgot from '../../store/agot.reducer';

interface ChoiceView {
  label: string;
  requestChoice: RequestChoice;
}

@Component({
  selector: 'agot-button-list',
  templateUrl: './agot-button-list.component.html',
  styleUrls: ['./agot-button-list.component.css']
})
export class AgotButtonListComponent extends MotifComponent implements OnInit {
  
  private gameStarted$: Observable<boolean>;
  
  constructor (
    private webSocket: WebsocketService,
    private requestService: AgotRequestService,
    private store: Store<any>
  ) { super (); }

  choices$: Observable<ChoiceView[]>;

  ngOnInit () {
    this.gameStarted$ = this.store.select(fromAgot.selectGameStarted);
    const choices$ = this.requestService.genChoices$;

    this.choices$ = choices$.pipe(
      // tap(x => console.log("XXX", x)),
      map(choices => choices ? choices.map(choice => ({
        requestChoice: choice,
        label: this.getLabelFromChoice(choice)
      })) : [])
    );
  }

  getLabelFromChoice(choice: RequestChoice) {
    switch(choice.choiceType) {
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

  startGame() {
    this.webSocket.send({ type: MessageOut.AGOT_START });
  }

  onChoiceClick(choice: RequestChoice) {
    this.requestService.respond(choice);
  }

}
