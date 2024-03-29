import { AgotApiService } from './../api/agot-api.service';
import { AgotRequestsSnackBarComponent } from './agot-requests-snack-bar/agot-requests-snack-bar.component';
import { ActivatedRoute } from '@angular/router';
import { AgotDemoService } from './services/agot-demo.service';
import { LogRow } from '../../shared/models/log-row.model';
import { MotifComponent } from '../../shared/components/motif.component';
import { AgotGameService, SnackBarRequest } from './services/agot-game.service';
import { AgotCardHoverService } from './services/agot-card-hover.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Store, Action } from '@ngrx/store';
import { MatSnackBarRef, MatSnackBar } from '@angular/material';

import * as fromAgot from '../store';
import * as fromAgotGame from '../store/agot-game.actions';
import { map, switchMap, tap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'agot-game',
  templateUrl: './agot-game.component.html',
  styleUrls: ['./agot-game.component.css']
})
export class AgotGameComponent extends MotifComponent implements OnInit {
  
  gameId: number;
  
  cardImage$: Observable<string>;
  round$: Observable<string>;
  phase$: Observable<string>;
  step$: Observable<string>;
  logRows$: Observable<LogRow[]>;
  user: string;
  gameStarted$: Observable<boolean>;
  
  playerIds$: Observable<string[]>;

  private requestsSnackBarRef: MatSnackBarRef<AgotRequestsSnackBarComponent>;
  private requestsSnackBarSubscription: Subscription;
  private snackBarRequests$: Observable<SnackBarRequest[]>;

  @ViewChild ("sidenav", { static: true }) sidenav: MatSidenav;
  
  constructor (
    private store: Store<any>,
    private hoverService: AgotCardHoverService,
    private demoService: AgotDemoService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private api: AgotApiService,
    private gameService: AgotGameService
  ) {
    super ();

    this.gameStarted$ = this.store.select (fromAgot.getGameStarted);
    this.cardImage$ = this.hoverService.cardHover$.pipe (
      map (c => c ? c.card.imageSource : "./assets/card-back.jpg")
    );
    this.round$ = this.store.select (fromAgot.getGameRound);
    this.phase$ = this.store.select (fromAgot.getGamePhase);
    this.step$ = this.store.select (fromAgot.getGameStep);
    this.logRows$ = this.store.select (fromAgot.getGameLog).pipe (
      tap (() => setTimeout (() => {
        let objDiv = document.getElementById ("log-list");
        objDiv.scrollTop = objDiv.scrollHeight;
      }))
    );
    this.snackBarRequests$ = this.gameService.snackBarRequests$;

  } // constructor
  
  protected sidenavWasOpen = false;

  ngOnInit () {
    this.gameId = +this.route.snapshot.params["id"];

    this.store.dispatch (fromAgotGame.gameGet ({ gameId: this.gameId }));
    this.store.dispatch (fromAgotGame.requestsGet ({ gameId: this.gameId }));
    this.store.dispatch (fromAgotGame.requestsSubscription ({ gameId: this.gameId }));
    this.store.dispatch (fromAgotGame.changesSubscription ({ gameId: this.gameId }));

    this.subscribe (this.snackBarRequests$, snackBarRequests => {
      if (snackBarRequests.length) {
        this.showRequestsSnackBar (snackBarRequests);
      } else {
        this.removeRequestsSnackBar ();
      } // if - else
    });

  } // ngOnInit

  ngOnDestroy () {
    this.store.dispatch (fromAgotGame.gameReset ());
    this.store.dispatch (fromAgotGame.requestsReset ());
    this.store.dispatch (fromAgotGame.requestsUnsubscription ({ gameId: this.gameId }));
    this.store.dispatch (fromAgotGame.changesUnsubscription ({ gameId: this.gameId }));
    super.ngOnDestroy ();
  } // ngOnDestroy

  private showRequestsSnackBar (requests: SnackBarRequest[]) {
    this.requestsSnackBarRef = this.snackBar.openFromComponent (AgotRequestsSnackBarComponent, { data: requests, verticalPosition: "top" });
    this.requestsSnackBarSubscription = this.requestsSnackBarRef.instance.choice$.subscribe (choice => this.gameService.respond (choice));
  } // showRequestSnackBar

  private removeRequestsSnackBar () {
    if (this.requestsSnackBarRef) {
      this.requestsSnackBarSubscription.unsubscribe ();
      this.requestsSnackBarRef.dismiss ();
      this.requestsSnackBarRef = null;
    } // if 
  } // removeRequestSnackBar

  startGame () {
    this.store.dispatch (fromAgotGame.gameStart ({ gameId: this.gameId }));
  } // startGame

  debugState () {
    this.store.select (fromAgot.getAgotState).subscribe (x => console.log (x));
  } // debugState

  testState () {
    this.store.dispatch (fromAgotGame.gameGetSuccess ({ game: this.demoService.getComplexGame () }));
  } // testState

} // AgotGameComponent
