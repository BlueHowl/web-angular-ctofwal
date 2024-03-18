import { Component, Input, ChangeDetectorRef, ViewChild } from '@angular/core';

@Component({
  selector: 'zone-item',
  templateUrl: './zone-item.component.html',
  styleUrl: './zone-item.component.css'
})
export class ZoneItemComponent {
OnConfirmChallenge() {
  this.isModalVisible = false
  this.isBlackAndWhite= (false);
  this.cdr.detectChanges();
}

  @Input() point: any = {};
  @Input() content: any={};
  isBlackAndWhite: boolean = true;
  isModalVisible: boolean = false;

  handleGetDetails() {
    this.isModalVisible = !this.isModalVisible;
  }
  pinImg: any = new Image();

  centerdX = 0;
  centerdY = 0;

  HeaderContent:string= "";
  HeaderImg:string="";
  Body:string="";
  HeaderContentChallenge:string="";
  HeaderImgChallenge:string="";
  BodyChallenge:string="";

  constructor(private cdr:ChangeDetectorRef) { }
  ngOnInit(): void {

    this.pinImg.src = 'assets/img/pinpoint.png'; //poi/' + this.point?.img || '';

    this.pinImg.onload = () => {
      //Centre le point sur le milieu de l'image
      this.centerdX = this.point.position.x - (50/2) ; //TODO changed 100 to img width in view
      this.centerdY = this.point.position.y - (50/2) - 20; //TODO changed 100 to img height in view
    };

    this.HeaderImg ='assets/img/poi/' + this.point.img;
    this.HeaderImgChallenge = this.content?.HeaderImgChallenge||""

    this.HeaderContent = this.point?.name + " - Unlocked"||"Unlocked"
    this.HeaderContentChallenge = this.point?.name + " - Quest"||"Quest"

    this.Body = this.point?.body||""
    this.BodyChallenge=this.point?.bodyChallenge||["test","test2"]
  }
}
