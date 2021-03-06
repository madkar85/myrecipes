import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe?: Recipe;
  
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  // Get the specific recipe to show
  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }

  // Go back to previous page
  goBack(): void {
    this.location.back();
  }
}
