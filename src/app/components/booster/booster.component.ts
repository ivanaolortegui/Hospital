import { Component, Input, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;

  @Input('name') legend: string = 'leyenda';
  @Input() percentage: number = 50;
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  constructor() {
        
   }

  ngOnInit() {
 
  }
  onChanges(newValue: number){
 
    this.txtProgress.nativeElement.value = this.percentage;
    console.log(this.txtProgress.nativeElement.value);
    
    
    if(newValue >= 100) {
      this.percentage = 100;
    } else if(newValue <= 0) {
      this.percentage = 0;
    }
     else {
      this.percentage = newValue;
    }
     console.log(newValue);
    this.valueChanged.emit(this.percentage)
     
  }
  changeValue(value: number) {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }
    if ( this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }
    this.percentage = this.percentage + value;
    this.valueChanged.emit(this.percentage);
    this.txtProgress.nativeElement.focus();
    }
    

}
