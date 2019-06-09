import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'agot-card-back',
  templateUrl: './agot-card-back.component.html',
  styleUrls: ['./agot-card-back.component.css']
})
export class AgotCardBackComponent implements OnInit {

  private static readonly VERTICAL_IMAGE = "./assets/card-back.jpg";
  private static readonly HORIZONTAL_IMAGE = "./assets/plot-back.jpg";

  @Input () horizontal;
  @Output () cardClick: EventEmitter<void> = new EventEmitter<void> ();
  private imageSource;
  private hint: boolean;

  constructor () { }

  ngOnInit () {
    this.imageSource = this.horizontal ? AgotCardBackComponent.HORIZONTAL_IMAGE : AgotCardBackComponent.VERTICAL_IMAGE;
  } // ngOnInit

  onClick () {
    this.cardClick.emit ();
  } // onClick

} // AgotCardBackComponent
