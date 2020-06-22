import { Component, OnInit } from '@angular/core';
import { OrderDataService } from '../../Services/order-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private salesData: OrderDataService) { }
  order: any;
  orderLabels: string[];
  orderData: number[];
  indexPage = 1;
  limitPage = 5;


  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
     this.getChartData();
  }
  getChartData()
  {
    this.salesData.getOrder(this.indexPage, this.limitPage)
    .subscribe(res => {
      this.order = res.page;
      const ldata = this.formatData();
      this.barChartLabels = ldata.map(x => x[0]).reverse();
      this.barChartData = [{ data: ldata.map(x => x[1]), label: 'Daily Sales'}];
      console.log(ldata);
      });
   }

  formatData()
  {
        const formattedOrders = this.order.reduce((r, e) => {
          r.push([moment(e.orderPlaced).format('YY-MM-DD'), e.total]);
          return r;},[]);

        const p = [];
        const chartData = formattedOrders.reduce((r, e) => {
            const key = e[0];
            if (!p[key]) {
              p[key] = e;
              r.push(p[key]);
            } else {
              p[key][1] += e[1];
            }
            return r;
          }, []);
    
        return chartData; 
        }
}
