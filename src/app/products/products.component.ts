import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.ps.all()
      .subscribe(products => this.products = products);
  }

}
