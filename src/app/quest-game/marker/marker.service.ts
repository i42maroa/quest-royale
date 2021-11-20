import { Injectable } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { TeamMarker } from './markerDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  marker:TeamMarker[];

  constructor() {
    this.marker=[];
   }

   generateNewMarker(gameTeams:Team[]){
    this.marker = [];
    for(let team of gameTeams){
      this.marker.push({
        markerTeam:{
          nameTeam: team.nameTeam,
          id:team.id
        },
        resultTeam:0
      });
    }
  }

  incrementTeamMarkerResult(teamNumber:number, maxRoundResult:number):boolean{
    this.marker[teamNumber].resultTeam ++;
    if( this.marker[teamNumber].resultTeam >= maxRoundResult){
      return true;
    }
    return false
  }

  getMarker(){
    return this.marker;
  }

}
