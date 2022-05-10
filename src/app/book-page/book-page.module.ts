import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './book-page/book-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BookInfoComponent, ReportDialogBook } from './components/book-info/book-info.component';
import { BookPageButtonsComponent } from './components/book-page-buttons/book-page-buttons.component';
import { ComentariosContainerComponent } from './components/comentarios-container/comentarios-container.component';
import { ComentariosListComponent } from './components/comentarios-list/comentarios-list.component';
import { ComentariosNewCommentComponent } from './components/comentarios-new-comment/comentarios-new-comment.component';
import { ComentarioComponent, ReportDialog } from './components/comentario/comentario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookPageComponent,
    BookInfoComponent,
    BookPageButtonsComponent,
    ComentariosContainerComponent,
    ComentariosListComponent,
    ComentariosNewCommentComponent,
    ComentarioComponent,
    ReportDialog,
    ReportDialogBook
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class BookPageModule { }
