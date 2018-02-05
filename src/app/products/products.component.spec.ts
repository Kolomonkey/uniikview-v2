import { ProductsComponent } from './products.component';
import { ProductsService, Product } from '../shared';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsServiceStub } from '../../testing/products-service.stubs'
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('ProductsComponent', () => {

let comp: ProductsComponent;
let service: ProductsServiceStub;
let fb: FormBuilder;
  
  beforeEach(() => {
    fb = new FormBuilder;
    service = new ProductsServiceStub(null)
    comp = new ProductsComponent(service, fb);
  })

  it('GetProducts() should set `Products` to the response that is recieved from the service', () => {
    let product = [{
      "id": 5,
      "sku": "jn-24",
      "name": "Journalsdfgsdfg",
      "description": "A very useful journal"
    }]
    
    spyOn(service, 'all').and.callFake(() => {
      return Observable.from( [product] )
    })

    comp.getProducts();

    expect(comp.products).toBe( product );
  });

  it('selectProduct() should set `selectedProduct` to variable passed into it', () => {
    let product = {
      "id": 10,
      "sku": "fadsf",
      "name": "afaf",
      "description": "asdfasdfaf"
    };

    comp.selectProduct(product);

    expect(comp.selectedProduct).toBe(product);
  });

  it('productForm() should set `productForm` to a formGroup', () => {
    
    comp.createForm();

    expect(comp.productForm.value).toBeTruthy()
  });

  it('selectProduct() should set `selectedProduct` to input', () => {
    let product = {
      "id": 10,
      "sku": "test",
      "name": "best test",
      "description": "very descriptive description"
    };

    comp.selectProduct(product);

    expect(comp.selectedProduct).toBe(product);
  });
  
  it('selectProduct() should set `productForm` FormGroup to input', () => {
    let product = {
      "id": 10,
      "sku": "THE TEST SKU",
      "name": "best test",
      "description": "very descriptive descriptio"
    };

    comp.selectProduct(product);

    expect(comp.productForm.value.sku).toBe(product.sku);
  });

  it('saveForm() should call createProduct() if input does NOT have a ID', () => {    
    let product = {
      "id": null,
    };

    comp.saveForm(product);

    expect(comp.createProduct).toHaveBeenCalled();
  });

  it('selectProduct() should set `productForm` FormGroup to input', () => {
    let product = {
      "id": 10,
      "sku": "THE TEST SKU",
      "name": "best test",
      "description": "very descriptive descriptio"
    };

    comp.selectProduct(product);

    expect(comp.productForm.value.sku).toBe(product.sku);
  });
})