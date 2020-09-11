import { Product } from './../product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  @Output() clickProduct: EventEmitter<Product>;

  sty = {
    'margin-top.px': 10
  };

  constructor() {
    this.clickProduct = new EventEmitter();
   }

  ngOnInit(): void {
  }

  clicked(product: Product): void {
    this.clickProduct.emit(product);
  }
}
