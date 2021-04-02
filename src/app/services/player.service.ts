import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../objects/player';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Player;
  
  playerObjectChange: Subject<Player> = new Subject<Player>();  

  constructor(private localStorageService: LocalStorageService) {
    this.player = this.localStorageService.get("player");
    this.playerObjectChange.subscribe(value => {
      if(value != null) {
        this.player = new Player(value.name, value.money, value.hype, value.businessSize);
      }
    });
  }

  updateMoney(amount:number) {
    let newMoney = this.player.money + amount
    this.updatePlayerObject(new Player(this.player.name, newMoney, this.player.hype, this.player.businessSize))
  }

  updatePlayerObject(player: Player) {
    this.playerObjectChange.next(player);
    this.localStorageService.set("player", player);
    this.player = player;
  }
}
