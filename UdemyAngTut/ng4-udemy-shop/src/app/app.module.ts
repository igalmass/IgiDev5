import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./core/header/header.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {RecipeService} from "./recipes/recipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import { SingoutComponent } from './auth/singout/singout.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from "./auth/auth.service";
import { SigninComponent } from './auth/signin/signin.component';
import {AuthGuard} from "./auth/auth-guard.service";
//import {RecipesModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './core/home/home.component';
import {CoreModule} from 'app/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // HomeComponent,
    //RecipesComponent,
    //RecipeListComponent,
    //RecipeDetailComponent,
    //RecipeItemComponent,
    //ShoppingListComponent,
    //ShoppingEditComponent,
    //DropdownDirective,
    //RecipeStartComponent,
    //RecipeEditComponent,
    SingoutComponent,
    //SignupComponent,
    //SigninComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpModule,
    //ReactiveFormsModule,
    AppRoutingModule,
    //RecipesModule,
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
