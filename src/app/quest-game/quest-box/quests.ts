import { Quest, OptionQuest } from "./questDTO.interface";

export const LIST_QUESTS_GAME: Quest[] = [{
        titleQuest:"Cuanto es 1 + 1",
        listOptions: [{
          titleOption:"2",
          isCorrect:false
        },{
          titleOption:"7",
          isCorrect:true
        },{
          titleOption:"4",
          isCorrect:false
        },{
          titleOption:"1",
          isCorrect:false
        }]     
}]