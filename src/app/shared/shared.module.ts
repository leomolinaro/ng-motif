import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    NotFoundComponent,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [NotFoundComponent]
})
export class SharedModule { }
