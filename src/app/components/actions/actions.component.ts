import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ACTIONS } from 'src/app/data/actions.data';
import { ActionService } from 'src/app/services/action.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actions = ACTIONS;
  activeAction = "Scout";
  activePurchaseCategory = "*"

  constructor(private playerService: PlayerService, private router: Router, private actionService: ActionService) { }

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

  hasEnoughMoney(cost) {
    if(cost != null) {
      let money = cost.money;
      if(money != null && money > 0) {
        let player = this.playerService.player;
        if(player.money < money) {
          return false;
        }
      }
    }
    return true;
  }

  isOptionAPurchase(category: string): boolean {
    if(category != null) {
      return true;
    }
    return false;
  }

  sortPurcahaseItemsByCategory(category:string) {
    this.activePurchaseCategory = category;
  }

  actionBtnClick(action) {
    if(action.name === 'Scout') {
      this.router.navigateByUrl('/scout');
    }
    else if(action.name === 'Book') {

    }
    else if(action.name === 'Promote') {

    }
    else if(action.name === 'Hire') {

    }
    else if(action.name === 'Purchase') {

    }
  }

  scoutAction(action) {

  }
}
