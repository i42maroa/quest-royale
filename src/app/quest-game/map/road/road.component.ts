import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Box, ColorBox } from '../box/boxTDO.interface';

import { GAME_SETTINGS } from '../../services/game-settings';

@Component({
  selector: 'map-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {

  @Input() currentPosition:number;
  listBox:Box[];
  
  constructor() {
    this.listBox = [];
    this.currentPosition = 0;
   }

  ngOnInit(): void {
    this.generateRoad(); 
  }

  generateRoad(){
    for(let i=0; i<GAME_SETTINGS.amountBoxRoad;i++){
        this.listBox.push({});
    }  
  }
}
