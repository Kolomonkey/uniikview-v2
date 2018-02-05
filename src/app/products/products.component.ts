import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../shared';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  productForm: FormGroup; 

  constructor(private ps: ProductsService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.getProducts();
  }

  createForm() {
    this.productForm = this.fb.group({
      id: null,
      sku: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  getProducts() {
    this.ps.all()
      .subscribe(products => this.products = products);
  }

  selectProduct(product) {
    this.selectedProduct = product;
    this.productForm.setValue({id: product.id, sku: product.sku, name: product.name, description: product.description});
  }

  saveForm(product) {
    if (!product.id) {
      this.createProduct(product);
    } else {
      this.updateProduct(product);
    }
  };

  createProduct(product) {
    this.ps.create(product)
      .subscribe(response => {
        this.getProducts();
        this.selectedProduct = null;
        this.productForm.reset();
      })
  };

  updateProduct(product) {
    this.ps.update(product)
      .subscribe(reseponse => {
        this.getProducts();
        this.selectedProduct = null;
        this.productForm.reset();
      })
  }

  deleteProduct(product) {
    this.ps.delete(product)
      .subscribe(reseponse => {
        this.getProducts();
      })
  }

}
