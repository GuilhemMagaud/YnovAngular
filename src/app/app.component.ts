import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { Size } from './models/size.model';
import { ProductsService } from './servivce/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: []
})
export class AppComponent implements OnInit{
  products!: Product[] | Observable<Product[]>;
  search: string = '';
  title: string = '';

  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    this.search = "";
    this.products = this.productsServices.getAllProducts();
    this.title = "my HP app"
  }
}
