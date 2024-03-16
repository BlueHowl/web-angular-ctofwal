import { Component, Input } from '@angular/core';

@Component({
  selector: 'zone-item',
  templateUrl: './zone-item.component.html',
  styleUrl: './zone-item.component.css'
})
export class ZoneItemComponent {
  @Input() xPosition: number = 0;
  @Input() yPosition: number = 0;
}
