import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as fromAgotHome from '../store/agot-home.actions';
import * as fromAgot from '../store';
import { Store } from '@ngrx/store';
import { MotifComponent } from './../../shared/components/motif.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agot-home',
  templateUrl: './agot-home.component.html',
  styleUrls: ['./agot-home.component.scss']
})
export class AgotHomeComponent extends MotifComponent implements OnInit {

  protected games$ = this.store.select (fromAgot.getHomeGames);

  constructor (
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute
  ) { super (); }

  ngOnInit () {
    this.store.dispatch (fromAgotHome.gamesGet ());
  } // ngOnInit

  newGame () {
    this.store.dispatch (fromAgotHome.gameNew ());
  } // newGame

  openGame (gameId: number) {
    this.router.navigate (["..", "game", gameId], { relativeTo: this.route });
  } // openGame

} // AgotHomeComponent
