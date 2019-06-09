import { Store } from '@ngrx/store';
import { MessageOut } from './../../../shared/websocket/models/message-out.model';
import { RequestChoice } from '../../models/request-choice.model';
import { AgotRequestService } from '../services/agot-request.service';
import { MotifComponent } from '../../../shared/components/motif.component';
import { WebsocketService } from '../../../shared/websocket/websocket.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromAgot from '../../store/agot.reducer';

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

  choices: RequestChoice[];

  ngOnInit () {
    this.gameStarted$ = this.store.select(fromAgot.selectGameStarted);
    this.subscribe(this.requestService.genChoices$, genChoices => {
      this.choices = genChoices;
    });
  }

  startGame() {
    this.webSocket.send({ type: MessageOut.AGOT_START });
  }

  onChoiceClick(choice: RequestChoice) {
    this.requestService.respond(choice);
  }

}
