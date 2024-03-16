import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'zone-item',
  templateUrl: './zone-item.component.html',
  styleUrl: './zone-item.component.css'
})
export class ZoneItemComponent {
  isBlackAndWhite: boolean = false;
  isModalVisible: boolean = false;

  handleGetDetails() {
    this.isModalVisible = !this.isModalVisible; // Show text when image is clicked
    console.log('details')
    console.log('isVisible' + this.isModalVisible)
    console.log('is B&W' + this.isBlackAndWhite)
  }

  @Input() xPosition: number = 0;
  @Input() yPosition: number = 0;
  @Input() height: number = 100;
  @Input() width: number = 100;
}
