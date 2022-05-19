import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-writer-action',
  templateUrl: './writer-action.component.html',
  styleUrls: ['./writer-action.component.css']
})
export class WriterActionComponent {
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
  SendMailForm: FormGroup = this.fb.group({
    email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    text: ['',Validators.required]
  })
  constructor(private fb: FormBuilder, ) { }
  enviarMsg(){   
  }
 
}
