import { Component, OnInit } from '@angular/core';
import {Player} from '../../player';
import {PlayerService} from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(
      private _ps:PlayerService,
      private _router: Router
  ) { }

  player = new Player()

    create(player) {
        this._ps.create(player).subscribe(
            (success) => {success},
            (err) => {console.error(err)}
        )
        this._router.navigate(['players', 'list']);
    }





  ngOnInit() {
  }

}
