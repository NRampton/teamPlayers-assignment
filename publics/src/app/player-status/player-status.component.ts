import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
    players: any= [];
    num = '1';
  constructor(
      private _ps: PlayerService,
      private _route:ActivatedRoute,
      private _router: Router
  ) {
      this._route.paramMap.subscribe( params =>{
          this.num = params.get('num');
      } )
  }

  ngOnInit() {
    this._ps.getAll().subscribe(
        (players) => {this.players = players.json()},
        (err) => {console.error(err)},
        () => {console.log("Yay! We're done!")}
    )
  }
  changeStatus(id, game, status){
      let games = {}
      games[game] = status
      this._ps.update(id, games).subscribe(
        (players) => {this.players = players.json()},
        (err) => {console.error(err)},
        () => {console.log("Yay! We're done!")}
    )
    this._ps.getAll().subscribe(
        (players) => {this.players = players.json()},
        (err) => {console.error(err)},
        () => {console.log("Yay! We're done!")}
    )
    }

  shiftPage(num) {
      this._router.navigate(['game', num])
  }
}
