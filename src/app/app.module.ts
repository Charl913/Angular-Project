import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RecipeComponent } from './content/recipe/recipe.component';
import { RecipeListsComponent } from './content/recipe/recipe-lists/recipe-lists.component';
import { RecipeDetailComponent } from './content/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './content/recipe/recipe-lists/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './content/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './content/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeComponent,
    RecipeListsComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
