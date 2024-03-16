import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from '../../types/Coordinate';
import { XYPosition } from '../../types/XYPosition';

@Component({
  selector: 'city-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class CityMapComponent implements OnInit {
  @Input() mapArgs: any = null;

  mapImg: any = new Image();
  pois: Array<any> = [];

  deltaLat: number = 0;
  deltaLng: number = 0;

  isInMap = (coordinate: Coordinate) => {
    return coordinate.lat <= this.mapArgs?.topLeftCorner.lat &&
      coordinate.lat >= this.mapArgs?.bottomRightCorner.lat &&
      coordinate.lng >= this.mapArgs?.topLeftCorner.lng &&
      coordinate.lng <= this.mapArgs?.bottomRightCorner.lng;
  }
  
  getZonePosition = (coordinate: Coordinate): XYPosition => {
    return {
      x: (Math.abs(this.mapArgs?.topLeftCorner.lng - coordinate.lng) / this.deltaLng) * this.mapImg.width,
      y: (Math.abs(this.mapArgs?.topLeftCorner.lat - coordinate.lat) / this.deltaLat) * this.mapImg.height
    }
  }

  constructor() { }
  ngOnInit(): void {

    //Calcul le delta entre les deux coins de la map
    this.deltaLat = Math.abs(this.mapArgs?.topLeftCorner.lat - this.mapArgs?.bottomRightCorner.lat);
    this.deltaLng = Math.abs(this.mapArgs?.topLeftCorner.lng -  this.mapArgs?.bottomRightCorner.lng);


    this.mapImg.src = 'assets/img/' + this.mapArgs?.img || '';

    this.mapImg.onload = () => {
      this.pois = (this.mapArgs?.pois || [])
      .filter((poi: any) => this.isInMap(poi.coordinate))
      .map((poi: any) => {
        return {
          ...poi,
          position: this.getZonePosition(poi.coordinate)
        }
      });

      console.log(this.pois);
    };
    
  }
}

