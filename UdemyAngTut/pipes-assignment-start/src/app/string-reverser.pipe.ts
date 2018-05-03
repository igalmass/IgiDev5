import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'stringReverserPipe'})
export class StringReverserPipe implements PipeTransform {
  transform(value: string){
    //debugger;
    const splittedCharArray = value.split("");

    const reversedCharArray = splittedCharArray.reverse();

    console.log(reversedCharArray);
    const joinArray = reversedCharArray.join("");
    console.log(joinArray);

    return joinArray;
  }
}
