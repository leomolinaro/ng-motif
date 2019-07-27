import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WebsocketService } from './shared/websocket/websocket.service';
import { AuthGuard } from './shared/login/auth-guard.service';
import { AuthService } from './shared/login/auth.service';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GraphQLModule } from './shared/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
// import { motifReducers } from './store/reducers';

const appRoutes: Routes = [
  { path: '', redirectTo: '/agot/game', pathMatch: "full" },
  { path: 'agot', loadChildren: () => import('./agot/agot.module').then(mod => mod.AgotModule) },
  { path: 'brit', loadChildren: () => import('./brit/brit.module').then(mod => mod.BritModule) },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot (appRoutes),
    StoreModule.forRoot ({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    GraphQLModule,
    HttpClientModule,
    // StoreDevtoolsModule.instrumentOnlyWithExtension({
    //   maxAge: 5
    // })
  ],
  providers: [AuthService, WebsocketService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
