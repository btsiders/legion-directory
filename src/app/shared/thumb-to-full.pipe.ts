import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbToFull'
})
export class ThumbToFullPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace('thumb.gif', 'full.jpg');
  }

}
