import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent implements OnInit {
  @Input() myProduct!: Product;
  selectedPrice: number = 0;
  selectedSizeIndex: number = 0;
  validationState = false;
  imageUrl = "../../assets/svg/shopping-cart-plus.svg";
  isProductPage: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedPrice = this.myProduct.price[0];
    this.checkIfProductPage();
  }

  onSizeSelected(e: any) {
    let priceIndex = this.myProduct.size?.indexOf(e.target.value) || 0;
    this.selectedSizeIndex = priceIndex;
    this.selectedPrice = this.myProduct.price[this.selectedSizeIndex];
  }

  getPriceForSelectedSize(): number {
    if (this.myProduct && this.myProduct.price && this.myProduct.price[this.selectedSizeIndex]) {
      return this.myProduct.price[this.selectedSizeIndex];
    }
    return 0;
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
    const selectedSize = this.myProduct.size ? this.myProduct.size[this.selectedSizeIndex] : null;
    this.cartService.addToCart(this.myProduct, selectedSize, 1);
    this.validationState = true;
    this.imageUrl = "../../assets/svg/plus.svg";
    setTimeout(() => {
      this.validationState = false;
      this.imageUrl = "../../assets/svg/shopping-cart-plus.svg";
    }, 1000);
    console.log("Produit ajouté au panier :", this.myProduct);
  }

  navigateToProduct(event: Event, productId: number): void {
    event.stopPropagation();
    this.router.navigate(['/product', productId]);
  }

  private checkIfProductPage(): void {
    this.route.url.subscribe(urlSegments => {
      const productRoute = `product/${this.myProduct.id}`;
      this.isProductPage = urlSegments.join('/') === productRoute;
    });
  }
}