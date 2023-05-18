import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../servivce/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: `./product-detail.component.html`,
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {
  myProductObservable!: Observable<Product>;
  id: number = 0;
  orientation: string = '';

  constructor(private route: ActivatedRoute, private productsService: ProductsService){
    this.route.params.subscribe( params => {
      this.id = parseInt(params['id'])
    });
  }
  ngOnInit(): void {
    this.myProductObservable = this.productsService.getOneProduct(this.id)
    this.orientation = "landscape";
  }
}
