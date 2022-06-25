import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import {MatListModule} from '@angular/material/list';
import {TextFieldModule} from '@angular/cdk/text-field';


@NgModule({
  exports: [    
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    TextFieldModule,
    MatSelectModule,
    MatDialogModule,    
  ],  
})
export class AngularMaterialModule { }
