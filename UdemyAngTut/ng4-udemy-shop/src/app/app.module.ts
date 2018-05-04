import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
//import {HttpModule} from "@angular/http";
import { SingoutComponent } from './auth/singout/singout.component';
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from 'app/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    SingoutComponent,
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,

    ShoppingListModule,
    CoreModule
  ],
  //providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
