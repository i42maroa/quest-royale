import { Component, OnInit } from '@angular/core';
import { OptionQuest, Quest } from './questDTO.interface';

@Component({
  selector: 'quest-game-quest-box',
  templateUrl: './quest-box.component.html',
  styleUrls: ['./quest-box.component.scss']
})
export class QuestBoxComponent implements OnInit {

  quest:Quest;
  isOptionSelectedFirst:boolean;
  isOptionSelectedSecond:boolean;
  optionSelectedFirst: OptionQuest;
  optionSelectedSecond: OptionQuest;
  showResults:boolean;

  constructor() { 
    this.quest = {
      titleQuest:"",
      listOptions:[]
    };
    this.optionSelectedFirst = {
      titleOption:"",
      isCorrect:false,
      isSelectByFirstTeam:false,
      isSelectBySecondTeam:false
    }
    this.optionSelectedSecond = {
      titleOption:"",
      isCorrect:false,
      isSelectByFirstTeam:false,
      isSelectBySecondTeam:false
    }
    this.isOptionSelectedFirst=false;
    this.isOptionSelectedSecond=false;
    this.showResults = false;
  }



  ngOnInit(): void {
    this.quest = this.generateQuest();
    
  }


  generateQuest():Quest{
    return  {
      titleQuest:"Cuanto es 1 + 1",
      listOptions: [{
        titleOption:"2",
        isCorrect:false,
        isSelectByFirstTeam:false,
        isSelectBySecondTeam:false
      },{
        titleOption:"7",
        isCorrect:true,
        isSelectByFirstTeam:false,
        isSelectBySecondTeam:false
      },{
        titleOption:"4",
        isCorrect:false,
        isSelectByFirstTeam:false,
        isSelectBySecondTeam:false
      },{
        titleOption:"1",
        isCorrect:false,
        isSelectByFirstTeam:false,
        isSelectBySecondTeam:false
      }]
    }
  }

  selectOption(team:number, option:OptionQuest){
    if(!this.showResults){ 
      switch(team){
        case 0:
          if(this.isOptionSelectedFirst){
            this.optionSelectedFirst.isSelectByFirstTeam = false;
          }
          option.isSelectByFirstTeam = true;
          this.optionSelectedFirst = option;
          this.isOptionSelectedFirst = true;
          break
        case 1:
          if(this.isOptionSelectedSecond){
            this.optionSelectedSecond.isSelectBySecondTeam = false;
          }
          option.isSelectBySecondTeam = true;
          this.optionSelectedSecond = option;
          this.isOptionSelectedSecond = true;
          break;
        default:
      }
    }
  }

  checkResult(){
    this.showResults=true;
  }
}
