import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecipes'
})
export class FilterRecipesPipe implements PipeTransform {

  transform(value: any, searchFilter: string = ''): any {

    const resultPosts = [];
    for(const filter of value){
      if(searchFilter == '' || searchFilter == '1'){
        return value
      };
      if(searchFilter == '2'){
        if(filter.status == true){
          resultPosts.push(filter)
        }
      }
      if(searchFilter == '3'){
        if(filter.status == false){
          resultPosts.push(filter)
        }
      }

  }
    return resultPosts;
  }
  }
