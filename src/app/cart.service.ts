import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product; size: string | null; quantity: number }[] = [];

  constructor() {
    this.getCartFromLocalStorage();
  }

  private getCartFromLocalStorage(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  private saveCartInLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(productToAdd: Product, selectedSize: string | null, quantity: number): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.title === productToAdd.title && item.size === selectedSize
    );

    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity += quantity;
    }
    else {
      this.cart.push({ product: productToAdd, size: selectedSize, quantity });
    }

    this.saveCartInLocalStorage();
  }

  getPriceForItem(item: { product: Product; size: string | null }): number {
    if (item.size === null || item.product.size === undefined) {
      return item.product.price[0];
    }
    return item.product.price[item.product.size?.indexOf(item.size) || 0];
  }



  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      const itemPrice = this.getPriceForItem(item);
      return total + itemPrice * item.quantity;
    }, 0);
  }

  increaseQuantity(product: Product, size: string | null): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.title === product.title && item.size === size
    );

    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity += 1;
      this.saveCartInLocalStorage();
    }
  }

  decreaseQuantity(product: Product, size: string | null): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.title === product.title && item.size === size
    );

    if (existingProductIndex >= 0) {
      this.cart[existingProductIndex].quantity -= 1;

      if (this.cart[existingProductIndex].quantity <= 0) {
        this.cart.splice(existingProductIndex, 1);
      }
      this.saveCartInLocalStorage();
    }
  }

  removeFromCart(product: Product, size: string | null): void {
    const existingProductIndex = this.cart.findIndex(
        (item) => item.product.title === product.title && item.size === size
    );

    if (existingProductIndex >= 0) {
      this.cart.splice(existingProductIndex, 1);
      this.saveCartInLocalStorage();
    }
  }

  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  getCart(): { product: Product; size: string | null; quantity: number }[] {
    return this.cart;
  }
}