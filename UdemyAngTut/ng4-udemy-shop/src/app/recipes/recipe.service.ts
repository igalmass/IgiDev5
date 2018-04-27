import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe("A test Recipe", 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe("Yet another Recipe", 'Another recipe desc', "http://homemakingwithheart.com/wp-content/uploads/2013/11/recipes-1.jpg")
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }
}
