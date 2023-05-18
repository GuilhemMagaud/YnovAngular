import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import {OrdersService} from "../service/orders.service"
import {NavigationExtras, Router} from "@angular/router";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartService, private orderService: OrdersService, private router: Router) {}

  public onCheckout() {
    const orderId = this.orderService.setNewOrder(this.cartService.getCart());
    this.cartService.clearCart();
    const navigationExtras: NavigationExtras = {
      queryParams: { id: orderId }
    };

    this.router.navigate(['/checkout'], navigationExtras).then();
  }
}
