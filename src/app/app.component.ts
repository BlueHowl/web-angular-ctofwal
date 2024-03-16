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
        coordinate: { lat: 50.41396144205221, lng: 4.4431403116263 }
      },
      {
        id: 1,
        name: 'A6K - Charleroi',
        img: 'e6k.png',
        coordinate: { lat: 50.40440144913618, lng: 4.441691269764715 }
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
      },
      {
        id: 4,
        name: 'Quai 10 Ma Biche',
        img: 'pinpoint.png',
        coordinate: { lat: 50.40610053382073, lng: 4.441054317372287 }
      },
      {
        id: 5,
        name: 'Test',
        img: 'pinpoint.png',
        coordinate: { lat: 50.380955132316906, lng: 4.401065101671166 }
      }
    ]
  }
}
