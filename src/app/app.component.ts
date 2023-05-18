import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { Size } from './models/size.model';
import { ProductsService } from './servivce/products.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: []
})
export class AppComponent implements OnInit{
  products!: Product[] | null;
  search: string = '';
  title: string = '';

  constructor(private productsServices: ProductsService) {}
  
  ngOnInit() {
    this.search = "";
    this.products = this.productsServices.getAllProducts();
    this.title = "my HP app"
  }
}
