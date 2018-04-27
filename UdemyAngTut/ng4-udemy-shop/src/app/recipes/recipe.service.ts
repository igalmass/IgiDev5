import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
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

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService : ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
