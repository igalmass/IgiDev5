import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Recipe} from "../recipes/recipe.model";


@Injectable()
export class DataStorageService{
  constructor(private http: Http, private recipeService: RecipeService){

  }

  storeRecipes(){
    return this.http.put('https://ng-recipe-book-e7917.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.
              get('https://ng-recipe-book-e7917.firebaseio.com/recipe.json').
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
