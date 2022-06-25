import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LoginComponent,DialogPasswd } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DialogVerifyComponent, DialogVerifyDialog } from './dialog-verify/dialog-verify.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,    
    DialogPasswd, 
    DialogVerifyComponent,
    DialogVerifyDialog
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  exports:[
    LoginComponent,
    DialogVerifyComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
