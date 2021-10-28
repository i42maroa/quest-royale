import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { TeamMarker } from '../marker/markerDTO.interface';
import { TeamRoad } from './road/teamRoad.interface';

import { GAME_SETTINGS } from '../service/game-settings';

@Component({
  selector: 'quest-game-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() gameTeams: Team[];

  marker:TeamMarker[];
  roadTeams:TeamRoad[];

  showQuestion:boolean;
  activeTeamToQuest:number;

  constructor() {
    this.gameTeams=[];
    this.marker=[]
    this.roadTeams=[];
    this.showQuestion=false;
    this.activeTeamToQuest=0;
   }

  ngOnInit(): void {
   this.gameTeams.push({
    nameTeam: "locuelos"
  });
  this.gameTeams.push({
    nameTeam: "jeje"
  });this.gameTeams.push({
    nameTeam: "jeje"
  });
  this.gameTeams.push({
    nameTeam: "jeje"
  });

   this.generateMarker();
   this.generateRoads();
   this.showQuestion=true;
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
  
  generateRoads(){
    for(let road of this.gameTeams){
      this.roadTeams.push({
        team:road,
        currentPosition:0});
    }
  }

  resetRoads(){
    this.roadTeams = [];
    this.generateRoads();
  }

  resetGame(){
    this.marker = [];
    this.gameTeams = [];
    this.roadTeams = [];
  }

  posTeamMarker(team:Team):number{
    for(let t=0;t<this.marker.length;t++){
        if(team.nameTeam === this.marker[t].markerTeam.nameTeam){
          return t;
        }
    }
    return -1;
  }

  advanceBox(teamPos:number, amount:number){
    this.roadTeams[teamPos].currentPosition +=amount;

    if(this.roadTeams[teamPos].currentPosition >= GAME_SETTINGS.amountBoxRoad){
      this.winFirstTeam(teamPos);
    }
  }

  winFirstTeam(teamPos:number){
    alert(this.gameTeams[teamPos].nameTeam.toUpperCase() + " WIN THIS GAME");
    this.marker[teamPos].resultTeam ++;
    this.resetRoads();
  }

  nextTeamActive(){
    this.activeTeamToQuest = (this.activeTeamToQuest + 1) % this.gameTeams.length;
  }

  questionResponse(response:boolean){
    if(response){
      this.advanceBox(this.activeTeamToQuest, 2);
    }

    this.nextTeamActive();
  }

  

}
