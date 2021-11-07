import { GameModeOptions, GameSettings } from "src/app/quest-game/services/gameSettings.interface";

export const GAME_SETTINGS: GameSettings = {
    amountBoxRoad:10,
    amountOptionsQuestion:4,
    amountRoundToWin:2,
    amountTeamsToPlay:2,
    easyQuestions:true,
    mediumQuestions:true,
    dificultQuestions:false,
    specialQuestions:false,
    gameMode:GameModeOptions.REY_PISTA,
    teamsGame:[{
            nameTeam: "locuelos"
          },{
            nameTeam: "gigantes nobles"
          }]
}