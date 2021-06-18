import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casiers',
  templateUrl: './casiers.component.html',
  styleUrls: ['./casiers.component.css']
})
export class CasiersComponent implements OnInit {

  lastUpdate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
