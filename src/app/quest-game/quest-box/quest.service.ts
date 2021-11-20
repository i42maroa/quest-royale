import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Difficulty, Quest, QuestList, Unit } from './questDTO.interface';


@Injectable({
  providedIn: 'root'
})
export class QuestService {

  questListGame:Quest[];
  currentQuest:number;
  optionChoosed:number;

  constructor(private http:HttpClient) { 
    this.currentQuest=0;
    this.optionChoosed = -1;
    this.questListGame = [];
  }

  getQuestList():Observable<QuestList[]>{
    return this.http.get<QuestList[]>('../../../assets/quests//list_quests.json');
  }

  getPointOfDifficulty(difficulty:Difficulty):number{
      switch(difficulty){
        case Difficulty.EASY:
          return 1;
        case Difficulty.MEDIUM:
          return 2;
        case Difficulty.HARD:
          return 3;
        default:
          return 0;
      }
  }
}
