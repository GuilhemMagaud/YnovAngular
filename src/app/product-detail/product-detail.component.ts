import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductsService } from '../servivce/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: `./product-detail.component.html`,
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {
  myProduct: Product | null = null;
  id: number = 0;
  orientation: string = '';

  constructor(private route: ActivatedRoute, private productsService: ProductsService){
    this.route.params.subscribe( params => {
      this.id = parseInt(params['id'])
    });
  }
  ngOnInit(): void {
    this.myProduct = this.productsService.getOneProduct(this.id);
    this.orientation = "landscape";
  }

  onLike(){
    if (this.myProduct != null){
      this.productsService.onLikePoduct(this.myProduct);
    }
  }
}
