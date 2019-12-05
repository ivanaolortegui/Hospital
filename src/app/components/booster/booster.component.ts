import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  @Input('name') legend: string = 'leyenda';
  @Input() percentage: number = 50;
  constructor() {
    console.log(this.legend);
    
   }

  ngOnInit() {
    console.log(this.legend);
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
    }
}
