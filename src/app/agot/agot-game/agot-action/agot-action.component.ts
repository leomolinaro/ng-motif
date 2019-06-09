import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Host, AfterViewInit } from '@angular/core';
import { MatExpansionPanel, MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'agot-action',
  templateUrl: './agot-action.component.html',
  styleUrls: ['./agot-action.component.css']
})
export class AgotActionComponent implements OnInit, AfterViewInit {

  @Input () title: string;
  @Input () description: string;
  @Input () icon: string;
  @Output () execute = new EventEmitter<void>();

  @ViewChild (MatExpansionPanel, { static: true }) aaa: MatExpansionPanel;

  constructor (@Host() private parent: MatAccordion) { }

  ngOnInit () {}

  ngAfterViewInit () {
    this.aaa.accordion = this.parent;
  } // ngAfterViewInit

  executeAction () {
    this.execute.emit ();
  } // executeAction

} // AgotActionComponent
