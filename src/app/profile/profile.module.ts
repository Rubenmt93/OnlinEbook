import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHomeComponent } from './pages/profile-home/profile-home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { InfoComponent } from './components/info/info.component';
import { UpdateProfileComponent, DialogUpdateProfile, DialogUpdateProfileReautenticate, DialogUpdateProfileFailure } from './components/update-profile/update-profile.component';
import { ChangePasswdComponent, DialogChangePasswd, DialogChangePasswdFail } from './components/change-passwd/change-passwd.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    ProfileHomeComponent,
    InfoComponent,
    UpdateProfileComponent,
    ChangePasswdComponent,
    DialogChangePasswd,
    DialogChangePasswdFail,
    DialogUpdateProfile,
    DialogUpdateProfileReautenticate,
    DialogUpdateProfileFailure
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ]
})
export class ProfileModule { }
