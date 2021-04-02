import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private playerService: PlayerService) {}

  get getPlayerOrgName() {
    return this.playerService.player.name;
  }

  get getPlayerMoney() {
    return this.playerService.player.money;
  }

  get getPlayerHype() {
    return this.playerService.player.hype;
  }

  get getPlayerBusinessSize() {
    return this.playerService.player.businessSize;
  }
}
