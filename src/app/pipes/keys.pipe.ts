import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
   // tslint:disable-next-line:prefer-const
   let keys = [];
   // tslint:disable:forin
   // tslint:disable-next-line:prefer-const
   for (let key in value) {
     keys.push(key);
   }


   return keys;
  }

}
