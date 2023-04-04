import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../servivce/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`,
  styles: [
  ]
})
export class ProductsListComponent implements OnInit{
  products!: Product[];
  search: string = '';
  title: string = '';

  constructor(private productsServices: ProductsService) {}
  
  ngOnInit() {
    this.search = "";
    this.products = this.productsServices.getAllProducts();
    this.title = "my HP app"
  }

}
