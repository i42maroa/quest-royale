import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestGameComponent } from './quest-game.component';
import { MapComponent } from './map/map.component';
import { QuestsComponent } from './quests/quests.component';
import { PlayersComponent } from './players/players.component';
import { MarkerComponent } from './marker/marker.component';
import { QuestGameRoutingModule } from './quest-game-routing.module';

@NgModule({
  declarations: [
    QuestGameComponent,
    MapComponent,
    QuestsComponent,
    PlayersComponent,
    MarkerComponent
  ],
  imports: [
    CommonModule,
    QuestGameRoutingModule    
  ]
})
export class QuestGameModule { }
