import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();  
  recipes: Recipe[] = [
    new Recipe('This is a recipe', 'This is more detail about the recipe', 'https://media.istockphoto.com/id/1479912027/photo/stir-fry-chicken-with-paprika-mushrooms-green-chives-and-sesame-seeds-in-ceramic-bowl-asian.webp?s=2048x2048&w=is&k=20&c=cvK2WbLmumldC1gGJEPFAZ7fakIAJayVv8U7Xxakyuo='),
    new Recipe('This is a recipe', 'This is more detail about the recipe', 'https://media.istockphoto.com/id/1479912027/photo/stir-fry-chicken-with-paprika-mushrooms-green-chives-and-sesame-seeds-in-ceramic-bowl-asian.webp?s=2048x2048&w=is&k=20&c=cvK2WbLmumldC1gGJEPFAZ7fakIAJayVv8U7Xxakyuo=')
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
