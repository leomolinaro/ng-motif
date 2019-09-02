import { Store } from '@ngrx/store';
import { Router, ActivationEnd } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';

import * as fromActions from './motif-router.actions';

@Injectable ()
export class MotifRouterEffects {
  
  constructor (
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<any>
  ) {
      this.listenToRouter ();
  } // constructor


  // @Effect({ dispatch: false })

  // navigate$ = createEffect (() => this.actions$.pipe (
  //   ofType (fromActions.routerGo),
  //   tap ((action) => this.router.navigate (action.path, { action.queryParams, ...action.extras }))
  // ));


  // @Effect({ dispatch: false })
  // navigateBack$ = this.actions$.pipe(ofType('[Router] Back'), tap(() => this.location.back()));

  // @Effect({ dispatch: false })
  // navigateForward$ = this.actions$.pipe(
  //     ofType('[Router] Forward'),
  //     tap(() => this.location.forward())
  // );

  private listenToRouter () {
    // this.router.events.pipe (
    //     filter (event => event instanceof ActivationEnd)
    // ).subscribe((event: ActivationEnd) =>
    //   this.store.dispatch (fromActions.routerChange ({
    //       params: { ...event.snapshot.params },
    //       path: event.snapshot.routeConfig.path
    //   }))
    // );
  } // listenToRouter

} // MotifRouterEffects