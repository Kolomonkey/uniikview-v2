import { TestComponent } from './test.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

describe('TestComponent', () => {
  let comp: TestComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    comp = new TestComponent(service);
  });

  it('Should get Todos list when getTodos it called', () => {
    let todos = [1,2,3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from( [ todos ] );
    })

    comp.ngOnInit();

    expect(comp.todos).toBe( todos );
  });

  it('Should add newTodo when add is called', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    })

    comp.add()

    expect(service.add).toHaveBeenCalled();
  })
})