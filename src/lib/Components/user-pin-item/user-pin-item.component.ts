import { Component, Input, ChangeDetectorRef} from '@angular/core';
import { XYPosition } from '../../../types/XYPosition';

@Component({
  selector: 'user-pin-item',
  templateUrl: './user-pin-item.component.html',
  styleUrl: './user-pin-item.component.css'
})
export class UserPinItemComponent {
  pinImg: any = new Image();

  centerdX = 0;
  centerdY = 0;
  //currentUserPosition: XYPosition = { x: 0, y: 0 };

  //@Input() position: XYPosition = { x: 0, y: 0 };
  private _currentUserPosition: XYPosition = { x: 0, y: 0 };

  @Input()
  set currentUserPosition(value: XYPosition) {
    this._currentUserPosition = value;
    this.updateChildComponent();
  }

  get currentUserPosition(): XYPosition {
    return this._currentUserPosition;
  }
  
  constructor(private cdr:ChangeDetectorRef) { }

  updateChildComponent() {
    //Centre le point sur le milieu de l'image
    this.centerdX = this.currentUserPosition.x - (50/2); //TODO changed 100 to img width in view
    this.centerdY = this.currentUserPosition.y - (50/2) - 20; //TODO changed 100 to img height in view
    this.cdr.detectChanges();
  }


  ngOnInit(): void {
    this.pinImg.src = 'assets/img/user-pinpoint.png';

    this.pinImg.onload = () => {
      this.updateChildComponent();
    };
  }

}
