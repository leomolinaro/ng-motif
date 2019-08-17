import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgLetModule } from '@ngrx-utils/store';
import { MotifToolbarComponent } from './components/motif-toolbar/motif-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgLetModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgLetModule,
    MotifToolbarComponent
  ],
  declarations: [NotFoundComponent, MotifToolbarComponent]
})
export class SharedModule { }
