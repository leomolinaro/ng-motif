import { AgotTestService } from './agot-test/agot-test.service';
import { AgotHomeEffects } from './store/agot-home.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './../shared/login/auth-guard.service';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AgotCardHoverService } from './agot-game/services/agot-card-hover.service';
import { AgotCardComponent } from './agot-game/agot-card/agot-card.component';
import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgotGameComponent } from './agot-game/agot-game.component';
import { AgotComponent } from './agot.component';
import { SharedModule } from '../shared/shared.module';
import { AgotTableComponent } from './agot-game/agot-table/agot-table.component';
import { AgotCardBackComponent } from './agot-game/agot-card-back/agot-card-back.component';
import { AgotRequestDialogComponent } from './agot-game/agot-request-dialog/agot-request-dialog.component';
import { AgotCardsDialogComponent } from './agot-game/agot-cards-dialog/agot-cards-dialog.component';
import { reducers, featureKey, effects } from './store';
import { AgotRequestsSnackBarComponent } from './agot-game/agot-requests-snack-bar/agot-requests-snack-bar.component';
import { AgotHomeComponent } from './agot-home/agot-home.component';

const agotRoutes: Routes = [
  { path: '', component: AgotComponent, pathMatch: 'prefix', children: [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'game/:id', component: AgotGameComponent, canActivate: [AuthGuard] },
    { path: 'home', component: AgotHomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent },
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild (agotRoutes),
    StoreModule.forFeature (featureKey, reducers),
    EffectsModule.forFeature (effects)
  ],
  providers: [
    AgotCardHoverService,
    AgotTestService
  ],
  declarations: [
    AgotGameComponent,
    AgotComponent,
    AgotTableComponent,
    AgotCardComponent,
    AgotCardBackComponent,
    AgotRequestDialogComponent,
    AgotCardsDialogComponent,
    AgotRequestsSnackBarComponent,
    AgotHomeComponent
  ],
  entryComponents: [
    AgotRequestDialogComponent,
    AgotCardsDialogComponent,
    AgotRequestsSnackBarComponent
  ]
})
export class AgotModule {
}
