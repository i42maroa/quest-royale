import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestGameComponent } from './quest-game.component';
import { MapComponent } from './map/map.component';
import { QuestBoxComponent } from './quest-box/quest-box.component';
import { PlayersComponent } from './players/players.component';
import { MarkerComponent } from './marker/marker.component';
import { QuestGameRoutingModule } from './quest-game-routing.module';
import { QuestComponent } from './quest-box/quest/quest.component';
import { GeneratedGameComponent } from './generated-game/generated-game.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    QuestGameComponent,
    MapComponent,
    QuestBoxComponent,
    PlayersComponent,
    MarkerComponent,
    QuestComponent,
    GeneratedGameComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    QuestGameRoutingModule    
  ]
})
export class QuestGameModule { }
