import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  static readonly EMPTY_STRING = "";

  userName : String = UserComponent.EMPTY_STRING;

  constructor() { }

  ngOnInit() {
  }

  isUserNameEmpty() {
    // this.userName.trim();
    // var boolean = this.userName.length == 0;
    // return boolean;
    return this.userName === UserComponent.EMPTY_STRING;
  }

  resetUserName() {
    this.userName = UserComponent.EMPTY_STRING;
  }
}
