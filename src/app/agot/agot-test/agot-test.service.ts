import { Actions } from '@ngrx/effects';
import { AgotGameService } from './../agot-game/services/agot-game.service';
import { Store } from '@ngrx/store';
import { T001_AClashOfKings } from './list/agot-test.001_AClashOfKings';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable ()
export class AgotTestService {
  
  constructor (
    private store: Store<any>,
    private actions$: Actions,
    private router: Router,
    private gameService: AgotGameService
  ) { }
  
  async launchTests () {
    await new T001_AClashOfKings (this.store, this.actions$, this.router, this.gameService).execute ();
  } // launchTests

} // AgotTestService
