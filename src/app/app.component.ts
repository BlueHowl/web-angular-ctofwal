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
    topLeftCorner: { lat: 50.42722995032763, lng: 4.431702841016762 },
    bottomRightCorner: { lat: 50.39815797883301, lng: 4.4578053112900795 },
    pois: [
      {
        id: 0,
        name: '',
        img: '',
        coordinate: { lat: 0, lng: 0 }
      },
      {
        id: 1,
        name: 'A6K - Charleroi',
        img: 'e6k.png',
        coordinate: { lat: 50.40496258634754, lng: 4.440626421366102 }
      },
      {
        id: 2,
        name: 'Rond Point Marsupilami',
        img: 'rond-point-marsu.png',
        coordinate: { lat: 50.41755739351276, lng: 4.451011223298081 }
      },
      {
        id: 3,
        name: 'Rive-Gauche',
        img: 'rive-gauche.png',
        coordinate: { lat: 50.40810505257477, lng: 4.441559030448906 }
      },
      {
        id: 4,
        name: 'Quai 10 Ma Biche',
        img: 'kedismabiche.png',
        coordinate: { lat: 50.40610053382073, lng: 4.441054317372287 }
      },
      {
        id: 5,
        name: 'BPS22',
        img: 'bps22.png',
        coordinate: { lat: 50.41669423535122, lng: 4.4462830195838645 }
      },
      {
        id: 6,
        name: 'Eglise Saint-Christophe',
        img: 'eglise-saint-christophe.png',
        coordinate: { lat: 50.411916119950995, lng: 4.4452883937138274 }
      },
      {
        id: 7,
        name: 'Librairie Molière',
        img: 'moliere.png',
        coordinate: { lat: 50.40775393548888, lng: 4.443060657827439 }
      },
      {
        id: 8,
        name: 'Passage de la bourse',
        img: 'passage-bourse.png',
        coordinate: { lat: 50.40756212667477, lng: 4.440358854918835 }
      },
      {
        id: 9,
        name: 'Bisou Chou',
        img: 'bisous-chou.png',
        coordinate: { lat: 50.413697906030684, lng: 4.441185913789564 }
      },
      {
        id: 9,
        name: 'Beffroi',
        img: 'beffroi.png',
        coordinate: { lat: 50.41248245090011, lng: 4.4436297719195705 }
      }
    ]
  }
}
