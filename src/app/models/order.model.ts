import {Product} from "./product.model";

export class Order {
    constructor(
        public id: number,
        public products: {
            product : Product,
            size: string | null
            quantity : number,
        }[],
        public customer : {
            email : String|null,
        }) {
    }
}
