import { MotifComponent } from '../../../shared/components/motif.component';
import { AgotState } from '../../store/agot.reducer';
import { Action } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InitGame } from '../../store/agot.actions';

@Component({
  selector: 'agot-actions',
  templateUrl: './agot-actions.component.html',
  styleUrls: ['./agot-actions.component.css']
})
export class AgotActionsComponent extends MotifComponent implements OnInit {

  @Output () dispatch = new EventEmitter<Action>();

  ngOnInit () {
  } // ngOnInit


} // AgotActionsComponent




