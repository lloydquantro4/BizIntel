import { Component, OnInit } from '@angular/core';
import { Order } from '../../Models/order';
import { OrderDataService } from '../../Services/order-data.service';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor(private orderData: OrderDataService) { }

  orders: Order [];
  page = 1;
  pageSize = 4;
  total = 0;
  loading = true;

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderData.getOrder(this.page, this.pageSize)
    .subscribe(res => {
      this.orders = res.page;
      this.total = res.totalPages;
      this.loading = false;

    });

  }
  goToPrev(): void {
    this.loading = true;
    this.page--;
    if (this.page < this.total) {
      this.page++;
    }
    this.getOrders();
  }
  goToNext(): void {
    this.loading = true;
    this.page++;
    if (this.page > this.total + 1) {
      this.page--;
    }
    this.getOrders();

  }
  goToPage(n: number): void {
    this.loading = true;
    if ((n <= this.total) && ( n > 0)) {
        this.page = n;
        this.getOrders();
    }
  }




}
