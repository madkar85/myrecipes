import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb () {
    const recipes = [
      {id: 2, name: 'Chocolate chip cookies'},
      {id: 3, name: 'Korvstroganoff'},
      {id: 4, name: 'Snabbrisotto'},
      {id: 5, name: 'Pasta med bacon och svampsås'}
    ];
    return {recipes};
  }

  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1:11;
  }
  constructor() { }
}
