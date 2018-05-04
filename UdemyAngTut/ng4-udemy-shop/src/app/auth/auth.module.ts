import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
