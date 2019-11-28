import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  percentage: number = 50;
  constructor() { }

  ngOnInit() {
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
