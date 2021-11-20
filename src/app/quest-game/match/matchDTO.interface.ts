import { Team } from "src/app/team/teamDTO.interface";



export interface Match{
    id?:number;
    teamsToPlay:number[];
    teamWin?:number;
    rounds:Round[]
}

export interface Round{
    id?:number;
    teamWin:number
}