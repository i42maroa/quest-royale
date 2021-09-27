import { Component, Input, OnInit } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { Box, ColorBox, TypeBox } from '../box/boxTDO.interface';


@Component({
  selector: 'map-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {

  @Input() teamName:string;

  listBox:Box[];
  currentPosition:number;
  lastPosition:number;

  constructor() {
    this.listBox = [];
    this.currentPosition = 0;
    this.lastPosition = 10;
    this.teamName = "default";
   }

  ngOnInit(): void {
    this.generateRoad();
    this.listBox[this.currentPosition].isInside = true;
  }


  generateRoad(){
    this.listBox.push({
      typeBox:TypeBox.INITIAL_BOX,
      isInside:false
    });

      for(let i=0;i<this.lastPosition;i++){
          this.listBox.push({
            typeBox:TypeBox.NORMAL_BOX,
            isInside:false
          });
      }

      this.listBox.push({
        typeBox:TypeBox.FINISHED_BOX,
        isInside:false
      });
  }


  advanceBox(amount:number){

    if(this.currentPosition + amount > this.lastPosition){
      this.changeValueOfIsInside(this.currentPosition, this.lastPosition + 1);
      this.currentPosition = this.lastPosition + 1;   
      this.getFinishedMessage();
    }else{
      this.currentPosition += amount;
      this.changeValueOfIsInside(this.currentPosition - amount, this.currentPosition);
    }
  }

  changeValueOfIsInside(lastPosition:number, newPosition:number){
    this.listBox[lastPosition].isInside = false;
    this.listBox[newPosition].isInside = true;
  }

  getFinishedMessage(){
    alert( this.teamName.toUpperCase() + " WIN THIS GAME");
  }
}
