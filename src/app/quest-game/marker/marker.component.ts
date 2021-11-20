import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { MarkerService } from './marker.service';
import { TeamMarker } from './markerDTO.interface';

@Component({
  selector: 'quest-game-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  marker:TeamMarker[];

  constructor(private _markerService:MarkerService) { 
    this.marker=[];
  }

  ngOnInit(): void {
    this.marker=this._markerService.getMarker();
  }
}
