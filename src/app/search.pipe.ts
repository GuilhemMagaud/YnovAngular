import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'filterBySearch'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchresult: String): Product[]{
    return products.filter(s => s.title.toLowerCase().indexOf(searchresult.toLocaleLowerCase()) !== -1)
  }

}
