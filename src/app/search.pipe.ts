import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news:any, term:string):any {
      if (term == '' || term == undefined){
        return news;
      }
      else {
        return news.filter(function(news){
          return news.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        })
      }
  }

}
