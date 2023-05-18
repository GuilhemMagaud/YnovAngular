import { Component } from '@angular/core';
import { OrdersService } from "../service/orders.service";
import {ActivatedRoute} from "@angular/router";
import {Order} from "../models/order.model";

@Component({
  selector: 'app-confirmation',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  order: Order|null = null;
  constructor(private route: ActivatedRoute, private orderService: OrdersService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const orderId = params['id'];
      console.log(this.orderService.getOneOrder(orderId));
      console.log(this.order);
    });
  }

}
