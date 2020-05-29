import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.page.html",
  styleUrls: ["./recipe-details.page.scss"],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsPage implements OnInit {
  recipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (!param.has("recipeId")) {
        this.router.navigate(["/recipes"]);
        return;
      };
      const recipeId = param.get("recipeId");
      this.recipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: "Are you sure ?",
        message: "Are you really want to delete recipe ?",
        buttons: [
          { text: "Cancel", role: "cancel" },
          {
            text: "Ok",
            handler: () => {
              this.recipeService.deleteRecipe(this.recipe.id);
                this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
