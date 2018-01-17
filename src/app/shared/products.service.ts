import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Product } from './product';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/products/'
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  all() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  create(product: Product) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(product), HEADER)
      .map(res => res.json());
  }

  update(product: Product) {
    return this.http.patch(`${BASE_URL}${product.id}`, JSON.stringify(product), HEADER)
      .map(res => res.json());
  }

  delete(product: Product) {
    return this.http.delete(`${BASE_URL}${product.id}`)
      .map(res => res.json())
  }
}
