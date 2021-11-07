import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { TeamMarker } from '../marker/markerDTO.interface';
import { TeamRoad } from './road/teamRoad.interface';
import { MapService } from './map.service';

import { GAME_SETTINGS } from '../services/game-settings';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'quest-game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {  
  
  @Input() teamsToPlay:Team[];
  @Output() winTeamEvent = new EventEmitter<number>();
  roadTeams:TeamRoad[];
  

  constructor(private _mapService:MapService) {
    this.teamsToPlay=[];
    this.roadTeams=[];
   }

  ngOnInit(): void {
    this.roadTeams= this._mapService.getTeamRoads();
  }
}
