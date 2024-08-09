import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longtitle',
  standalone: true
})
export class LongtitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 10) {
      return value + ' 😎';
    }
    return value;
  }

}
