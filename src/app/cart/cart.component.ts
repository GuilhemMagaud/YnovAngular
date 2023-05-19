import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { OrdersService } from "../service/orders.service"
import { Product } from '../models/product.model';
import {NavigationExtras, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  form: FormGroup;
  formSubmitted: boolean = false;
  nom: string = "";
  prenom: string = "";
  email: string= "";

  constructor(private formBuilder: FormBuilder, public cartService: CartService, private orderService: OrdersService, private router: Router) {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

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

  submitForm() {
    this.formSubmitted = true;

    if (this.form.valid) {
      this.form.reset();
      this.formSubmitted = false;
      this.onCheckout();
    }
  }

  public onCheckout() {
    const orderId = this.orderService.setNewOrder(this.cartService.getCart(), {nom: this.nom, prenom: this.prenom, email: this.email});
    this.cartService.clearCart();
    const navigationExtras: NavigationExtras = {
      queryParams: { id: orderId }
    };
    this.router.navigate(['/checkout'], navigationExtras).then();
  }
}
