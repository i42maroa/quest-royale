import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_GAME_SETTINGS, GameModeOptions } from '../services/gameSettings.interface';
import { GameService } from './game.service';
import { DEFAULT_GAME, Game } from './gameDTO.interface';

const NOT_FOUND_RESULT:number = -1;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  game:Game;
  showButtonStart:boolean;
  showMatch:boolean;
  currentMatch:number;
  loadTeams:boolean;
  showMatchFinishedMessage:boolean;
  showNoMatchAvailableMessage:boolean;
  showDetailsMatch:boolean;
  matchStartedPreviously:boolean;

  constructor(private route:ActivatedRoute, private router:Router,
    private _gameService:GameService) { 
      this.game = DEFAULT_GAME;
      this.showButtonStart=false;
      this.showMatch=false
      this.currentMatch = 0;
      this.loadTeams = false;
      this.showNoMatchAvailableMessage = false;
      this.showMatchFinishedMessage = false;
      this.matchStartedPreviously = false;
      this.showDetailsMatch = true;
  }

  ngOnInit(): void {
    let id_game = this.route.snapshot.paramMap.get("id");

    if(id_game == null){
      this.router.navigateByUrl("/generate-game");
    }
    else{
      this._gameService.getGame(id_game).subscribe(game =>{
        this.game = game;
        let matchStart = NOT_FOUND_RESULT;
        
        //Comprueba cual es el match que debe de mostrar ya que la partida puede estar comenzada con anterioridad
        for(let match_index in this.game.match){
          if(this.game.match[match_index].teamWin == null && matchStart == NOT_FOUND_RESULT){
            matchStart=+match_index;
          }
        }

        //Comprueba si el match ya se encuentra iniciado con anterioridad
        if(this.game.match[this.currentMatch].rounds.length > 0){
          this.matchStartedPreviously=true;
        }
        
        this.showButtonStart=true;

        //No hay match disponibles ya que se han realizado todos
        if(matchStart == NOT_FOUND_RESULT){
          this.showNoMatchAvailableMessage = true;
          this.showDetailsMatch = false;
          
        }
        this.currentMatch = matchStart;   
        this.loadTeams = true;
      },
      _ => this.router.navigateByUrl("/generate-game") //Error al encontrar el match se devuelve al generador de juegos
      )
    }
  }

  startMatch(){
  }

  toggleShowMatch(){
    this.showMatch = !this.showMatch;
    this.showMatchFinishedMessage = false;
  }

  toggleShowDetailsMatch(){
    this.showDetailsMatch = !this.showDetailsMatch;
  }

  

  finishMatch(teamWin:number){
    this.game.match[this.currentMatch].rounds.push({teamWin})
    this.game.match[this.currentMatch].teamWin = teamWin;
    this.showMatch = false;

    let flag = false;

    //Si hay match posteriores, meteremos al equipo dentro de ellas
    for(let i=this.currentMatch;i<this.game.match.length;i++){
      if(!flag){
        for (let team_index in this.game.match[i].teamsToPlay){
          if(this.game.match[i].teamsToPlay[team_index] == -1){
            this.game.match[i].teamsToPlay[team_index]=this.game.match[this.currentMatch].teamsToPlay[teamWin];
            flag=true;
            break;
          }
        }
      }     
    }
    this.currentMatch++;
    if(this.currentMatch >= this.game.match.length){
      alert("Game finish");
      this.game.teamWin=this.game.match[this.currentMatch-1].teamsToPlay[teamWin];
      this.showNoMatchAvailableMessage=true;
    }

    this._gameService.modifyGame(this.game).subscribe(_ => { 
      
     
    }
     );
  }

  finishRound(teamWin:number){
    this.game.match[this.currentMatch].rounds.push({teamWin})
    this._gameService.modifyGame(this.game).subscribe(res => console.log(res));
  }
}
