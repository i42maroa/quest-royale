import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { QuestGameComponent } from './quest-game.component';
import { MapComponent } from './map/map.component';
import { QuestBoxComponent } from './quest-box/quest-box.component';
import { PlayersComponent } from './players/players.component';
import { MarkerComponent } from './marker/marker.component';
import { QuestGameRoutingModule } from './quest-game-routing.module';
import { OptionQuestComponent } from './quest-box/option-quest/option-quest.component';
import { GeneratedGameComponent } from './generated-game/generated-game.component';
import { BoxComponent } from './map/box/box.component';
import { RoadComponent } from './map/road/road.component';
import { MatchComponent } from './match/match.component';
import { MapService } from './map/map.service';
import { QuestService } from './quest-box/quest.service';
import { GameComponent } from './game/game.component';
import { MarkerService } from './marker/marker.service';
import { MatchService } from './match/match.service';
import { GameService } from './game/game.service';


@NgModule({
  declarations: [
    QuestGameComponent,
    MapComponent,
    QuestBoxComponent,
    PlayersComponent,
    MarkerComponent,
    OptionQuestComponent,
    GeneratedGameComponent,
    BoxComponent,
    RoadComponent,
    MatchComponent,
    GameComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    QuestGameRoutingModule    
  ],
  providers:[
    MapService,
    QuestService,
    MarkerService,
    MatchService,
    GameService
  ]
})
export class QuestGameModule { }
