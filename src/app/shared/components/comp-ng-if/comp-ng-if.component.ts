import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-ng-if',
  templateUrl: './comp-ng-if.component.html',
  styleUrls: ['./comp-ng-if.component.scss']
})
export class CompNgIfComponent implements OnInit {

  // Sample data for demonstration
  products = [
    { name: 'iPhone 15 Pro', isAvailable: true, price: 999 },
    { name: 'Samsung Galaxy S24', isAvailable: false, price: 899 },
    { name: 'MacBook Pro M3', isAvailable: true, price: 1599 },
    { name: 'Dell XPS 13', isAvailable: true, price: 1299 },
    { name: 'Sony PlayStation 5', isAvailable: false, price: 499 },
    { name: 'Nintendo Switch OLED', isAvailable: true, price: 349 },
    { name: 'iPad Air', isAvailable: false, price: 599 },
    { name: 'AirPods Pro', isAvailable: true, price: 249 }
  ];

  // Control variables for demonstration
  showAllProducts = true;
  showOnlyAvailable = false;
  showExpensiveItems = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Helper methods
  getAvailableProducts() {
    return this.products.filter(product => product.isAvailable);
  }

  getExpensiveProducts() {
    return this.products.filter(product => product.price > 500);
  }

  toggleShowAll() {
    this.showAllProducts = !this.showAllProducts;
  }

  toggleShowAvailable() {
    this.showOnlyAvailable = !this.showOnlyAvailable;
  }

  toggleShowExpensive() {
    this.showExpensiveItems = !this.showExpensiveItems;
  }
}
