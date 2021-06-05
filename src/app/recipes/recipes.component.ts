import { Recipes } from './../interface/recipes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

   filterName = [
    'All',
    'Active',
    'Inactive'
  ];

  data: Recipes[] = [
    {id:1, name: 'Mixed Berry Melody'},
    {id:2, name: 'Thai red curry cauliflower soup'},
    {id:3, name: 'Crispy spiced eggplant'},
    {id:4, name: 'Crispy spiced eggplant'},
    {id:5, name: 'Pumpkin soup with a twist'},
    {id:6, name: 'Charred tofu, corn and asparagus salad'},
    {id:7, name: 'One-pan creamy pesto chicken & gnocchi'},
    {id:8, name: 'Creamy chicken bake'},
    {id:9, name: 'French-style chicken and potatoes'},
    {id:10, name: 'Braised beef and vegetables'},
    {id:11, name: 'Pumpkin, spinach and lentil lasagne'},
    {id:12, name: 'Soothing chicken soup'},
    {id:13, name: 'Cornflake-crumbed chicken with wedges'},
    {id:14, name: 'Quick beef enchiladas'},
    {id:15, name: 'One-pan creamy pesto chicken & gnocchi'},
    {id:16, name: 'Cheesy broccoli bake'},
    {id:17, name: 'Lamb shank ragu with pappardelle'},
  ];

  displayedColumns: string[] = ['recipeName', 'reviews', 'cookedBefore'];
  dataSource = this.data;
  constructor() { }

  ngOnInit(): void {
  }

}
