import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      1,
      "avion",
      "avion certifié Oeto-Tex, coton bio issue du commerce équitable, taille 12cm",
      "https://static.actu.fr/uploads/2021/09/20210929-air-france-pre-sente-son-premier-airbus-a220-300-3pdf-foxit-reader.jpg",
      2300,
      0,
      false,
      new Date("09/11/2001"),
      [new Size("XL",3000),new Size("S",2000)]
    ),
    new Product(
      2,
      "peluche Paimon",
      "Peluche certifié Oeto-Tex, coton bio issue du commerce équitable, taille 12cm",
      "https://ae01.alicdn.com/kf/Hc53f8793fe2244f59e9663f2fa47f4e6Q/Peluche-de-jeu-d-anime-2021-en-Stock-Genshin-Impact-Paimon-poup-e-en-peluche-douce.jpg",
      2300,
      0,
      false,
      new Date("12/09/2000"),
      [new Size("M",3000),new Size("S",2000)]
    )
  ];
  constructor() { }

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