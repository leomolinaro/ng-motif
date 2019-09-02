import { AgotDemoService } from './services/agot-demo.service';
import { InitGame } from '../store/agot-game.actions';
import { LogRow } from '../../shared/models/log-row.model';
import { MotifComponent } from '../../shared/components/motif.component';
import { AgotGameService } from './services/agot-game.service';
import { AuthService } from '../../shared/login/auth.service';
import { AgotCardHoverService } from './services/agot-card-hover.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Store, Action } from '@ngrx/store';

import * as fromAgot from '../store';
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
    private loginService: AuthService,
    private gameService: AgotGameService,
    private demoService: AgotDemoService
  ) { super (); }
  
  protected sidenavWasOpen = false;

  ngOnInit () {
    this.gameStarted$ = this.store.select(fromAgot.getGameStarted);
    this.cardImage$ = this.hoverService.cardHover$.pipe(
      map(c => c ? c.card.imageSource : "./assets/card-back.jpg")
    )
    this.round$ = this.store.select (fromAgot.getGameRound);
    this.phase$ = this.store.select (fromAgot.getGamePhase);
    this.step$ = this.store.select (fromAgot.getGameStep);
    this.logRows$ = this.store.select (fromAgot.getGameLog);

    this.gameService.loadAll ();

    this.subscribe (this.logRows$, l => {
      setTimeout (function () {
        let objDiv = document.getElementById ("log-list");
        objDiv.scrollTop = objDiv.scrollHeight;
      });
    });

  } // ngOnInit

  debugState () {
    this.store.select (fromAgot.getAgotState).subscribe (x => console.log (x));
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

  testState () {
    this.store.dispatch (new InitGame ({ game: this.demoService.getComplexGame () }));
  }

}

