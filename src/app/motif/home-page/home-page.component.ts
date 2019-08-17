import { Component, OnInit } from '@angular/core';
import { MotifAppsService } from '../services/motif-apps.service';
import { MotifApp } from 'src/app/shared/models/motif-app';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  protected apps: MotifApp[];

  constructor (private appsService: MotifAppsService) { }

  ngOnInit () {
    this.apps = this.appsService.getApps ();
  } // ngOnInit

} // HomePageComponent
