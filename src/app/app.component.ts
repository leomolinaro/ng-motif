import { AuthService } from './shared/login/auth.service';
import { MotifApp } from 'src/app/shared/models/motif-app';
import { MotifAppsService } from './motif/services/motif-apps.service';
import { Component, OnInit } from '@angular/core';
import { Router, ChildActivationEnd, ActivationStart } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  protected title$: Observable<string>;
  protected apps: MotifApp[];

  constructor (
    private router: Router,
    private appsService: MotifAppsService,
    private authService: AuthService
  ) {}

  ngOnInit () {
    this.apps = this.appsService.getApps ();

    this.title$ = this.router.events.pipe (
      filter (event =>event instanceof ActivationStart),
      map ((event: ActivationStart) => event.snapshot.data.title),
      filter (title => !!title),
      // tap (console.log),
    );

  } // ngOnInit

} // AppComponent
