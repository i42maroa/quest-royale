import { Component, Input, OnInit } from '@angular/core';
import { OptionQuest } from '../questDTO.interface';


enum TeamChosing{
  FIRST_TEAM,
  SECOND_TEAM
}

@Component({
  selector: 'option-quest-game-quest',
  templateUrl: './option-quest.component.html',
  styleUrls: ['./option-quest.component.scss']
})
export class OptionQuestComponent implements OnInit {

  @Input() optionQuest:OptionQuest;
  @Input() showResults:boolean;

  constructor() {
    this.optionQuest = {
      titleOption:"",
      isCorrect:false,
      isSelectByFirstTeam:false,
      isSelectBySecondTeam:false
    }
    this.showResults=false;
   }

  ngOnInit(): void {
  }

}
