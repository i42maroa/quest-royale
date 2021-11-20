import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {QuestGameModule} from './quest-game/quest-game.module';
import { TeamModule } from './team/team.module';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'
import { TeamService } from './team/team.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    QuestGameModule,
    TeamModule,
    HttpClientModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
