import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../servivce/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`,
  styles: [
  ]
})
export class ProductsListComponent implements OnInit{
  public productsObservable : Observable<Product[]> = new Observable();
  search: string = '';
  title: string = '';

  constructor(private productsServices: ProductsService) {}
  
  ngOnInit() {
    this.productsObservable = this.productsServices.getAllProducts();
    this.search = "";
    this.title = "my HP app";
  }

}
