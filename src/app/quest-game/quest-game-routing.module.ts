import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GeneratedGameComponent } from './generated-game/generated-game.component';

import { MatchComponent } from './match/match.component';


const routes: Routes = [
 
  { path: 'generate-game', component: GeneratedGameComponent },
  { path: 'quest-game/:id', component: GameComponent },
  { path: '**', redirectTo:'generate-game', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class QuestGameRoutingModule { }
