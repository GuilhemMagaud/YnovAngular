import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*
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
  */
  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<Product[]> {
    return <Observable<Product[]>>this.http.get('http://localhost:3000/products')
  }

  getOneProduct(id: number){
      return <Observable<Product>>this.http.get(`http://localhost:3000/products/${id}`)
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
  OnLikeProduct (product: Product): Observable<Product> {
    return <Observable<Product>> this.http.put(`http://localhost:3000/products/${product.id}/likes`, {})
  }
}