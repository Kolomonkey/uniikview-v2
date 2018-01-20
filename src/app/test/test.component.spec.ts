import { TestComponent } from './test.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('TestComponent', () => {
  let comp: TestComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    comp = new TestComponent(service);
  });

  it('should test if getTodos() is working', () => {
    let ttodos = [1,2,3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ ttodos ]);
    });

    comp.ngOnInit();

    expect(comp.todos).toBe( ttodos );

  });
})