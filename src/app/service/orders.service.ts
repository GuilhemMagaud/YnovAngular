import { Injectable } from '@angular/core';
import { Order } from "../models/order.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    orders: Order[] = []
    //TODO récuperer la liste des Orders dans la base de données;

    getAllOrders(): Order[] {
        return this.orders;
    }

    getOneOrder(id: number): Order | null{
        return this.orders.find((p) => p.id === id) || null;
    }

    getNewId(): number {
        if (this.orders == null) {
            return 0;
        } else {
            let id = 0;
            for (let i = 0; i < this.orders.length; i++) {
                if (this.orders[i]['id'] > id) {
                    id = this.orders[i]['id']
                }
            }
            return id;
        }
    }

    setNewOrder(products: { product: Product; size: string | null; quantity: number }[], customer: { nom: String; prenom: String; email: String }): number {
        const newId = this.getNewId();
        const newOrder = new Order(newId, products, customer);
        //TODO envoyer le newOrder dans la base de données;
        this.orders.push(newOrder);

        return newId;
    }
}
