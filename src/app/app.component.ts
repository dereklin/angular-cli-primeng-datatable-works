import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public testData;
  constructor() {
    this.testData = [
      {name: 'a'},
      {name: 'b'}
    ];
    
    setTimeout(() => {
      this.testData = [
        {name: 'c'},
        {name: 'd'}
      ];
    }, 500);
  }
}
