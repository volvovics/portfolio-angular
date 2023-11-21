import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../../services/recipes.service';
import { Recipe, RecipeComponent } from './recipe/recipe.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RecipeComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.less'
})

export class RecipesComponent {
  constructor (private recipesService:RecipesService) {}
  private lastSearchString = '';
  public recipes:Array<Recipe> = [
    {id: 654959, title: 'Pasta With Tuna', image: 'https://spoonacular.com/recipeImages/654959-312x231.jpg', imageType: 'jpg'},
    {id: 511728, title: 'Pasta Margherita', image: 'https://spoonacular.com/recipeImages/511728-312x231.jpg', imageType: 'jpg'},
    {id: 654857, title: 'Pasta On The Border', image: 'https://spoonacular.com/recipeImages/654857-312x231.jpg', imageType: 'jpg'},
    {id: 654883, title: 'Pasta Vegetable Soup', image: 'https://spoonacular.com/recipeImages/654883-312x231.jpg', imageType: 'jpg'},
    {id: 654928, title: 'Pasta With Italian Sausage', image: 'https://spoonacular.com/recipeImages/654928-312x231.jpg', imageType: 'jpg'},
  ];
  
  ngOnInit(){
    this.recipesService.init();
  }

  searchRecipe(recipeName:string){
    
    if (this.lastSearchString === recipeName ) return;
    this.lastSearchString = recipeName;

    this.recipesService.getRecipes(recipeName).subscribe({
      next:(response) => this.handleResponse(response),
      error:(error) => this.handleError(error)
    });
  }
  
  handleResponse(response:any){
    this.recipes = response.results;
    console.log(this.recipes);
  }
  handleError(error:any){
    console.log(error);
  }
}