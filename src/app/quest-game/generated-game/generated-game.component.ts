import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { GameModeOptions, GameSettings, RoundSelectOptions } from '../services/gameSettings.interface';

@Component({
  selector: 'app-generated-game',
  templateUrl: './generated-game.component.html',
  styleUrls: ['./generated-game.component.scss']
})
export class GeneratedGameComponent implements OnInit {

  gameSettings:GameSettings;

  showAddTeam:boolean;
  newNameTeam:string;
  roundSelectOptions:string[];
  gameModeOptions:GameModeOptions[];
  typeRoundSelected:string;

  showConfirmModal:boolean;

  constructor() { 
    this.showAddTeam=false;
    this.newNameTeam="";
    this.roundSelectOptions=[
      RoundSelectOptions.UNIQUE,
      RoundSelectOptions.BEST_OF_THREE,
      RoundSelectOptions.BEST_OF_FIVE,
    ]
    this.gameModeOptions=[
      GameModeOptions.REY_PISTA,
      GameModeOptions.TOURNAMENT
    ]

    this.typeRoundSelected=this.roundSelectOptions[0];

    this.gameSettings ={
      amountBoxRoad:10,
      amountOptionsQuestion:4,
      amountRoundToWin:2,
      amountTeamsToPlay:2,
      easyQuestions:true,
      mediumQuestions:false,
      dificultQuestions:false,
      specialQuestions:false,
      gameMode:this.gameModeOptions[0],
      teamsGame:[]
    }
    this.showConfirmModal=false;
  }
  
  disabledCreateBotom():boolean{

    if(this.gameSettings.teamsGame.length < 2){
      return true;
    }

    return false;
  }


  createTeam(){
    this.showAddTeam=true;
    this.gameSettings.teamsGame.length
  }

  addTeam(newName:string){
    this.showAddTeam=false;
    this.gameSettings.teamsGame.push({
      nameTeam:newName
    })
    this.newNameTeam="";
  }

  deleteTeam(index:number){
    this.gameSettings.teamsGame.splice(index,1);
  }

  ngOnInit(): void {
  }

  toggleShowConfirmModal(){
    this.showConfirmModal=!this.showConfirmModal;
  }

  confirmGame(){

    if(this.gameSettings.teamsGame.length < 2){
      alert("Es necesario un mínimo de 2 equipos para poder jugar");
    }
    else{
      alert("generate game..")
    }
  }

}
