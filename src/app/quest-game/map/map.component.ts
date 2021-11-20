import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { TeamMarker } from '../marker/markerDTO.interface';
import { TeamRoad } from './road/teamRoad.interface';
import { MapService } from './map.service';

@Component({
  selector: 'quest-game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {  
  
  @Input() teamsToPlay:Team[];
  @Input() amountBoxRoad:number;
  @Output() winTeamEvent = new EventEmitter<number>();
  roadTeams:TeamRoad[];
  

  constructor(private _mapService:MapService) {
    this.teamsToPlay=[];
    this.roadTeams=[];
    this.amountBoxRoad=0;
   }

  ngOnInit(): void {
    this.roadTeams= this._mapService.getTeamRoads();
  }
}
