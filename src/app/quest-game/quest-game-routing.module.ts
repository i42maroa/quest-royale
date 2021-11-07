import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratedGameComponent } from './generated-game/generated-game.component';

import { MatchComponent } from './match/match.component';


const routes: Routes = [
  { path: 'quest-game', component: MatchComponent },
  { path: 'generate-game', component: GeneratedGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class QuestGameRoutingModule { }
