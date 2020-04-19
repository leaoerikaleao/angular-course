import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string  = "http://loiane.com";

  courseAngular: boolean = true;

  urlImg = 'http://lorempixel.com/400/200/nature/';

  currentValue: string = '';
  valueSave: string = '';
  isMouseOver: boolean;

  buttonClick(){
    alert('Botão Clicado!');
  }

  saveValue(value){
    this.valueSave = value;
  }

  getValue(){
    return 1;
  }

  getLikeCourse(){
    return true;
  }

  onKeyUp(event:KeyboardEvent){
    this.currentValue = ((<HTMLInputElement>event.target).value);

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
