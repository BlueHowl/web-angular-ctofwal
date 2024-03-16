import { Component, Input } from '@angular/core';

@Component({
  selector: 'zone-item',
  templateUrl: './zone-item.component.html',
  styleUrl: './zone-item.component.css'
})
export class ZoneItemComponent {
  @Input() point: any = {};
  isBlackAndWhite: boolean = false;
  isModalVisible: boolean = false;

  handleGetDetails() {
    this.isModalVisible = !this.isModalVisible; // Show text when image is clicked
    console.log('details')
    console.log('isVisible' + this.isModalVisible)
    console.log('is B&W' + this.isBlackAndWhite)
  }
  pinImg: any = new Image();

  centerdX = 0;
  centerdY = 0;

  constructor() { }
  ngOnInit(): void {

    this.pinImg.src = 'assets/img/poi/' + this.point?.img || '';

    this.pinImg.onload = () => {
      //Centre le point sur le milieu de l'image
      this.centerdX = this.point.position.x - (50 / 2); //TODO changed 100 to img width in view
      this.centerdY = this.point.position.y - 50; //TODO changed 100 to img height in view
    };
    
  }
}
