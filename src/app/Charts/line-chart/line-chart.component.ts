import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [57, 23, 44, 66, 78, 89], label: 'SUV'},
  {data: [21, 33, 55, 66, 100, 120], label: 'Bakkie'},
  {data: [100, 89, 70, 88, 80, 99], label: 'Compact'}
];

const LINE_CHART_LABELS: string[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartLegend: true;
  lineChartColors: any = {
    backgroundColor: 'white',
    borderColor: 'black'

  };
  lineChartType = 'line';


  ngOnInit() {
  }

}
