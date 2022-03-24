import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user:any;
  constructor() {
   this.user = JSON.parse( localStorage.getItem('userOnlinebook')!   )  
   
  }

  ngOnInit(): void {
  }

}
