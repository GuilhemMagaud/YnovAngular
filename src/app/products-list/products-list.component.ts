import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: `./products-list.component.html`,
  styles: []
})
export class ProductsListComponent implements OnInit {
  
  products!: Product[];
  search: string = '';
  filteredProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.search = '';
    this.products = this.productsService.getAllProducts();
    this.filterProducts();
  }

  onSearchInput(search: string) {
    this.search = search;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product: Product) =>
      product.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}