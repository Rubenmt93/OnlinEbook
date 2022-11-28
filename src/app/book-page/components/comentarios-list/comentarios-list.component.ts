import { Component } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { Comment } from '../../../interfaces/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios-list',
  templateUrl: './comentarios-list.component.html',
  styleUrls: ['./comentarios-list.component.css']
})
export class ComentariosListComponent {
  commentsList: Comment[]=[]
  bookId!:string
  constructor(private commentsService:CommentsService,
              private activatedRoute:ActivatedRoute,) { 
    this.activatedRoute.params.subscribe(({id})=> {this.bookId=id})      
    this.commentsService.getCommentsBook(this.bookId).subscribe(result=>{      
      this.commentsList=result as Comment[]      
    })     
  }    
}
