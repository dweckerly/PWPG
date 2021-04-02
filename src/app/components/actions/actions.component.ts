import { Component, OnInit } from '@angular/core';
import { ACTIONS } from 'src/app/data/actions.data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actions = ACTIONS;
  activeAction = "Scout";

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  showAction(name: string) {
    this.activeAction = name;
  }

  areRequirementsMet(requirements: any): boolean {
    if(requirements != null && requirements.length > 0) {
      let player = this.playerService.player;
      for(let i = 0; i < requirements.length; i++) {
        if(player[requirements[i].attributeName] < requirements[i].value) {
          return false;
        }
      }
    }
    return true;
  }

}
