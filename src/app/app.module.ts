import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {QuestGameModule} from './quest-game/quest-game.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
