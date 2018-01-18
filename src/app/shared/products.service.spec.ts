

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
      });
  });

  it('#load should retrieve one product', () => {
    const spy = spyOn(http, 'get').and.callThrough()

    const expectedResponse = {
      id: 1,
      sku: 'test123',
      name: 'The best test',
      description: 'the best test of all time'
    };

    http.setExpectedResponse(expectedResponse);

    productsService.load(expectedResponse.id)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.get).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain(`/products/${expectedResponse.id}`);
      });
  });

  it('#create should `post` a new product', () => {
    const spy = spyOn(http, 'post').and.callThrough()

    const expectedResponse = {
      id: 1,
      sku: 'test123',
      name: 'The best test',
      description: 'the best test of all time'
    };

    http.setExpectedResponse(expectedResponse);

    productsService.create(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.post).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/products');
        expect(spy.calls.mostRecent().args[1]).toEqual(JSON.stringify(expectedResponse));
        expect(spy.calls.mostRecent().args[2]).toEqual(HEADER);
      });
  });

  it('#update should `patch` a product', () => {
    const spy = spyOn(http, 'patch').and.callThrough();

    const expectedResponse = {
      id: 5,
      sku: 'test123',
      name: 'The best test',
      description: 'the best test of all time'
    };

    http.setExpectedResponse(expectedResponse);

    productsService.update(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.patch).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/products/5');
        expect(spy.calls.mostRecent().args[1]).toEqual(JSON.stringify(expectedResponse));
        expect(spy.calls.mostRecent().args[2]).toEqual(HEADER);
      });
  });

  it('#delete should `DELETE` a product', () => {
    const spy = spyOn(http, 'delete').and.callThrough();

    const expectedResponse = {
      id: 7,
      sku: 'test-123',
      name: 'The best test',
      description: 'The best of all time'
    };

    http.setExpectedResponse(expectedResponse);

    productsService.delete(expectedResponse)
      .subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(http.delete).toHaveBeenCalled();
        expect(spy.calls.mostRecent().args[0]).toContain('/products/7');
      });
  });

});
