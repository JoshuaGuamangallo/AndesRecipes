import { Recipes } from './../interface/recipes';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {


  filterName = [
    {
      filter:"All"
    },
    {
      filter:"Active"
    },
    {
      filter:"Inactive"
    },
  ];
  data: Recipes[] = [
    {id:1, name: 'Mixed Berry Melody', status: true},
    {id:2, name: 'Thai red curry cauliflower soup', status: true},
    {id:3, name: 'Crispy spiced eggplant', status: true},
    {id:4, name: 'Crispy spiced eggplant', status: true},
    {id:5, name: 'Pumpkin soup with a twist', status: true},
    {id:6, name: 'Charred tofu, corn and asparagus salad', status: true},
    {id:7, name: 'One-pan creamy pesto chicken & gnocchi', status: true},
    {id:8, name: 'Creamy chicken bake', status: true},
    {id:9, name: 'French-style chicken and potatoes', status: true},
    {id:10, name: 'Braised beef and vegetables', status: false},
    {id:11, name: 'Pumpkin, spinach and lentil lasagne', status: true},
    {id:12, name: 'Soothing chicken soup', status: false},
    {id:13, name: 'Cornflake-crumbed chicken with wedges', status: true},
    {id:14, name: 'Quick beef enchiladas', status: false},
    {id:15, name: 'One-pan creamy pesto chicken & gnocchi', status: true},
    {id:16, name: 'Cheesy broccoli bake', status: false} ,
    {id:17, name: 'Lamb shank ragu with pappardelle', status: true},
  ];

  displayedColumns: string[] = ['recipeName', 'reviews', 'cookedBefore'];
  dataSource = this.data;
  searchFilter: string = '';
  textoDeInput: string = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(search: string)
  {
    this.searchFilter = search;
    console.log(search)
  }
  nameFilter(event)
  {
    console.log(event)
  }
}
  



