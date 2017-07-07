import { Component, OnInit } from '@angular/core';

import{ Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit { 
  recipes: Recipe[] = [
    new Recipe('A test name','test description','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-145693_960_720.jpg')
  ];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
