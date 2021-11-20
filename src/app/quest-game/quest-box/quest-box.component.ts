import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DEFAULT_QUEST, Difficulty, Quest, Unit } from './questDTO.interface';
import { QuestService } from './quest.service';
import { DEFAULT_GAME_SETTINGS, GameSettings } from '../services/gameSettings.interface';

@Component({
  selector: 'quest-game-quest-box',
  templateUrl: './quest-box.component.html',
  styleUrls: ['./quest-box.component.scss']
})
export class QuestBoxComponent implements OnInit {

  @Input() matchSettings:GameSettings
  @Output() responseQuestEvent = new EventEmitter<number>();
  @Output() showMapEvent = new EventEmitter<boolean>();
  @Input() teamCurrent:string;
  
  showResults:boolean;
  quest:Quest;
  currentQuest:number;
  optionChoosed:number;
  
  questList:Quest[];

  constructor(private _questService:QuestService) { 
    this.teamCurrent = "";
    this.showResults = false;
    this.matchSettings = DEFAULT_GAME_SETTINGS;
    this.quest = DEFAULT_QUEST;
    this.optionChoosed = -1;
    this.currentQuest = 0;
    this.questList=[];
  }

  ngOnInit(): void {
    this._questService.getQuestList().subscribe(
      questList =>{
        console.log(questList);
        for(let units of questList){
          for(let quest of units.questsList){         
            //Introducimos al listado de preguntas aquellas que tengan la dificultad seleccionada
            if(this.matchSettings.easyQuestions && quest.difficulty == Difficulty.EASY){
              this.questList.push(quest);
            }
            if(this.matchSettings.mediumQuestions && quest.difficulty == Difficulty.MEDIUM){
              this.questList.push(quest);
            }
            if(this.matchSettings.dificultQuestions && quest.difficulty == Difficulty.HARD){
              this.questList.push(quest);
            }         
          }
        }
        console.log("start")
        this.startQuestion();
      }
    );
  }

  startQuestion(){
    this.resetQuest();
    this.quest = this.questList[this.currentQuest];
  }

  chooseOption(option:number){
    if(option < this.quest.listOptions.length && option >= 0 && this.showResults == false){
      this.optionChoosed = option;
    }
  }

  checkResult(){
    this.showResults=true;  
  }

  nextQuest(){
    this.currentQuest = (this.currentQuest + 1) % this.questList.length;
    this.quest = this.questList[this.currentQuest];
    this.resetQuest();
  }

  resetQuest(){
    this.showResults=false;
    this.optionChoosed = -1;
  }


  sendResults(){
    if(this.optionChoosed == -1){
      this.responseQuestEvent.emit(0);
    }else if(this.quest.listOptions[this.optionChoosed].isCorrect){
      this.responseQuestEvent.emit(this._questService.getPointOfDifficulty(this.quest.difficulty));
    }else{
      this.responseQuestEvent.emit(0);
    }
    this.nextQuest();
  }
}
