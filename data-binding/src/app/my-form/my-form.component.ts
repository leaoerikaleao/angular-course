import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  name: string = 'abc';
  person: any =  {
    name : 'Ana',
    age: 7
  }

  constructor() { }

  ngOnInit(): void {
  }

}
