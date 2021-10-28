import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { TeamMarker } from './markerDTO.interface';

@Component({
  selector: 'quest-game-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  @Input() marker:TeamMarker[];

  constructor() { 
    this.marker=[];
  }

  ngOnInit(): void {
  }

}
