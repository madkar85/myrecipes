import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-data';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  private recipesURL = 'api/recipes';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesURL)
    .pipe(catchError(this.handleError<Recipe[]>('getRecipes', [])));
    //const recipes = of(RECIPES)
    //return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesURL}/${id}`;
    return this.http.get<Recipe>(url).pipe
    (catchError(this.handleError<Recipe>('getRecipe id=${id}')));
    //const recipe = RECIPES.find(r => r.id === id)!;
   // return of(recipe);
  }

  searchRecipes(term: string): Observable<Recipe[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Recipe[]>(`${this.recipesURL}/?name=${term}`)
    .pipe(catchError(this.handleError<Recipe[]>('searchRecipes', [])));
  }
}
