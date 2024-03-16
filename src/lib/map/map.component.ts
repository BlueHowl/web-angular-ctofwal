import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'city-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class CityMapComponent implements OnInit {
  cityImageUrl = 'assets/img/map-charleroi.png';

  constructor() { }
  ngOnInit(): void {
  }
}

