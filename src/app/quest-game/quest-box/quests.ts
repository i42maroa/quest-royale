import { Quest, OptionQuest } from "./questDTO.interface";

export const LIST_QUESTS_GAME: Quest[] = [{
        titleQuest:"Cuanto es 1 + 1",
        listOptions: [{
          titleOption:"2"
        },{
          titleOption:"7",
          isCorrect:true
        },{
          titleOption:"4"
        },{
          titleOption:"1"
        },
      ]},{
        titleQuest:"Quien es el tío mas mochuelo que conoces",
        listOptions: [{
          titleOption:"Jesusito",
          isCorrect:true
        },{
          titleOption:"Anselmo"
        },{
          titleOption:"Carlitos"
        },{
          titleOption:"Antonio"
        },
      ]}
      ,{
        titleQuest:"Cual es el personaje mas guapete de los serrano",
        listOptions: [{
          titleOption:"Guille",
          isCorrect:true
        },{
          titleOption:"Fiti"
        },{
          titleOption:"Curro"
        },{
          titleOption:"Diego"
        },
      ]}
]