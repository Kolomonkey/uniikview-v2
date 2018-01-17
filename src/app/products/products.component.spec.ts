import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from '../shared/products.service';

class ProductsServiceStub{}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, ProductListComponent],
      providers: [
        {provide: ProductsService, useClass: ProductsServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed
      .overrideComponent(ProductsComponent, {set: {template: ''}})
      .createComponent(ProductsComponent);

    component = fixture.componentInstance;
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
