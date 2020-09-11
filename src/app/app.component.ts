import { Product } from './product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductApp';

  productList: Product[];
  constructor(){
    this.productList = new Array();
    this.productList.push(new Product('MYSHOES', 'Black Jacket', 'assets/black-jacket.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99));
    this.productList.push(new Product('HEATOJACKET', 'Black Jacket', 'assets/black-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99));
    this.productList.push(new Product('NEATOJACKET', 'Black Jacket', 'assets/black-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 299.99));
  }

  productSelected(product: Product): void {
    // console.log('Product clicked : ' + product);
  }
}
