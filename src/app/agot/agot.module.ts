import { AuthGuard } from './../shared/login/auth-guard.service';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AgotGameService } from './agot-game/services/agot-game.service';
import { AgotCardHoverService } from './agot-game/services/agot-card-hover.service';
import { AgotCardComponent } from './agot-game/agot-card/agot-card.component';
import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgotGameComponent } from './agot-game/agot-game.component';
import { AgotComponent } from './agot.component';
import { SharedModule } from '../shared/shared.module';
import { AgotTableComponent } from './agot-game/agot-table/agot-table.component';
import { AgotActionsComponent } from './agot-game/agot-actions/agot-actions.component';
import { AgotActionComponent } from './agot-game/agot-action/agot-action.component';
import { AgotCardBackComponent } from './agot-game/agot-card-back/agot-card-back.component';
import { AgotRequestDialogComponent } from './agot-game/agot-request-dialog/agot-request-dialog.component';
import { AgotCardsDialogComponent } from './agot-game/agot-cards-dialog/agot-cards-dialog.component';
import { AgotButtonListComponent } from './agot-game/agot-button-list/agot-button-list.component';
import { reducer } from './store/agot.reducer';

const agotRoutes: Routes = [
  { path: '', component: AgotComponent, pathMatch: 'prefix', children: [
    { path: '', redirectTo: 'game', pathMatch: "full" },
    { path: 'game', component: AgotGameComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent },
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild (agotRoutes),
    StoreModule.forFeature ('agot', reducer),
  ],
  providers: [
    AgotCardHoverService,
    AgotGameService
  ],
  declarations: [
    AgotGameComponent,
    AgotComponent,
    AgotTableComponent,
    AgotCardComponent,
    AgotActionsComponent,
    AgotActionComponent,
    AgotCardBackComponent,
    AgotRequestDialogComponent,
    AgotCardsDialogComponent,
    AgotButtonListComponent,
  ],
  entryComponents: [
    AgotRequestDialogComponent,
    AgotCardsDialogComponent
  ]
})
export class AgotModule {
}
