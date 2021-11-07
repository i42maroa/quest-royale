import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LIST_QUESTS_GAME } from './quests';
import { Quest } from './questDTO.interface';

import { GAME_SETTINGS } from '../services/game-settings';

@Component({
  selector: 'quest-game-quest-box',
  templateUrl: './quest-box.component.html',
  styleUrls: ['./quest-box.component.scss']
})
export class QuestBoxComponent implements OnInit {

  @Output() responseQuestEvent = new EventEmitter<number>();
  @Output() showMapEvent = new EventEmitter<boolean>();
  @Input() teamCurrent:string;
  
  showResults:boolean;
  quest:Quest;
  optionChoosed:number;
  questListNumber:number;

  constructor() { 
    this.teamCurrent = "";
    this.showResults = false;
    this.quest = LIST_QUESTS_GAME[0];
    this.optionChoosed = -1;
    this.questListNumber = 0;
  }


  ngOnInit(): void {
    this.quest = LIST_QUESTS_GAME[this.questListNumber];
    this.startQuestion();
  }

  startQuestion(){
    this.showResults=false;
    this.optionChoosed = -1;
  }

  chooseOption(option:number){
    if(option < GAME_SETTINGS.amountOptionsQuestion && option >= 0){
      this.optionChoosed = option;
    }
  }

  checkResult(){
    this.showResults=true;
  }

  resetQuestion(){
    this.showResults=false;
    this.optionChoosed = -1;
    this.questListNumber = (this.questListNumber + 1) % LIST_QUESTS_GAME.length;
    this.quest = LIST_QUESTS_GAME[this.questListNumber];
  }

  sendResults(){
    if(this.optionChoosed == -1){
      this.responseQuestEvent.emit(0);
    }else if(this.quest.listOptions[this.optionChoosed].isCorrect){
      this.responseQuestEvent.emit(2);
    }else{
      this.responseQuestEvent.emit(0);
    }
  }
}
