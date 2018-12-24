import { Component, OnInit } from '@angular/core';

import {UsersInterface} from "./interfaces/users";

import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'an7';
  userInterface: UsersInterface;
  userData: UsersInterface;

  constructor(private users: UserService) {
    
  }

  ngOnInit() {
    //console.log(this.getAllUsers());
  }

  onClickMe() {
    this.users.getUsers().subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }
}
