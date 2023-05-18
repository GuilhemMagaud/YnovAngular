import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'filterBySearch'
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (!search) {
      return products; // Si la recherche est vide, renvoie tous les produits sans filtrage
    }
    
    const searchValue = search.toLowerCase().trim();
    return products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  }
}
