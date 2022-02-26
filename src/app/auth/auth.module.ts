import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { ShortRegisterComponent } from './pages/short-register/short-register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ShortRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
