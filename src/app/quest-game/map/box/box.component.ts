import { Component, Input, OnInit, Type } from '@angular/core';
import { Box, ColorBox, TypeBox } from './boxTDO.interface';

@Component({
  selector: 'map-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  color:ColorBox;

  @Input() box:Box;

  isInitialBox:boolean;
  isFinalBox:boolean;

  constructor() { 
    this.color = ColorBox.COLOR_BOX_GREEN;
    this.box = {
      isInside:false,
      typeBox:TypeBox.NORMAL_BOX
    }
    this.isInitialBox = false;
    this.isFinalBox = false;
  }

  ngOnInit(): void {
    if(this.box.typeBox == TypeBox.INITIAL_BOX){
      this.isInitialBox=true;
    } else if ( this.box.typeBox == TypeBox.FINISHED_BOX){
      this.isFinalBox=true;
    }
  }

}
