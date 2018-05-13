import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mySortArrayPipe',
  pure: false
})
export class MyArraySortPipe implements PipeTransform{
  transform(items: any[], fieldName: any, sortOrder: string): any {
    let factor = 1;
    if (sortOrder === 'desc'){
      factor = -1;
    }


    items.sort((a: any, b: any) => {
      if (a[fieldName] < b[fieldName]){
        return factor * -1;
      } else if (a[fieldName] > b[fieldName]){
        return factor * 1;
      } else {
        return 0;
      }
    });

    return items;

  }

}
