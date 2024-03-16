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
    topLeftCorner: { lat: 50.50118509830947, lng: 4.345420925564241 },
    bottomRightCorner: { lat: 50.35616625708724, lng: 4.51919233768808 },
    pois: [
      {
        id: 0,
        name: 'Hotel de ville de charleroi',
        img: 'hotel-ville.png',
        coordinate: { lat: 50.41192225838149, lng: 4.444018139827997 }
      },
      {
        id: 1,
        name: 'A6K - Charleroi',
        img: 'e6k.png',
        coordinate: { lat: 50.40480516118629, lng: 4.441795600400596 }
      },
      {
        id: 2,
        name: 'test 0 : 0 top left',
        img: 'pinpoint.png',
        coordinate: { lat: 50.50118509830947, lng: 4.345420925564241 }
      },
      {
        id: 3,
        name: 'test outisde map',
        img: 'pinpoint.png',
        coordinate: { lat: 50.364209, lng: 4.546653 }
      }
    ]
  }
}
