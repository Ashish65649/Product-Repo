import { Product } from './../product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  show: boolean;
  currentProduct: Product;

  obj = {
    color : '#FF00FF'
  };

  constructor() {
    this.show = false;
  }

  ngOnInit(): void {

  }
  clicked(product: Product): void {
      this.currentProduct = product;
  }
  Func(product: Product): boolean {
    if (!product || !this.currentProduct){
      return false;
    }
    if ( product.sku === this.currentProduct.sku){
      return true;
    }
  }
}
