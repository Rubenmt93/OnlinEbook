import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHomeComponent } from './pages/profile-home/profile-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ProfileHomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class ProfileModule { }
