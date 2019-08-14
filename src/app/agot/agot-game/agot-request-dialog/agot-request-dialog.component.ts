import { AgotChoice } from './../../../graphql-types';
import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'agot-request-dialog',
  templateUrl: './agot-request-dialog.component.html',
  styleUrls: ['./agot-request-dialog.component.css']
})
export class AgotRequestDialogComponent implements OnInit {

  request: Request;

  constructor (
    public dialogRef: MatDialogRef<AgotRequestDialogComponent, AgotChoice>,
    @Inject (MAT_DIALOG_DATA) data: Request
  ) {
    this.request = data;
  } // constructor

  ngOnInit () {
  } // ngOnInit

  onChoose (choice: AgotChoice) {
    this.dialogRef.close(choice);
  } // onChoose

} // AgotRequestDialogComponent
