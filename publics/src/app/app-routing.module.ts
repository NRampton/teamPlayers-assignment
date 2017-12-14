import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerInfoComponent } from './player-info/player-info.component';
    import { ListComponent } from './player-info/list/list.component';
    import { AddPlayerComponent } from './player-info/add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'players/list'},
    { path: 'players', component: PlayerInfoComponent, children: [
        { path: 'list', component: ListComponent},
        { path: 'add-player', component: AddPlayerComponent}
    ] },
    { path: 'game', pathMatch: 'full', redirectTo: '/game/1'},
    { path: 'game/:num', component: PlayerStatusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
