import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PlayerService } from './player.service'
import { AppComponent } from './app.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { ListComponent } from './player-info/list/list.component';
import { AddPlayerComponent } from './player-info/add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerInfoComponent,
    ListComponent,
    AddPlayerComponent,
    PlayerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
