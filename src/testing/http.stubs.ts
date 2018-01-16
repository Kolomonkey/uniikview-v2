import { Http, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';

export class HttpStub {
private expectedResponse;

setExpectedResponse(response) {
    this.expectedResponse = new Response({body: response} as ResponseOptions);
}

get(url) {
    return Observable.of(this.expectedResponse);
}
}