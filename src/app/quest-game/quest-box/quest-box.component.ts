import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LIST_QUESTS_GAME } from './quests';
import { Quest } from './questDTO.interface';

import { GAME_SETTINGS } from '../service/game-settings';

@Component({
  selector: 'quest-game-quest-box',
  templateUrl: './quest-box.component.html',
  styleUrls: ['./quest-box.component.scss']
})
export class QuestBoxComponent implements OnInit {

  @Output() responseQuestEvent = new EventEmitter<boolean>();

  showResults:boolean;
  quest:Quest;
  optionChoosed:number;

  constructor() { 
    this.showResults = false;
    this.quest = LIST_QUESTS_GAME[0];
    this.optionChoosed = -1;
  }


  ngOnInit(): void {
    this.quest = LIST_QUESTS_GAME[0];
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

    if(this.optionChoosed == -1){
      this.responseQuestEvent.emit(false);
    }else if(this.quest.listOptions[this.optionChoosed]){
      this.responseQuestEvent.emit(true);
    }else{
      this.responseQuestEvent.emit(false);
    }
  }

}
