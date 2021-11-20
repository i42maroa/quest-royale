import { Injectable } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';

import { TeamRoad } from './road/teamRoad.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  roadTeams:TeamRoad[];

  constructor() { 
    this.roadTeams=[];
  }

  getTeamRoads(){
    return this.roadTeams;
  }


  generateNewRoads(teamsToPlay:Team[]){
    this.roadTeams = []; 
    for(let team of teamsToPlay){
      this.roadTeams.push({
        team:team,
        currentPosition:0});
    }
  }

  advanceBox(teamPos:number, amount:number, amountBoxRoad:number):boolean{
    this.roadTeams[teamPos].currentPosition +=amount;

   //If return true is because the team complete the road
   if(this.roadTeams[teamPos].currentPosition >= amountBoxRoad){
      return true;
    }
    return false;
  }

  resetRoads(){
    for(let team of this.roadTeams){
      team.currentPosition = 0;
    }
  }

  cleanRoads(){
    this.roadTeams = [];
  }
}
