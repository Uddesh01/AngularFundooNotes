import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
name: string = "Hello World"
  constructor() { }

  ngOnInit(): void {
  }
  
  handleBtnClick(){
    console.log(this.name)
  }
}
