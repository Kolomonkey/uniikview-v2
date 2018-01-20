import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[];
  @Output() selected = new EventEmitter();
}
