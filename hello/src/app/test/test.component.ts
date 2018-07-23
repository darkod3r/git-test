import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>
    welcome {{name}}
  </h1>
  <input type="text" [id]="id" [value]="name">
  <h2 class="text-success"> lowes</h2>
  <h2 [class]="isSuccess"> codeforces</h2>
  <h2 [class.text-failure]="isError"> topcoder</h2>
  <h2 [ngClass]="message"> hackerrank</h2>
  <h2 [style.color]="isError ? 'red':'green'"> style binding</h2>
  <h3 [ngStyle]="stylecolor"> style binding 2</h3>
  <button (click)=onClick()>hello</button>
  <input #myInput type="text">
  <button (click)="mylog(myInput.value)">log</button>
  {{str}}
  <input [(ngModel)]="name" type="text">
  {{name}}
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
  }
  
  `]
})
export class TestComponent implements OnInit {

  public name="an";
  public id="test"
  public isSuccess="text-special";
  public isError="true";
  public str="";

  public message={
    "text-success":!this.isError,
    "text-failure":this.isError,
    "text-special":this.isError
  }

  public stylecolor={
    color:"blue",
    fontStyle:"italic"
  }

  onClick(){
    this.str="do not touch this button";
  }

  mylog(variable)
  {
    console.log(variable);
  }
  constructor() { }

  ngOnInit() {
  }

}
