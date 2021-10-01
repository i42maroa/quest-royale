export interface OptionQuest{
    titleOption:string,
    isCorrect:boolean,
    isSelectByFirstTeam:boolean,
    isSelectBySecondTeam:boolean
}


export interface Quest{
    titleQuest:string,
    listOptions:OptionQuest[]
}