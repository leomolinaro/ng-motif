import { MotifApp } from 'src/app/shared/models/motif-app';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'motif-toolbar',
  templateUrl: './motif-toolbar.component.html',
  styleUrls: ['./motif-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotifToolbarComponent implements OnInit {

  @Input () title: string;
  @Input () apps: MotifApp[];

  constructor() { }

  ngOnInit() {
  }

}
