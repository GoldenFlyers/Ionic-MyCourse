import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item-list',
  templateUrl: './recipe-item-list.component.html',
  styleUrls: ['./recipe-item-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RecipeItemListComponent implements OnInit {
@Input() recipeslist : Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
