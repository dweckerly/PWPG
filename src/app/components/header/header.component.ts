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
    return this.playerService.name;
  }

  get getPlayerMoney() {
    return this.playerService.money;
  }

  get getPlayerHype() {
    return this.playerService.hype;
  }

  get getPlayerBusinessSize() {
    return this.playerService.businessSize;
  }
}
