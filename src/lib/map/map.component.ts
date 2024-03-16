import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Coordinate } from '../../types/Coordinate';
import { XYPosition } from '../../types/XYPosition';
import proj4 from 'proj4';
import { Geolocation } from '@capacitor/geolocation';
import { UserPinItemComponent } from '../user-pin-item/user-pin-item.component';


@Component({
  selector: 'city-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class CityMapComponent implements OnInit {
  @Input() mapArgs: any = null;

  mapImg: any = new Image();
  pois: Array<any> = [];

  currentUserPosition: XYPosition = { x: 0, y: 0 };

  /**
   * Vérifie si une coordonnée est dans la map
   * @param coordinate (Coordinate) Lat et Lng de la position
   * @returns (boolean) True si la position est dans la map, False sinon
   */
  isInMap = (coordinate: Coordinate) => {
    return coordinate.lat <= this.mapArgs?.topLeftCorner.lat &&
      coordinate.lat >= this.mapArgs?.bottomRightCorner.lat &&
      coordinate.lng >= this.mapArgs?.topLeftCorner.lng &&
      coordinate.lng <= this.mapArgs?.bottomRightCorner.lng;
  }
  
  /**
   * Converti des coordonnées géographiques en coordonnées pixel
   * @param coordinate (Coordinate) Lat et Lng de la position
   * @returns (XYPosition) Position en pixel (x, y
   */
  getXYPosition = (coordinate: Coordinate): XYPosition => {
    
    // Get the flat coordinates of the top-left and bottom-right corners
    let topLeftFlat = this.geoToFlat(this.mapArgs.topLeftCorner.lng, this.mapArgs.topLeftCorner.lat);
    let bottomRightFlat = this.geoToFlat(this.mapArgs.bottomRightCorner.lng, this.mapArgs.bottomRightCorner.lat);
  
    // Calculate the scale and translation
    let scaleX = this.mapImg.width / (bottomRightFlat.x - topLeftFlat.x);
    let scaleY = this.mapImg.height / (topLeftFlat.y - bottomRightFlat.y);
    let translateX = -topLeftFlat.x * scaleX;
    let translateY = -topLeftFlat.y * scaleY;
  
    // Convert the input geographical coordinates to flat coordinates
    let flat = this.geoToFlat(coordinate.lng, coordinate.lat);
  
    // Map the flat coordinates to pixel coordinates
    let x = Math.abs((flat.x * scaleX) + translateX);
    let y = Math.abs((flat.y * scaleY) + translateY);
  
    return { x, y };
  }

  // Convert geographical coordinates to flat coordinates using a map projection
  // This is a placeholder function, you would need to use a library like Proj4js to do this accurately
  geoToFlat = (lon: number, lat: number) => {
    // Convert the geographical coordinates to flat coordinates using the Web Mercator projection
    let point = proj4('EPSG:4326', 'EPSG:3857', [lon, lat]);

    return { x: point[0], y: point[1] };
  }
  @ViewChild (UserPinItemComponent) userPin:UserPinItemComponent | undefined
  updateCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    const currentUserPosition = this.getXYPosition({ lat: coordinates.coords.latitude, lng: coordinates.coords.longitude });
    console.log('Current User position:', { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude });
    console.log('Current User position in pixels:', currentUserPosition);
    this.userPin!.currentUserPosition = currentUserPosition;
  };


  constructor() { }
  ngOnInit(): void {
    // Define the map projection. This example uses the Web Mercator projection (EPSG:3857).
    const projection = '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs';
    proj4.defs('EPSG:3857', projection);


    this.mapImg.src = 'assets/img/' + this.mapArgs?.img || '';

    this.mapImg.onload = () => {
      console.log("Loaded Map Size : " + this.mapImg.width + 'x' + this.mapImg.height);

      this.pois = (this.mapArgs?.pois || [])
      .filter((poi: any) => this.isInMap(poi.coordinate))
      .map((poi: any) => {
        return {
          ...poi,
          position: this.getXYPosition(poi.coordinate)
        }
      });

      console.log(this.pois);

      // Met à jour la position actuelle une fois puis toutes les 5 secondes
      this.updateCurrentPosition();
      setInterval(this.updateCurrentPosition, 5000);
    };
    
  }
}

