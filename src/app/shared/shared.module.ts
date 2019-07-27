import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import { NgLetModule } from '@ngrx-utils/store';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgLetModule
  ],
  exports: [
    NotFoundComponent,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgLetModule
  ],
  declarations: [NotFoundComponent]
})
export class SharedModule { }
