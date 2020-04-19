import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;
  @Output() chanceValue = new EventEmitter();
  
  @ViewChild('fildInput') fildValueInput: ElementRef;
 

  increment(){
    this.fildValueInput.nativeElement.value++;
    this.chanceValue.emit({newValue: this.value});
  }

  decreases(){
    this.fildValueInput.nativeElement.value--;
    this.chanceValue.emit({newValue: this.value});

  }


  constructor() { }

  ngOnInit(): void {
  }

}
