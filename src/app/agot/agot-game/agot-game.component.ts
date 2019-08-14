import { AgotDemoService } from './services/agot-demo.service';
import { InitGame } from './../store/agot.actions';
import { MessageOut } from './../../shared/websocket/models/message-out.model';
import { LogRow } from '../../shared/models/log-row.model';
import { MotifComponent } from '../../shared/components/motif.component';
import { AgotGameService } from './services/agot-game.service';
import { AuthService } from '../../shared/login/auth.service';
import { WebsocketService } from '../../shared/websocket/websocket.service';
import { AgotCardHoverService, AgotCardHoverData } from './services/agot-card-hover.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Store, Action } from '@ngrx/store';

import * as fromAgot from '../store/agot.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'agot-game',
  templateUrl: './agot-game.component.html',
  styleUrls: ['./agot-game.component.css']
})
export class AgotGameComponent extends MotifComponent implements OnInit {
  cardImage$: Observable<string>;
  round$: Observable<string>;
  phase$: Observable<string>;
  step$: Observable<string>;
  logRows$: Observable<LogRow[]>;
  user: string;
  gameStarted$: Observable<boolean>;
  
  playerIds$: Observable<string[]>;

  @ViewChild ("sidenav", { static: true }) sidenav: MatSidenav;
  
  constructor (
    private store: Store<any>,
    private hoverService: AgotCardHoverService,
    private webSocket: WebsocketService,
    private loginService: AuthService,
    private gameService: AgotGameService,
    private demoService: AgotDemoService
  ) { super (); }
  
  private sidenavWasOpen = false;

  ngOnInit () {
    this.gameStarted$ = this.store.select(fromAgot.selectGameStarted);
    this.cardImage$ = this.hoverService.cardHover$.pipe(
      map(c => c ? c.card.imageSource : "./assets/card-back.jpg")
    )
    this.round$ = this.store.select<string>(fromAgot.selectGameRound);
    this.phase$ = this.store.select<string>(fromAgot.selectGamePhase);
    this.step$ = this.store.select<string>(fromAgot.selectGameStep);
    this.logRows$ = this.store.select<LogRow[]>(fromAgot.selectGameLog);

    this.gameService.loadAll ();

    this.subscribe (this.loginService.user$, user => {
      this.user = user;
      if (user) {
        this.webSocket.send({ type: MessageOut.AGOT_INIT_STATE });
      }
    });
    
    this.subscribe (this.logRows$, l => {
      setTimeout (function () {
        let objDiv = document.getElementById ("log-list");
        objDiv.scrollTop = objDiv.scrollHeight;
      });
    });

    this.subscribe (this.webSocket.agotReduxActions$, message => {
      for (let action of message.data.actions) {
        this.store.dispatch (action);
      }
    });

  } // ngOnInit

  debugState () {
    this.store.select(fromAgot.selectAgot).subscribe(x => console.log(x));
  } // debugState

  login (username: string) {
    if (!this.user) {
      this.loginService.login ("leo.molinaro");
    }
  }

  dispatch (action: Action) {
    this.store.dispatch (action);
    this.closeSidenav ();
  } // dispatch

  openSidenav () {
    this.sidenav.open ();
  } // openSettings

  closeSidenav () {
    this.sidenav.close ();
  } // closeSettings

  testState() {
    // this.store.dispatch(new InitState({ state: this.demoService.getEmptyState() }));
    this.store.dispatch(new InitGame({ game: this.demoService.getComplexState().game }));
  }

}

