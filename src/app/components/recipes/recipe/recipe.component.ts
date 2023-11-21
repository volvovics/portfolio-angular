import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.less'
})
export class RecipeComponent {
  @Input() recipe:Recipe = {
    id:0,
    image:'',
    imageType:'',
    title:'Error finding recipe',
  };

  ngOnInit(){
    console.log(this.recipe);
  }
}

export interface Recipe{
  id:number,
  image:string,
  imageType:string,
  title:string,
}
