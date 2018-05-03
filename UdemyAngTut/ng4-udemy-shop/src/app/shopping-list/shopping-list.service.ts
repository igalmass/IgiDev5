import {Ingredient} from "../shared/ingredient.model";
//import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";

export class ShoppingListService{
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 6),
    new Ingredient('Tomatoes', 10)];

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>()

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient :Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) : Ingredient {
    return this.ingredients[index];
  }

  updateIngredient(index: number, updatedIngredient: Ingredient){
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}
