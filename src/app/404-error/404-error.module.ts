import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    Error404Component,
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class Error404Module { }
