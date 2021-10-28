export interface OptionQuest{
    titleOption:string,
    isCorrect?:boolean
}

export interface Quest{
    titleQuest:string,
    listOptions:OptionQuest[]
}