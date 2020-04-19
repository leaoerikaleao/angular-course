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

  getValue(){
    return 1;
  }

  getLikeCourse(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
