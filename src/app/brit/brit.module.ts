import { BritUIService } from './services/brit-ui.service';
import { BritRequestService } from './services/brit-request.service';
import { AuthService } from '../shared/login/auth.service';
import { WebsocketService } from './../shared/websocket/websocket.service';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BritComponent } from './brit.component';
import { BritMapComponent } from './brit-map/brit-map.component';
import { reducer } from './store/brit.reducer';
import { BritNationComponent } from './brit-nation/brit-nation.component';
import { BritAreaComponent } from './brit-area/brit-area.component';
import { BritNationLabelComponent } from './brit-nation-label/brit-nation-label.component';
import { BritNationButtonComponent } from './brit-nation-button/brit-nation-button.component';
import { BritPopMarkerComponent } from './brit-pop-marker/brit-pop-marker.component';
import { BritUnitReinforcementComponent } from './brit-unit-reinforcement/brit-unit-reinforcement.component';
import { BritUnitGarrisonComponent } from './brit-unit-garrison/brit-unit-garrison.component';
import { BritDieComponent } from './brit-die/brit-die.component';

const britRoutes: Routes = [
  { path: '', component: BritComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild (britRoutes),
    StoreModule.forFeature ('brit', reducer),
  ],
  providers: [
    WebsocketService,
    BritRequestService,
    BritUIService,
    AuthService
  ],
  declarations: [
    BritComponent,
    BritMapComponent,
    BritNationComponent,
    BritAreaComponent,
    BritNationLabelComponent,
    BritNationButtonComponent,
    BritPopMarkerComponent,
    BritUnitReinforcementComponent,
    BritUnitGarrisonComponent,
    BritDieComponent
  ]
})
export class BritModule { }
