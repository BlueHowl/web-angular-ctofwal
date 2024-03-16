import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'zone-item',
  templateUrl: './zone-item.component.html',
  styleUrl: './zone-item.component.css'
})
export class ZoneItemComponent {
  isBlackAndWhite: boolean = false;
  isTextVisible: boolean = false;

  handleGetDetails() {
    this.isTextVisible = !this.isTextVisible; // Show text when image is clicked
    console.log('details')
    console.log('isVisible' + this.isTextVisible)
    console.log('is B&W' + this.isBlackAndWhite)
  }

  hideText() {
    this.isTextVisible = false; // Hide text when clicking elsewhere
    console.log("hide")
  }

  @Input() xPosition: number = 0;
  @Input() yPosition: number = 0;
  @Input() height: number = 100;
  @Input() width: number = 100;
}
