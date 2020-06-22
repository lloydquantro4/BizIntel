import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Models/order';
import { Observable } from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';


interface Response {
  totalPages: number;
  page: Order[];
}

@Injectable({
  providedIn: 'root'
})

export class OrderDataService {

  constructor(private http: HttpClient) {}

  getOrder(pageNumber: number, pageSize: number): Observable<Response> {

    return this.http.get<Response>('https://localhost:5001/api/order/' + pageNumber + '/' + pageSize);
  }

  

}