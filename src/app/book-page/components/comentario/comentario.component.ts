import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { UserService } from '../../../services/user.service';
import { CommentsService } from '../../../services/comments.service';
import { Comment } from '../../../interfaces/comment';
import { User } from 'src/app/interfaces/user';
import { Like } from 'src/app/interfaces/like';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  comment!:Comment
  user!:User
  likesCounter:number=0      
  mylike:boolean = false                      
  localuser!:User
  like!:Like[]
  @Input () commentId: string="prueba";
  constructor(private userService:UserService,            
              private commentsService:CommentsService,
              public dialog: MatDialog,
              public reportService:ReportService,) {                  
              
                       
             
  }

  ngOnChanges() {
    this.commentsService.getCommentById(this.commentId).subscribe(result =>{
      this.comment= result as Comment
      this.commentsService.getLikes(this.comment.eventId).subscribe(respuesta =>{            
          this.likesCounter=respuesta.length            
      })
      this.commentLiked(this.comment.eventId) 
      this.userService.getUserById(this.comment.userId).subscribe(user=>{         
         this.user=  user as User                
      })
    })
    this.localuser = JSON.parse(localStorage.getItem('userOnlinebook')!)
  }
  
  addLike(){        
    this.commentsService.addlike(this.comment.eventId,this.localuser.uid)
  }
  removeLike(){    
    this.mylike=false    
    this.commentsService.removeLikedComment(this.like[0].eventId!)       
  }
  deleteComment(){
    console.log(this.comment.userId);
    console.log(this.localuser);
    this.commentsService.removeComment(this.comment.eventId)
    
  }
  commentLiked(commentId:string){  
    this.commentsService.getLikedComment(this.localuser.uid,commentId)
    .subscribe(result => {        
      this.like = result as Like[]              
      if(result.length>=1){      
        this.mylike=true            
      }
    })
  }
  reportComment(){
    var dialogRef =this.dialog.open(ReportDialog);
    dialogRef.afterClosed().subscribe(result => {
     var aux:string[] = result as string[]
     console.log(result);
     this.reportService.addReportComment(this.comment.eventId,this.localuser.uid,aux)
      
    });
  }
  metodo(){
    console.log(this.commentId);
    
  }
}
@Component({
  selector: 'dialog-report',
  templateUrl: 'dialog-report.html',
  styleUrls: ['./comentario.component.css']
})
export class ReportDialog {
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ReportDialog>,
              ) {}  
  
  reportForm: FormGroup = this.fb.group({
    list: ["",[Validators.required] ]
  })
  
  reasonList: string[] = ['Es sospechoso o spam', 'Comete abuso o es perjudicial', 'Es engañoso', 'Expresa intenciones de suicidio','El comentario contiene spoilers del libro'];

  sendReport(){}
}