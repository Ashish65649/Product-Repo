import { Product } from './../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  @Input() productPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
