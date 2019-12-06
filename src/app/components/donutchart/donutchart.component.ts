import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {
  @Input ('chartLabels') doughnutChartLabels: string[] = [];
  @Input ('chartData') doughnutChartData: number[]= [];
  @Input ('chartType') doughnutChartType: string= '';
  constructor() { }

  ngOnInit() {
  }

}
