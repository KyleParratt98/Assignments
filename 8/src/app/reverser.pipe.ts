import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverser'
})

export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
  }

}
