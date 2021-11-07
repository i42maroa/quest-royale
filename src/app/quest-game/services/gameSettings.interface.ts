import { Team } from "src/app/team/teamDTO.interface";

export interface GameSettings{
    amountBoxRoad:number,
    amountOptionsQuestion:number,
    amountRoundToWin:number,
    amountTeamsToPlay:number,
    easyQuestions:boolean,
    mediumQuestions:boolean,
    dificultQuestions:boolean,
    specialQuestions:boolean,
    gameMode:GameModeOptions,
    teamsGame:Team[]
}

export enum RoundSelectOptions{
    UNIQUE = "unique",
    BEST_OF_THREE = "Best of three",
    BEST_OF_FIVE = "Best of five"
}


export enum GameModeOptions{
    REY_PISTA="Rey de la pista",
    TOURNAMENT="Tournament"  
}