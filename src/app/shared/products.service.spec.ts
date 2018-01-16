import { TestBed, inject } from '@angular/core/testing';
import { Headers, Http } from '@angular/http';

import { ProductsService } from './products.service';
import { HttpStub } from '../../testing/http.stubs';

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

describe('Service: Products', () => {
  let http: HttpStub;
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      ProductsService,
      {provide: Http, useClass: HttpStub}]
    });
  });

  beforeEach(inject([Http, ProductsService], (h: HttpStub, p: ProductsService) => {
    http = h;
    productsService = p;
  }));

  it('#all should retrieve all products', () => {
    const spy = spyOn(http, 'get').and.callThrough();

    const expectedResponse = [{
      sku: 'test123',
      name: 'The best test',
      description: 'the best test of all time'
    }];

    http.setExpectedResponse(expectedResponse);

    productsService.load(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/products');
      })


  })
});
