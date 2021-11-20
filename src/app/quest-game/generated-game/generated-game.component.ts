import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/team/team.service';
import { Team } from 'src/app/team/teamDTO.interface';
import { GameService } from '../game/game.service';
import { Unit } from '../quest-box/questDTO.interface';
import { DEFAULT_GAME_SETTINGS, GameModeOptions, GameSettings, RoundSelectOptions, SizeMap } from '../services/gameSettings.interface';


@Component({
  selector: 'app-generated-game',
  templateUrl: './generated-game.component.html',
  styleUrls: ['./generated-game.component.scss']
})
export class GeneratedGameComponent implements OnInit {

  gameSettings:GameSettings;

  showAddTeam:boolean;
  newNameTeam:string;
  sizeMapSelectOptions:SizeMap[];
  roundSelectOptions:string[];
  gameModeOptions:GameModeOptions[];
  typeRoundSelected:string;
  sizeMapSelected:string;

  teamsGame:Team[];

  showConfirmModal:boolean;

  constructor(private _teamService:TeamService, private _gameService:GameService,
     private router: Router) { 
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
    this.sizeMapSelectOptions = [SizeMap.SMALL, SizeMap.MEDIUM, SizeMap.LARGE];

    this.sizeMapSelected = this.sizeMapSelectOptions[1];
    this.typeRoundSelected=this.roundSelectOptions[1];

    this.gameSettings = DEFAULT_GAME_SETTINGS;
    this.showConfirmModal=false;
    this.teamsGame=[];
  }

  ngOnInit(): void {
  }

  
  disabledCreateBotom():boolean{
    if(this.teamsGame.length < 2){
      return true;
    }
    return false;
  }

  createTeam(){
    this.showAddTeam=true;
    this.teamsGame.length
  }

  addTeam(newName:string){
    this.showAddTeam=false;
    this.teamsGame.push({
      nameTeam:newName
    })
    this.newNameTeam="";
  }

  deleteTeam(index:number){
    this.teamsGame.splice(index,1);
  }

  toggleShowConfirmModal(){
    this.showConfirmModal=!this.showConfirmModal;
  }

  confirmGame(){
    if( this.teamsGame.length < 2){
      alert("Es necesario un mínimo de 2 equipos para poder jugar");
    }
    else{ 

      //Transformamos la opcion de entrada en el numero de rondas
      switch(this.typeRoundSelected){
        case  RoundSelectOptions.UNIQUE:
          this.gameSettings.amountRoundToWin = 1;
          break;
        case  RoundSelectOptions.BEST_OF_THREE:
          this.gameSettings.amountRoundToWin = 2;
          break;
        case  RoundSelectOptions.BEST_OF_FIVE:
          this.gameSettings.amountRoundToWin = 3;
          break;  
        default:
            this.gameSettings.amountRoundToWin = 2;
      }


      switch(this.sizeMapSelected){
        case  SizeMap.SMALL:
          this.gameSettings.amountBoxRoad = 10;
          break;
        case  SizeMap.MEDIUM:
          this.gameSettings.amountBoxRoad = 15;
          break;
        case  SizeMap.LARGE:
          this.gameSettings.amountBoxRoad = 20;
          break;  
        default:
            this.gameSettings.amountBoxRoad = 15;
      }

      this._gameService.createNewGameWithSettings(this.gameSettings, this.teamsGame)
        .subscribe(game => this.router.navigateByUrl("/quest-game/" + game.id));             
    }
  }

}
