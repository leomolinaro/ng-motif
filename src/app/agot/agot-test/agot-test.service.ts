import { T003_ANobleCause } from './list/agot-test.003_ANobleCause';
import { T047_Melisandre } from './list/agot-test.047_Melisandre';
import { T046_MasterCressen } from './list/agot-test.046_MasterCressen';
import { T002_AFeastForCrows } from './list/agot-test.002_AFeastForCrows';
import { T005_AStormOfSwords } from './list/agot-test.005_AStormOfSwords';
import { T188_GardenCaretaker } from './list/agot-test.188_GardenCaretaker';
import { Actions } from '@ngrx/effects';
import { AgotGameService } from './../agot-game/services/agot-game.service';
import { Store, Action } from '@ngrx/store';
import { T001_AClashOfKings } from './list/agot-test.001_AClashOfKings';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable ()
export class AgotTestService {
  
  constructor (
    private store: Store<any>,
    private actions$: Actions,
    private router: Router
  ) { }
  
  async launchTests () {
    const deps: [Store<any>, Actions<Action>, Router] = [this.store, this.actions$, this.router];
    // await new T001_AClashOfKings (...deps).execute ();
    // await new T002_AFeastForCrows (...deps).execute ();
    // await new T003_ANobleCause (...deps).execute ();
    // await new T005_AStormOfSwords (...deps).execute ();
    // await new T046_MasterCressen (...deps).execute ();
    await new T047_Melisandre (...deps).execute ();

    // await new T188_GardenCaretaker (...deps).execute ();
    console.log ("Test successfull!");
  } // launchTests

} // AgotTestService
