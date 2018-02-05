import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let links: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ProductsComponent,
        ProductDetailComponent,
        ProductListComponent,
        TestComponent
      ],
      imports: [
        AppRoutingModule,
        AppMaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();

    links = de.queryAll(By.css('nav a'))
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'Master Detail View'`, async(() => {
    expect(component.title).toEqual('Master Detail View');
  }));
  it('should render title in a h1 tag', async(() => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('Master Detail View');
  }));

  it('should be two links', () => {
    expect(links.length).toBe(2);
  });

  it('should link to `home`', () => {
    const link = links.find(l => l.properties.href === '/home');
    expect(link).toBeDefined();
  });

  it('should link to `products`', () => {
    const link = links.find(l => l.properties.href === '/products');
    expect(link).toBeDefined();
  })
});