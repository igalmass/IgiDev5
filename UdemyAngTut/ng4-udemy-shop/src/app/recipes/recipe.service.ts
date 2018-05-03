import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("A test Recipe",
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient("potato", 3),
        new Ingredient("humus", 8)
      ]
    ),
    new Recipe(
      "Yet another Recipe",
      'Another recipe desc',
      "http://homemakingwithheart.com/wp-content/uploads/2013/11/recipes-1.jpg",
      [new Ingredient("falafel", 9),
        new Ingredient("Kurkum", 11),
        new Ingredient('Another ingredient', 33)
      ]
    )
  ];

  constructor(private shoppingListService : ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
