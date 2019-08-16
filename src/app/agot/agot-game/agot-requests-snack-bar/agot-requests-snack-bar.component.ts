import { Subject } from 'rxjs';
import { SnackBarRequest, AgotGameService, AgotChoiceWrapper } from './../services/agot-game.service';
import { AAgotRequest } from './../../../graphql-types';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';



@Component({
  selector: 'app-agot-requests-snack-bar',
  templateUrl: './agot-requests-snack-bar.component.html',
  styleUrls: ['./agot-requests-snack-bar.component.scss']
})
export class AgotRequestsSnackBarComponent implements OnInit {

  protected requests: SnackBarRequest[];

  private choice = new Subject<AgotChoiceWrapper> ();
  public choice$ = this.choice.asObservable ();

  constructor (@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarRequest[]) {
    this.requests = data;
  } // constructor

  ngOnInit () {
  } // ngOnInit

  onChoiceClick (c: AgotChoiceWrapper) {
    this.choice.next (c);
  } // onChoiceClick

} // AgotRequestsSnackBarComponent
