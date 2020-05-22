import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../Models/server';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() serverInput: Server;

  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      //this.serverStatus = 'Online';
      this.color = '#66BB6A',
      this.buttonText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      //this.serverStatus = 'Offline';
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  }
  toggleStatus(onlineStatus: boolean){
    this.serverInput.isOnline = !this.serverInput.isOnline;
    this.setServerStatus(this.serverInput.isOnline);

  }

}
