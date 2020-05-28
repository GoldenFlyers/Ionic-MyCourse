import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Sashimi_of_S%C3%A3o_Paulo.jpg",
      ingredients: ["Schnitzel 1", "Schnitzel 2"],
    },
    {
      id: "r2",
      title: "Food panda",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Iranian_New_Year_Haft_Sin.jpg",
      ingredients: ["Food 1", "Food 2"],
    },
    {
      id: "r3",
      title: "Salad",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Oysters_p1040741.jpg",
      ingredients: ["Salad 1", "Salad 2"],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      })
    };
  }
}
