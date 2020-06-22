import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Server } from '../Models/server';
@Injectable({
  providedIn: 'root'
})
export class ServerDataServiceService {

  constructor(private http: HttpClient) { }

  getServers(): Observable<Server[]> {
      return this.http.get<Server[]>('https://localhost:5001/api/servers/');
  }
}
