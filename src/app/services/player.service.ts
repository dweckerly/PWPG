import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../objects/player';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  name: string;
  money: number;
  hype: number;
  businessSize: number;
  
  playerObjectChange: Subject<Player> = new Subject<Player>();  

  constructor(private localStorageService: LocalStorageService) {
    this.playerObjectChange.subscribe(value => {
      this.name = value.name;
      this.money = value.money;
      this.hype = value.hype;
      this.businessSize = value.businessSize;
    });
  }

  updatePlayerObject(player: Player) {
    this.playerObjectChange.next(player);
    this.localStorageService.set("player", player);
  }
}
