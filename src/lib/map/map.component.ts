import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'city-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class CityMapComponent implements OnInit {
  @Input() mapArgs: any = null;
  cityImageUrl = '';

  topLeftCorner: any = this.mapArgs?.topLeftCorner;
  bottomRightCorner: any = this.mapArgs?.bottomRightCorner;

  constructor() { }
  ngOnInit(): void {
    this.cityImageUrl = 'assets/img/' + this.mapArgs?.img || '';
  }
}

