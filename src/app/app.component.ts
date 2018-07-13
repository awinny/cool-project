import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

declare var CorporateUi: any;

@Component({
  selector: '#cool-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteName = 'Cool App';
  items:any = [{ name: 'home' }];
  apa:string = 'nav-item';

  constructor() {
    CorporateUi.baseComponents();
    this.addItem({ name: 'contact' })
  }

  addItem(item: any) {
    this.items.push(item)
  }
}
