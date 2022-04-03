import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-writer-action',
  templateUrl: './writer-action.component.html',
  styleUrls: ['./writer-action.component.css']
})
export class WriterActionComponent {
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //failLoginflag:boolean=false
  SendMailForm: FormGroup = this.fb.group({
    email: ['zegreo@gmail.com',[Validators.required,Validators.pattern(this.emailPattern)]],
    text: ['',Validators.required]
  })
  constructor(private fb: FormBuilder, ) { }

  enviarMsg(){
    
  }
 
}
