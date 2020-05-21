import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  pieChartData: number[] = [350,456,120];
  pieChartLabels: string[] = ['Government', 'Private sector', 'Individuals'];
  colors: any[] =  [
    {
      backgroundColor: ['blue', 'red', 'green'],
      borderColor: 'black'
    }
  ];
  pieChartType = 'doughnut';

  ngOnInit() {
  }

}
