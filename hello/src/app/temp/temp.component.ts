import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  template: `<input [(ngModel)]="name" type="text">
  <h1 class="text-success">{{name}}</h1>
  <h2 class="text-failure">{{name}}</h2>
  <h3 class="text-special">{{name}}</h3>
  <h4 class="text-success">{{name}}</h4>
  <h5 class="text-failure">{{name}}</h5>
  <h6>{{name}}</h6>
  <h5 class="text-failure">{{name}}</h5>
  <h4 class="text-success">{{name}}</h4>
  <h3 class="text-special">{{name}}</h3>
  <h2 class="text-failure">{{name}}</h2>
  <h1 class="text-success">{{name}}</h1>
  `,

  styles: [`
  .text-success{
    color:green
  }
  .text-failure{
    color:red
  }
  .text-special{
    font-style:italic
  }`]
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
