import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";

const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, //
  //{   path: '', redirectTo: 'recipes', pathMatch: 'full'},
  // {   path: 'recipes', component: RecipesComponent, children: [
  //       { path: '', component: RecipeStartComponent},
  //       { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
  //       { path: ':id', component: RecipeDetailComponent},
  //       { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  //
  //   ]
  // },
  {   path: 'shopping-list', component: ShoppingListComponent},
  // {   path: 'signup', component: SignupComponent },
  // {   path: 'signin', component: SigninComponent}
];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
