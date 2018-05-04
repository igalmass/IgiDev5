import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";


@Injectable()
export class DataStorageService{
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService){

  }

  storeRecipes(){
    const token = this.authService.getToken();
    //const headers = new HttpHeaders().set('Authorization', 'Bearer sfdfsd');

    // return this.httpClient.put(
    //   'https://ng-recipe-book-e7917.firebaseio.com/recipe.json?auth=' + token,
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'body',
    //     //params: new HttpParams().set('auth', token)
    //   }
    //     //headers: headers}
    //   );

    const request = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-e7917.firebaseio.com/recipe.json',
      this.recipeService.getRecipes(),
      {reportProgress: true,
        params: new HttpParams().
                set('auth', token)});

    return this.httpClient.request(request);
  }

  getRecipes() {
    const token = this.authService.getToken();
    console.log("The token is: " + token);
    let url = 'https://ng-recipe-book-e7917.firebaseio.com/recipe.json?auth=' + token;
    console.log("The url is:" + url);

    return this.httpClient.
              get<Recipe[]>(url).
    //   {
    //   observe: 'body',
    //   responseType: 'text'
    // }).
              //get<Recipe[]>('https://ng-recipe-book-e7917.firebaseio.com/recipe.json?auth=' + token).
              //get(url,

              map((recipes) => {
                console.log(recipes);
                //const recipes : Recipe[] = response.json();
                // for (let recipe of recipes){
                //   if (!recipe['ingredients']) {
                //     recipe['ingredients'] = [];
                //   }
                // }
                return recipes;
              }).
              subscribe( (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
              },
            (error) => console.log(error));
                //
  }
}
