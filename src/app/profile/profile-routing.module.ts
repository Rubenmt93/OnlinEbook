import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ChangePasswdComponent } from './components/change-passwd/change-passwd.component';


const routes:Routes = [
  {
    path:'',
    children:[
      { 
        path:'info',
        component:InfoComponent,
        outlet: 'outledProfile'
      },
      {
        path:'updateProfile',
        component:UpdateProfileComponent,
        outlet: 'outledProfile'
      },
      {
        path:'changePasswd',
        component:ChangePasswdComponent,
        outlet: 'outledProfile'
      },
      
    ]
  }
]
@NgModule({
  
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
