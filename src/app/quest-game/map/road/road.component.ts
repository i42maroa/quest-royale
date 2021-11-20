import { Component, Input, OnInit } from '@angular/core';
import { Box, ColorBox } from '../box/boxTDO.interface';

@Component({
  selector: 'map-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {

  @Input() currentPosition:number;
  @Input() amountBoxRoad:number;
  listBox:Box[];
  
  constructor() {
    this.listBox = [];
    this.currentPosition = 0;
    this.amountBoxRoad = 0;
   }

  ngOnInit(): void {
    this.generateRoad(); 
  }

  generateRoad(){
    for(let i=0; i<this.amountBoxRoad;i++){
        this.listBox.push({});
    }  
  }
}
