import { Team } from "src/app/team/teamDTO.interface";
import { Unit } from "../quest-box/questDTO.interface";

export interface GameSettings{
    amountBoxRoad:number,
    amountRoundToWin:number,
    //amountTeamsToPlay:number,
    //unit1:boolean,
    //unit2:boolean,
    easyQuestions:boolean,
    mediumQuestions:boolean,
    dificultQuestions:boolean,
    gameMode:GameModeOptions
}


export enum RoundSelectOptions{
    UNIQUE = "unique",
    BEST_OF_THREE = "Best of three",
    BEST_OF_FIVE = "Best of five"
}

export enum SizeMap{
    SMALL ="Small",
    MEDIUM = "Medium",
    LARGE = "Large"
}


export enum GameModeOptions{
    REY_PISTA="Rey de la pista",
    TOURNAMENT="Tournament"  
}

export const DEFAULT_GAME_SETTINGS:GameSettings = {
    amountBoxRoad:10,
    amountRoundToWin:2,
    // unit1:false,
    // unit2:false,
    easyQuestions:true,
    mediumQuestions:true,
    dificultQuestions:true,
    gameMode:GameModeOptions.TOURNAMENT
}