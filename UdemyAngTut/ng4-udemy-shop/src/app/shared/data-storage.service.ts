import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class DataStorageService{
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){

  }

  storeRecipes(){
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-e7917.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    console.log("The token is: " + token);
    let url = 'https://ng-recipe-book-e7917.firebaseio.com/recipe.json?auth=' + token;
    console.log("The url is:" + url);

    return this.http.
              get('https://ng-recipe-book-e7917.firebaseio.com/recipe.json?auth=' + token).
              map((response: Response) => {
                const recipes : Recipe[] = response.json();
                for (let recipe of recipes){
                  if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
              }).
              subscribe(
                (recipes: Recipe[]) => {
                  this.recipeService.setRecipes(recipes);
                });
  }
}
