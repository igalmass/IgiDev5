import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from "../../store/app.reducers";
import {Store} from '@ngrx/store';
import * as AuthActions from "../store/auth.actions";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    //this.authService.signinUser(email, password);
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
  }

  onFillUserNameAndPass(form: NgForm) {
    form.controls['email'].setValue("test12@test.com");
    form.controls['password'].setValue("test1234");

  }
}
