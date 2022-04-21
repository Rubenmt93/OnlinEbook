import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mylibrary-home',
  templateUrl: './mylibrary-home.component.html',
  styleUrls: ['./mylibrary-home.component.css']
})
export class MylibraryHomeComponent implements OnInit {

  constructor(private userService:UserService) {


   }

  ngOnInit(): void {
  }
 
}
