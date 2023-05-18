import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Size } from '../models/size.model';
import { ProductsService } from '../servivce/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: `./product-card.component.html`,
  styles: []
})
export class ProductCardComponent {
  @Input() myProduct!: Product | null;
  value: number = 3000;
  constructor(private productsService: ProductsService){
  }

  SizeSelected(e:any){
    this.value = e.target.value;
  }

  onLike(){
    if (this.myProduct){
      this.productsService.onLikePoduct(this.myProduct);
    }
  }

  onAddLike(){
    if (this.myProduct){
      if(this.myProduct.isLiked==false){
        this.myProduct.likes++;
        this.myProduct.isLiked=true;
      }
      else{
        this.myProduct.likes--;
        this.myProduct.isLiked=false;
      }
    }
  }
}
