import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Lato" rel="stylesheet">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">MEAL TRACKER APP</a>
      </div>
    </div>
  </nav>

  <div class="jumbotron">
    <div class="container">
    <new-meal
      (newMealSender)="addMeal($event)"
      ></new-meal>
    </div>
  </div>

  <meal-list
    [childMealList]="mealsTracker"
    (buttonClicked)="displayMeal($event)"
    ></meal-list>

  <div class="container">

  </div>
  `
})

export class AppComponent {
  public mealsTracker: Meal[] = [
    new Meal("Pilau", 1665, "Lunch", "2017-01-12"),
    new Meal("Ugali and beef", 700, "Dinner", "2017-01-13"),
    new Meal("Juice and Mango", 200, "Breakfast", "2017-01-14"),
    new Meal("Banana", 100, "Fruit", "2017-01-15"),
    new Meal("Ice Cream", 1400, "Snack", "2017-01-16"),
  ];
  addMeal(newMealFromChild: Meal) {
    this.mealsTracker.push(newMealFromChild);
  }
}
