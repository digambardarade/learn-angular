import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-ng-class',
  templateUrl: './comp-ng-class.component.html',
  styleUrls: ['./comp-ng-class.component.scss']
})
export class CompNgClassComponent implements OnInit {

  products = [
    { name: 'iPhone 15 Pro', isAvailable: true },
    { name: 'Samsung Galaxy S24', isAvailable: false },
    { name: 'MacBook Pro M3', isAvailable: true },
    { name: 'Dell XPS 13', isAvailable: true },
    { name: 'Sony PlayStation 5', isAvailable: false },
    { name: 'Nintendo Switch OLED', isAvailable: true },
    { name: 'iPad Air', isAvailable: false },
    { name: 'AirPods Pro', isAvailable: true },
    { name: 'Microsoft Surface Pro', isAvailable: true },
    { name: 'Tesla Model Y', isAvailable: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
