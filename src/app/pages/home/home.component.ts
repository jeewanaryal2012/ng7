import { Component, OnInit } from "@angular/core";
import { UsersInterface } from "../../interfaces/users";

import { UserService } from "../../user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  userInterface: UsersInterface;
  userData: UsersInterface;
  showData: boolean = false;
  showLoading: boolean = false;

  ccValue: string;
  constructor(private _users: UserService) {}

  ngOnInit() {}

  onClickMe() {
    this.showLoading = true;
    this._users.getUsers().subscribe(data => {
      //setTimeout(() => {
      this.userData = data;
      this.showData = true;
      this.showLoading = false;
      //}, 2000);
    });
  }

  testCall(e) {
    console.log(e);
  }
}
