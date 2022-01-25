import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-data';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  /*
  recipe: Recipe  = {
    id: 1,
    name: 'Kladdkaka'
  };
  */
  //recipes = RECIPES;
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }

  selectedRecipe?: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  

}
