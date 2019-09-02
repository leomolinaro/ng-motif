import * as fromAgotHome from '../store/agot-home.actions';
import * as fromAgot from '../store';
import { Store } from '@ngrx/store';
import { MotifComponent } from './../../shared/components/motif.component';
import { AgotRemoteService } from './../store/agot-remote.service';
import { AgotApiService } from './../api/agot-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agot-home',
  templateUrl: './agot-home.component.html',
  styleUrls: ['./agot-home.component.scss']
})
export class AgotHomeComponent extends MotifComponent implements OnInit {

  protected games$ = this.store.select (fromAgot.getHomeGames);

  constructor (private api: AgotApiService, private remote: AgotRemoteService, private store: Store<any>) { super (); }

  ngOnInit () {
    this.store.dispatch (fromAgotHome.gamesGet ());
  } // ngOnInit

  newGame () {
    this.store.dispatch (fromAgotHome.gameNew ());
  } // newGame

} // AgotHomeComponent
