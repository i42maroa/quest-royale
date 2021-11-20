import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { MapService } from '../map/map.service';
import { MarkerService } from '../marker/marker.service';
import { TeamService } from 'src/app/team/team.service';
import { Match } from './matchDTO.interface';
import { DEFAULT_GAME_SETTINGS, GameSettings } from '../services/gameSettings.interface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  @Output() matchFinishedEvent = new EventEmitter<number>();
  @Output() roundFinishedEvent = new EventEmitter<number>();
  
  @Input() match:Match;
  @Input() teamsGame:Team[];
  @Input() matchSettings:GameSettings;
  matchTeams: Team[];

  showQuestion:boolean;
  activeTeamToQuest:number;
  isStartGame:boolean;
  loadTeams:boolean;

  constructor(private _mapService:MapService, private _markerService:MarkerService, private _teamService:TeamService) {
    this.match = {   
      teamsToPlay:[],
      rounds:[]
    }
    this.teamsGame = [];
    this.matchTeams = [];
    this.showQuestion=false;
    this.activeTeamToQuest=0;
    this.isStartGame=false;
    this.loadTeams=false;
    this.matchSettings= DEFAULT_GAME_SETTINGS;
   }

  ngOnInit(): void {
      for(let team in this.match.teamsToPlay){
        this.matchTeams.push(this.teamsGame[this.match.teamsToPlay[team]])
      }
     
      this._markerService.generateNewMarker(this.matchTeams);

      for(let round of this.match.rounds){
        this._markerService.incrementTeamMarkerResult(round.teamWin, this.matchSettings.amountRoundToWin)
      }

      this._mapService.generateNewRoads(this.matchTeams);
      this.loadTeams=true;
  }
  
  startGame(){
    this.showQuestion = true;
    this.isStartGame = true;
  }
  
  toggleShowQuest(){
    this.showQuestion = !this.showQuestion;
  }

  nextTeamActive(){
    this.activeTeamToQuest = (this.activeTeamToQuest + 1) % this.matchTeams.length;
  }

  questionResponse(amountResponseQuestion:number){
    if(this._mapService.advanceBox(this.activeTeamToQuest, amountResponseQuestion, this.matchSettings.amountBoxRoad)){
      this.winTeam(this.activeTeamToQuest);
    }
    this.nextTeamActive();
  }

  showMap(){
    this.showQuestion = false;
  }

  winTeam(teamPos:number){
    if(this._markerService.incrementTeamMarkerResult(teamPos, this.matchSettings.amountRoundToWin )){
      alert(this.matchTeams[teamPos].nameTeam.toUpperCase() + " WIN THE MATCH. CONGRATULATION");
      this.matchFinishedEvent.emit(teamPos);
    }else{
      alert(this.matchTeams[teamPos].nameTeam.toUpperCase() + " WIN THE ROUND");
      this.roundFinishedEvent.emit(teamPos);
    }

    this._mapService.resetRoads();
  }

}
