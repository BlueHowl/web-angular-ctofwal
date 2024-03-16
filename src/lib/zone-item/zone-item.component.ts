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

    this.pinImg.src = 'assets/img/poi/' + this.point?.img || '';

    this.pinImg.onload = () => {
      //Centre le point sur le milieu de l'image
      this.centerdX = this.point.position.x - (50/2) + 16; //TODO changed 100 to img width in view
      this.centerdY = this.point.position.y - 50 - 30; //TODO changed 100 to img height in view
    };
    this.HeaderContent = this.content?.HeaderContent ||"Unlocked"
    this.HeaderImg = this.content?.HeaderImg||""
    this.Body = this.content?.Body||""
    this.HeaderContentChallenge = this.content?.HeaderContentChallenge||"Quest"
    this.HeaderImgChallenge = this.content?.HeaderImgChallenge||""
    this.BodyChallenge=this.content?.BodyChallenge||""
  }
}
