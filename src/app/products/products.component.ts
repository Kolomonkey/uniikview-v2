import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../shared';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(private ps: ProductsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getProducts();
  }

  

  getProducts() {
    this.ps.all()
      .subscribe(products => this.products = products);
  }

  selectProduct(product) {
    this.selectedProduct = product;
  }

}
