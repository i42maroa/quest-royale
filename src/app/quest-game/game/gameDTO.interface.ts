import { Team } from "src/app/team/teamDTO.interface";
import { Match } from "../match/matchDTO.interface";
import { DEFAULT_GAME_SETTINGS, GameSettings } from "../services/gameSettings.interface";

export interface Game{
    id?:number;
    gameSettings:GameSettings;
    match:Match[]
    teamWin?:number;
    teams:Team[]
}

export const DEFAULT_GAME:Game = {
    gameSettings:DEFAULT_GAME_SETTINGS,
    match:[],
    teams:[]
  }