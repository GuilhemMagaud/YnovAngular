import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import {OrdersService} from "../service/orders.service"
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
