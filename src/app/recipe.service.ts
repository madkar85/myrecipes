import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES)
    return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPES.find(r => r.id === id)!;
    return of(recipe);
  }
}
