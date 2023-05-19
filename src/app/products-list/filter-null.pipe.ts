import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterNull'
})
export class FilterNullPipe implements PipeTransform {
    transform(items: Product[] | null): Product[] {
        if (items == null) {
          return [];
        }
        
        return items;
      }
}