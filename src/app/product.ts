export class Product {

  public sku: string;
  public name: string;
  public imageUrl: string;
  public dept: string[];
  public price: number;

  constructor(sku: string, name: string, imageUrl: string, dept: string[] , price: number){
      this.sku = sku;
      this.name = name;
      this.imageUrl = imageUrl;
      this.dept = dept;
      this.price = price;
  }
}
