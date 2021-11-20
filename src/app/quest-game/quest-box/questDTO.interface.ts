export interface OptionQuest{
    titleOption:string,
    isCorrect?:boolean
}

export interface Quest{
    titleQuest:string,
    unit:Unit,
    difficulty:Difficulty,
    listOptions:OptionQuest[]
}



export interface QuestList{
    id:string
    questsList:Quest[];
}


export enum Difficulty{
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD"
}

export enum Unit{
    U1 = "U1", 
    U2 = "U2", 
    U3 = "U3", 
    U4 = "U4", 
    U5 = "U5", 
    U6 = "U6"
}

export const DEFAULT_QUEST:Quest = {
    titleQuest:"",    
    unit:Unit.U1,
    difficulty:Difficulty.EASY,
    listOptions:[]
  };