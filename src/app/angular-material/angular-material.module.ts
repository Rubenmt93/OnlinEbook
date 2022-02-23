import { NgModule } from '@angular/core';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  exports: [
    
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
  ]
  
})
export class AngularMaterialModule { }
