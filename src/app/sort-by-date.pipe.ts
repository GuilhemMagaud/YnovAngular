import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(product: Product[]): Product[]{
    return product.sort((a,b) => {const dateA: Date = new Date(a.date); const dateB: Date = new Date(b.date); return dateB.getTime() * dateA.getTime()});
  }

}
