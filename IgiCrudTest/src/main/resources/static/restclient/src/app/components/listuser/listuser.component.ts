import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UserService} from "../../shared-service/user.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private users: User[];

  constructor(private _userService: UserService, private _router: Router) { }




  ngOnInit() {
    this.refreshUserListFromServer();
  }

  refreshUserListFromServer(){
    this._userService.getUsers().subscribe((users => {
      console.log(users);
      this.users = users;
    }),
    (error) => {
      console.log(error);
    })
  }

  deleteUser(user: User){

    //  todo: this code is OK and compiles and works but a bug in the webpack says user.id is not present
    // var userId = user.id;
    // console.log("The user id is " + userId);
    // console.log("The user to delete is " + user);
    // this._userService.deleteUser(user.id).subscribe((data) => {
    //    //this.users.splice(this.users.indexOf(user),1);
    //    this.refreshUserListFromServer();
    //  },
    //  (error) => {
    //    console.log(error);
    // });
  }

  updateUser(user: User){
    console.log("user to edit:");
    console.log(user);
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }

  newUser(){
    let user = new User();
    this._userService.setter(user);
    this._router.navigate(['/op']);
  }

}
