import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return value;
    }

    searchTerm = searchTerm.toLowerCase();
    return value.filter(item => {
    return item.title.toLowerCase().includes(searchTerm);
    });
  }

}
