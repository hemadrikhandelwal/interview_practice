import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe',
  standalone:true
})
export class CustPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {
    if(value){
      value = value.toUpperCase();
    //  value = value.split('').reverse().join('');
    }
    return value;
  }

}
