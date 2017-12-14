import { Injectable } from '@angular/core';
import { Player } from './player';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  getAll() {
      return this._http.get('/players');
  }

  create(player: Player) {
      return this._http.post('/players', player);
  }
  update(_id, games) {
      return this._http.put('/players/' + _id, games)
  }

  destroy(_id) {
      return this._http.delete('/players/' + _id);
  }
}
