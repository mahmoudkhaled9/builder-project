import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subTitle'
})
export class SubTitlePipe implements PipeTransform {

  transform(title:string , length:number): string {
    return title.substr(0,length)+"..."
  }

}
