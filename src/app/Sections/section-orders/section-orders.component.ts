import { Component, OnInit } from '@angular/core';
import { Order } from '../../Models/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }
  orders: Order [] = [
    {id: 1,
       customer: {id: 1, name: 'Lloyd', province: 'WC', email: 'test1@gmail.com'},
        total: 200, placed: new Date(2020, 2, 2), fulfilled: new Date(2017, 12, 2)
      },
    {id: 2,
        customer: {id: 2, name: 'Lloyd2', province: 'EC', email: 'test2@gmail.com'},
         total: 400, placed: new Date(2020, 2, 12), fulfilled: new Date(2017, 2, 2)
   }

  ];

  ngOnInit() {
  }


}
