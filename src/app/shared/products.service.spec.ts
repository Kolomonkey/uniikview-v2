import { TestBed, inject } from '@angular/core/testing';
import { Headers, Http } from '@angular/http';

import { ProductsService } from './products.service';
import { HttpStub } from '../../testing/http.stubs';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

describe('Service: Products', () => {
  let http: HttpStub;
  let ProductService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      ProductsService,
      {provide: Http, useClass: HttpStub}]
    });
  });

  beforeEach(() => {
    TestBed
  })

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
