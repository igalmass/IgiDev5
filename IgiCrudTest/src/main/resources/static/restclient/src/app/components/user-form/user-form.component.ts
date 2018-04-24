import { User} from '../../user';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {UserService} from "../../shared-service/user.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User;
  constructor(private _usrService: UserService, private _router : Router) { }

  ngOnInit() {
    // this.user = new User();
    // this.user.id = 11;
    this.user = this._usrService.getter();

  }

  processForm() {
    if (this.user.id == undefined){
      this._usrService.createUser(this.user).subscribe(
        (user)=> {
          console.log("User created 55");
          console.log(user);
          this._router.navigate(["/a"]);
        },
        (error) => {
          console.log(error);
        })
    } else {
      this._usrService.updateUser(this.user).subscribe(
        (user) => {
          console.log("User updated 55");
          console.log(user);
          this._router.navigate(['/a']);
        },
        (error) => {
          console.log(error);
        })
    }
  }
}
