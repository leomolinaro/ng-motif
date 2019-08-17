import { HomePageComponent } from './motif/home-page/home-page.component';
import { AuthGuard } from './shared/login/auth-guard.service';
import { AuthService } from './shared/login/auth.service';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GraphQLModule } from './shared/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomePageComponent, data: { title: "Home" } },
  { path: 'agot', loadChildren: () => import('./agot/agot.module').then(mod => mod.AgotModule), data: { title: "A Game of Thrones LCG (second edition)"} },
  { path: 'brit', loadChildren: () => import('./brit/brit.module').then(mod => mod.BritModule), data: { title: "Britannia"} },
  { path: 'login', component: LoginComponent, data: { title: "Login" } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot (appRoutes, { enableTracing: false }), // enableTracing: true for debugging
    StoreModule.forRoot ({ }),
    StoreDevtoolsModule.instrument ({ maxAge: 25, logOnly: environment.production }),
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
