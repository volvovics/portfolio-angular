import { Component, ElementRef} from '@angular/core';
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
  constructor (private recipesService:RecipesService, private elRef:ElementRef) {}
  public recipes:Array<Recipe> = [
    // {id: 654959, title: 'Pasta With Tuna', image: 'https://spoonacular.com/recipeImages/654959-312x231.jpg', imageType: 'jpg'},
    // {id: 511728, title: 'Pasta Margherita', image: 'https://spoonacular.com/recipeImages/511728-312x231.jpg', imageType: 'jpg'},
    // {id: 654857, title: 'Pasta On The Border', image: 'https://spoonacular.com/recipeImages/654857-312x231.jpg', imageType: 'jpg'},
    // {id: 654883, title: 'Pasta Vegetable Soup', image: 'https://spoonacular.com/recipeImages/654883-312x231.jpg', imageType: 'jpg'},
    // {id: 654928, title: 'Pasta With Italian Sausage', image: 'https://spoonacular.com/recipeImages/654928-312x231.jpg', imageType: 'jpg'},
  ];
  private lastSearchString = '';
  public isLoading:boolean = false;
  public totalRecipes = 1000;
  public selectedRecipe: Recipe = {id: 1, title: 'Test', image: 'https://spoonacular.com/recipeImages/654928-312x231.jpg', imageType: 'jpg'};

  public error:string= 'There was an error retrieving the data';
  public errorCode:number= 0;

  private errorDialog?:HTMLDialogElement;
  private detailsDialog?:HTMLDialogElement;
  
  ngOnInit(){
    this.recipesService.init();
  }
  ngAfterContentInit(){
    this.errorDialog = this.elRef.nativeElement.querySelector('dialog.error');
    this.detailsDialog = this.elRef.nativeElement.querySelector('dialog.details');
  }

  searchRecipe(recipeName:string){
    
    if (this.lastSearchString === recipeName ) return;
    this.lastSearchString = recipeName;
    this.totalRecipes = 1000;

    this.isLoading = true;
    this.recipesService.getRecipes(recipeName).subscribe({
      next:(response) => this.onReceipesReceived(response),
      error:(error) => this.handleError(error)
    });
  }

  getMoreRecipes(){
    this.isLoading = true;
    this.recipesService.getRecipes(this.lastSearchString, true).subscribe({
      next:(response) => this.onMoreReceipesReceived(response),
      error:(error) => this.handleError(error)
    });
  }
  
  onReceipesReceived(response:any){
    this.totalRecipes = response.totalResults;
    this.isLoading = false;
    this.recipes = response.results;
    console.log(response);
  }

  onMoreReceipesReceived(response:any){
    this.isLoading = false;
    this.recipes.push(...response.results);
    console.log(this.recipes);
  }

  onShowDetails(recipe:Recipe){
    console.log(recipe);
    this.selectedRecipe = recipe;
    this.detailsDialog?.showModal();
  }

  handleError(errorResponse:any){
    this.isLoading = false;
    this.errorCode = errorResponse.error.code;
    this.error = errorResponse.error.message;
    this.errorDialog?.showModal();
  }
  
}