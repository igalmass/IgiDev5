import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mySortArrayPipe',
  pure: true
})
export class MyArraySortPipe implements PipeTransform{
  transform(items: any[], fieldName: any): any {
    debugger;
    items.sort((a: any, b: any) => {
      if (a[fieldName] < b[fieldName]){
        return -1;
      } else if (a[fieldName] > b[fieldName]){
        return 1;
      } else {
        return 0;
      }
    });

    return items;

  }

}
