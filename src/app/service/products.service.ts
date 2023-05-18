import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      0,
      "Peluche Hermione Granger",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psntn9f.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      1,
      "Peluche Harry Potter",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk003f.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      2,
      "Peluche Professeur Severus Rogue",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psmp9nd_1.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      3,
      "RPeluche on Weasley",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk018a_4.jpg",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      4,
      "Peluche Dobby",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psnseie.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      5,
      "Peluche Rubeus Hagrid",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk00ya.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      6,
      "Peluche Lord Voldemort",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk000c.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      7,
      "Peluche Magicien Dumbledore",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psk001d.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    ),
    new Product(
      8,
      "Peluche Draco Malfoy",
      "100% original, nouveau et avec son étiquette de licence officielle. Idéal pour les cadeaux, idéal pour les enfants. Âge minimum 12 mois.",
      "https://www.illufantasy.com/media/catalog/product/cache/177ee782e41b4381c1b78a35396cbb5d/a/h/ah9psmp9mc_1.webp",
      [25, 30, 40],
      0,
      false,
      new Date("2023-01-01"),
      ["Petit", "Moyen", "Grand"]
    )
    // Ajoutez les autres peluches Harry Potter ici
  ];
  constructor(private http: HttpClient) { }


  getAllProducts(): Product[] {
    return this.products;
  }

  getOneProduct(id: number): Product | null{
      return this.products.find((p) => p.id === id) || null;
    }

    onLikePoduct(product : Product){
    if(product.isLiked==false){
      product.likes++;
      product.isLiked=true;
    }
    else{
      product.likes--;
      product.isLiked=false;
    }
  }
}