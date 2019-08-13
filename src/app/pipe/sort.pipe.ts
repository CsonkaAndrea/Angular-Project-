import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(baseArray: User[], phrase: string = ''): any {
    return baseArray.filter(item => {
      const jsonBaseArray = JSON.stringify(item)
      return jsonBaseArray.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }
}
