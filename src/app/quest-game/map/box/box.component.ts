import { Component, Input, OnInit, Type } from '@angular/core';

@Component({
  selector: 'map-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() isInside:boolean;

  constructor() { 
    this.isInside=false;
  }

  ngOnInit(): void {
  }
}
