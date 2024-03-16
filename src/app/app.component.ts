import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CityConquest';

  caroloMap = {
    img: 'map-charleroi.png',
    topLeftCorner: { lat: 0, lng: 0 },
    bottomRightCorner: { lat: 0, lng: 0 },
    pois: [
      {
        id: 0,
        name: 'test',
        img: 'test.png',
        coordinate: { lat: 1000, lng: 200 }
      },
      {
        id: 1,
        name: 'test2',
        img: 'test2.png',
        coordinate: { lat: 100, lng: 200 }
      },
      {
        id: 2,
        name: 'test3',
        img: 'test3.png',
        coordinate: { lat: 600, lng: 800 }
      }
    ]
  }
}
