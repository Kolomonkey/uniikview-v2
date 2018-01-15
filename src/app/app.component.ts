import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master Detail View';

  links = [
    {path: '/home', name: 'Home', icon:'home'},
    {path: '/products', name: 'Products', icon: 'view_quilt'}
  ]
}
