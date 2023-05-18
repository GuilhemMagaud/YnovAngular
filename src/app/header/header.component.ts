import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() searchInput = new EventEmitter<string>();
  search: string = '';

  onSearchChange() {
    this.searchInput.emit(this.search.trim());
  }
  cartItemCount = localStorage.getItem('cartItemCount');
}