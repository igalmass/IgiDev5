import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'myFilterByFieldPipe',
  pure: false

})

export class MyFilterByFieldPipe implements PipeTransform{
  transform(value: any, ...args: any[]): any {
  }
  // transform(items: any[], filter: any): any {
  //
  //   debugger;
  //   if (!items || !filter){
  //     return items;
  //   }
  //
  //   const result = items.filter(item => item.title.indexOf(filter.title) !== -1)
  //
  //   return items;
  // }

}
