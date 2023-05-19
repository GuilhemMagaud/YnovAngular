import { Size } from "./size.model";

export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: Array<number>,
        public likes: number,
        public isLiked: boolean,
        public date:Date,
        public size?: Array<string>){
        }
    }
