import { Observable, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class MotifComponent implements OnDestroy {

  private subscriptions: Subscription[] = [];

  public subscribe<T> (obs$: Observable<T>, next?: (value: T) => void) {
    let subscription = obs$.subscribe (next);
    this.subscriptions.push (subscription);
  } // subscribe

  public unsubscribeAll () {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe ();
    } // for
  } // unsubscribeAll

  ngOnDestroy () {
    this.unsubscribeAll ();
  } // ngOnDestroy

} // MotifComponent