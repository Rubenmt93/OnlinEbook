import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/user';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-comentarios-new-comment',
  templateUrl: './comentarios-new-comment.component.html',
  styleUrls: ['./comentarios-new-comment.component.css']
})
export class ComentariosNewCommentComponent  {
  commentForm: FormGroup = this.fb.group({
    mensaje: ['',[Validators.required]]    
  })
  bookId!:string
  user!:User
  constructor(private fb: FormBuilder,
              private activatedRoute:ActivatedRoute,
              private commentService:CommentsService) {
      this.activatedRoute.params.subscribe(({id})=> {this.bookId=id})    
      this.user = JSON.parse(localStorage.getItem('userOnlinebook')!)
  }
  sendComment(){
    var msg= this.commentForm.controls['mensaje'].value
    this.commentService.addComment(this.bookId,msg,this.user.uid)
    this.commentForm.reset()
  }
  
}
