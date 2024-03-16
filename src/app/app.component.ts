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
    bottomRightCorner: { lat: 0, lng: 0 }
  }
}
