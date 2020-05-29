import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RecipesPage implements OnInit {
recipes : Recipe[];
  constructor(private activatedRoute: ActivatedRoute,private recipeService : RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getAllRecipes();
  }

}
