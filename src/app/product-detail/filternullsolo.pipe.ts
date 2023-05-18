import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterNullSolo'
})
export class FilterNullPipeSolo implements PipeTransform {
    transform(items: Product | null): Product {
        if (items == null) {
          return new Product(
            0,
            "Peluche Hermione Granger",
            "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
            "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psntn9f.webp",
            [25, 30, 40],
            0,
            false,
            new Date("2023-01-01"),
            ["Petit", "Moyen", "Grand"]
          );
        }
        
        return items;
      }
}