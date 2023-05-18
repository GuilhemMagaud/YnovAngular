import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { SortByDatePipe } from './sort-by-date.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SearchPipe,
    HeaderComponent,
    CartComponent,
    ProductsListComponent
  ],
  exports:[
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
