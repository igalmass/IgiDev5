import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'callbackPipe',
  pure: false
})
export class CallbackPipe implements PipeTransform {
  transform(items: any[], callback: (item: any, title: string) => boolean, title : string): any {
    debugger;
    if (!items || !callback){
      return items;
    }

    const result = items.filter(item => callback(item, title));

    return result;
  }

}
