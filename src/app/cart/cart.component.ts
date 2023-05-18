import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartService) {}
  decreaseQuantity(product: Product, size: string | null): void {
    const existingProductIndex = this.cartService.getCart().findIndex(
      (item) => item.product.title === product.title && item.size === size
    );

    if (existingProductIndex >= 0) {
      const item = this.cartService.getCart()[existingProductIndex];
      if (item.quantity > 1) {
        this.cartService.decreaseQuantity(product, size);
      } else {
        this.cartService.removeFromCart(product, size);
      }
    }
  }
}