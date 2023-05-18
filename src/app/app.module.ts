import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { registerLocaleData } from '@angular/common';
import { SortByDatePipe } from './sort-by-date.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { FilterNullPipe } from './products-list/filter-null.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SearchPipe,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    FilterNullPipe,
    AboutComponent
  ],
  exports:[
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
