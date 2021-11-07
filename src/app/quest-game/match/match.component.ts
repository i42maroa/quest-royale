import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { TeamMarker } from '../marker/markerDTO.interface';
import { GAME_SETTINGS } from '../services/game-settings';

import { MapService } from '../map/map.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  gameTeams: Team[];
  marker:TeamMarker[];

  showQuestion:boolean;
  activeTeamToQuest:number;
  isStartGame:boolean;

  constructor(private _mapService:MapService) {
    this.gameTeams = GAME_SETTINGS.teamsGame;
    this.marker=[];
    this.showQuestion=false;
    this.activeTeamToQuest=0;
    this.isStartGame=false;
   }

  ngOnInit(): void {
    this.generateMarker();
    this._mapService.generateNewRoads(this.gameTeams);
  }

  generateMarker(){
    for(let team of this.gameTeams){
      this.marker.push({
        markerTeam:{
          nameTeam: team.nameTeam
        },
        resultTeam:0
      });
    }
  }

  
  startGame(){
    this.showQuestion = true;
    this.isStartGame = true;
  }

  
  resetGame(){
    this.marker = [];
    this.gameTeams = [];
  }
  
  toggleShowQuest(){
    this.showQuestion = !this.showQuestion;
  }

  posTeamMarker(team:Team):number{
    for(let t=0;t<this.marker.length;t++){
        if(team.nameTeam === this.marker[t].markerTeam.nameTeam){
          return t;
        }
    }
    return -1;
  }

  nextTeamActive(){
    this.activeTeamToQuest = (this.activeTeamToQuest + 1) % this.gameTeams.length;
  }

  questionResponse(amountResponseQuestion:number){
    this.showQuestion = false;
    if(this._mapService.advanceBox(this.activeTeamToQuest, amountResponseQuestion)){
      this.winTeam(this.activeTeamToQuest);
    }
    this.nextTeamActive();
  }

  showMap(){
    this.showQuestion = false;
  }

  winTeam(teamPos:number){
    alert(this.gameTeams[teamPos].nameTeam.toUpperCase() + " WIN THIS GAME");
    this.marker[teamPos].resultTeam ++;
    this._mapService.resetRoads();
  }

}
