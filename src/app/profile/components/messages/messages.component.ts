import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import { User } from '../../../interfaces/user';
import { Message } from '../../../interfaces/message';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {
  user:User
  items:Message[]=[]
  constructor(private messagesService:MessagesService,
              private userService:UserService) {
    this.user = JSON.parse( localStorage.getItem('userOnlinebook')!) as User
      this.messagesService.getMessages(this.user.uid).subscribe(result=>{             
         this.items=result as Message[]    
      })
  }
  deleteMessage(id:string){
    this.messagesService.removeMessage(id)
  }
}
