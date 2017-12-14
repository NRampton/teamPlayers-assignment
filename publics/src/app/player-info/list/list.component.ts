import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    players: any= [];

  constructor(private _ps: PlayerService) { }

  ngOnInit() {
      this._ps.getAll().subscribe(
          (players) => {this.players = players.json()},
          (err) => {console.error(err)},
          () => {console.log("Yay! We're done!")}
      )
  }

  delete(id) {
      this._ps.destroy(id).subscribe(
          (success) => {success},
          (err) => {console.error(err)}
      )
      this._ps.getAll().subscribe(
          (players) => {this.players = players.json()},
          (err) => {console.error(err)},
          () => {console.log("Yay! We're done!")}
      )
  }

}
