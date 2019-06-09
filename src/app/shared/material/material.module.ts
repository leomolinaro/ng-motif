import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
