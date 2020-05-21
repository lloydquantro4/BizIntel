import { Component, OnInit } from '@angular/core';
import { Server } from '../../Models/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'M1', isOnline: true },
  {id: 2, name: 'M2', isOnline: true },
  {id: 3, name: 'M3', isOnline: false },
  {id: 4, name: 'M4', isOnline: true }

];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
