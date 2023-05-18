import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: `./product-card.component.html`,
  styles: []
})
export class ProductCardComponent implements OnInit {
  @Input() myProduct!: Product;
  selectedPrice: number = 0;
  validationState = false;
  imageUrl = "../../assets/svg/shopping-cart-plus.svg";
  
  constructor(private cartService: CartService) { }
  
  ngOnInit(): void {
    this.selectedPrice = this.myProduct.price[0];
  }

  onSizeSelected(e: any) {
    let priceIndex = this.myProduct.size?.indexOf(e.target.value) || 0;
    this.selectedPrice = this.myProduct.price[priceIndex];
  }


  onAddLike() {
    if (this.myProduct.isLiked == false) {
      this.myProduct.likes++;
      this.myProduct.isLiked = true;
    } else {
      this.myProduct.likes--;
      this.myProduct.isLiked = false;
    }
  }

  async onAddToCart(): Promise<void> {
    this.cartService.addToCart(this.myProduct, null, 1);
    this.validationState = true;
    this.imageUrl = "../../assets/svg/plus.svg";
    setTimeout(() => {
      this.validationState = false;
      this.imageUrl = "../../assets/svg/shopping-cart-plus.svg";
    }, 1000);
    console.log("Produit ajouté au panier :", this.myProduct);
  }
}