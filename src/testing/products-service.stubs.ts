import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

export class ProductsServiceStub {

    constructor(private http: Http) {}

    all() {
        return this.http.get('...').map(res => res.json());
    }
    load() {
        return this.http.get('...').map(res => res.json());
    }
    create() {
        return this.http.get('...').map(res => res.json());
    }
    update() {
        return this.http.get('...').map(res => res.json());
    }
    delete() {
        return this.http.get('...').map(res => res.json());
    }
}