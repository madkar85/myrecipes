import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  recipes$!: Observable<Recipe[]>;
  private searchTerms = new Subject<string>();

  constructor(private recipeService: RecipeService) { }

  // pushes a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    //deBounceTime means to wait xx milliseconds after each keystroke before considering the term
    //disctinctUntilChanged ignores new term if same as previous term
    //switchMap switched to new search observable each time the term changes
    this.recipes$ = this.searchTerms.pipe(debounceTime(300), 
    distinctUntilChanged(),
    switchMap((term: string) => this.recipeService.searchRecipes(term)));
  }

}
