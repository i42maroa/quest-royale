import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from 'src/app/team/teamDTO.interface';
import { Match } from '../match/matchDTO.interface';
import { GameModeOptions, GameSettings } from '../services/gameSettings.interface';
import { Game } from './gameDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }


  getGame(id:string){
    return this.http.get<Game>('http://localhost:3000/game/' + id);
  }

  createNewGame(game:Game){
    return this.http.post<Game>('http://localhost:3000/game', game);
  }

  createNewGameWithSettings(gameSettings:GameSettings, teams:Team[]){
    let game:Game ={
        gameSettings,
        match:this.generateMatchs(teams, gameSettings.gameMode),
        teams
    }

    return this.http.post<Game>('http://localhost:3000/game', game);
  }

  modifyGame(game:Game){
    return this.http.put('http://localhost:3000/game/' + game.id, game);
  }

  generateMatchs(teams:Team[], gameMode:GameModeOptions):Match[]{
      let matchs:Match[] = [];
      
      switch(gameMode){
          case GameModeOptions.REY_PISTA:
            let m:Match = { rounds:[], teamsToPlay:[] }
          
            for(let team_index in teams){
              m.teamsToPlay.push(+team_index);
            }

            matchs.push(m);
          break;

          case GameModeOptions.TOURNAMENT:
            let match:Match={
              rounds:[],
              teamsToPlay:[],  
            };
            //Hay que formar el bracket del torneo
            switch(teams.length){            
              case 2:
                matchs.push({ rounds:[], teamsToPlay:[0,1] });
                break;
              case 3:
                matchs.push({ rounds:[], teamsToPlay:[0,1,2]});
                break;

              case 4:
                matchs.push({ rounds:[], teamsToPlay:[0,2] });
                matchs.push({ rounds:[], teamsToPlay:[1,3] });
                matchs.push({ rounds:[], teamsToPlay:[-1,-1] });
                break;
              case 5:
                matchs.push({ rounds:[], teamsToPlay:[0,2,4]});
                matchs.push({ rounds:[], teamsToPlay:[1,3]});
                break;
              case 6:
                matchs.push({ rounds:[], teamsToPlay:[0,2,4]});
                matchs.push({ rounds:[], teamsToPlay:[1,3,5]});
                break;
              case 7:
                matchs.push({ rounds:[], teamsToPlay:[0,3,6]});
                matchs.push({ rounds:[], teamsToPlay:[1,4]});
                matchs.push({ rounds:[], teamsToPlay:[2,5]});
                break;
              case 8:
                matchs.push({ rounds:[], teamsToPlay:[0,4]});
                matchs.push({ rounds:[], teamsToPlay:[1,5]});
                matchs.push({ rounds:[], teamsToPlay:[2,6]});
                matchs.push({ rounds:[], teamsToPlay:[3,7]});
                break;
              case 9:
                matchs.push({ rounds:[], teamsToPlay:[0,4,8]});
                matchs.push({ rounds:[], teamsToPlay:[1,5]});
                matchs.push({ rounds:[], teamsToPlay:[2,6]});
                matchs.push({ rounds:[], teamsToPlay:[3,7]});
                break; 
              case 10:
                matchs.push({ rounds:[], teamsToPlay:[0,4,8]});
                matchs.push({ rounds:[], teamsToPlay:[1,5,9]});
                matchs.push({ rounds:[], teamsToPlay:[2,6]});
                matchs.push({ rounds:[], teamsToPlay:[3,7]});
                break;  
              case 11:
                matchs.push({ rounds:[], teamsToPlay:[0,4,8]});
                matchs.push({ rounds:[], teamsToPlay:[1,5,9]});
                matchs.push({ rounds:[], teamsToPlay:[2,6,10]});
                matchs.push({ rounds:[], teamsToPlay:[3,7]});
                break; 
              case 12:
                matchs.push({ rounds:[], teamsToPlay:[0,4,8]});
                matchs.push({ rounds:[], teamsToPlay:[1,5,9]});
                matchs.push({ rounds:[], teamsToPlay:[2,6,10]});
                matchs.push({ rounds:[], teamsToPlay:[3,7,11]});
                break; 
            }         
      }   
      return matchs;
  }
}
