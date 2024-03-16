import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'city-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class CityMapComponent implements OnInit {
  @Input() mapArgs: any = null;
  cityImageUrl: string = '';
  pois: Array<any> = [];

  topLeftCorner: any = {};
  bottomRightCorner: any = {};
  

  constructor() { }
  ngOnInit(): void {
    this.cityImageUrl = 'assets/img/' + this.mapArgs?.img || '';
    this.pois = this.mapArgs?.pois || [];
    this.topLeftCorner = this.mapArgs?.topLeftCorner;
    this.bottomRightCorner = this.mapArgs?.bottomRightCorner;
    
  }
}

