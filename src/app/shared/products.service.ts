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

}
