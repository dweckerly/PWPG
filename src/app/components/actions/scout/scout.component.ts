import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { GeneratorService } from 'src/app/services/generator.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActionsComponent } from '../actions.component';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.scss']
})
export class ScoutComponent implements OnInit {
  action: any = this.getAction;
  wrestlers = [];
  constructor(private actionService: ActionService, private localStorgae: LocalStorageService, private generatorService: GeneratorService) {}

  ngOnInit(): void {
    // get wrestlers already set to this location
    if(this.localStorgae.get(this.action.name))
      this.wrestlers = this.localStorgae.get(this.action.name);
    let desiredAmount = this.generatorService.getRandomInt(this.action.generativeParams.maxAmount)
    let currentAmount = this.wrestlers.length;
    while(currentAmount > desiredAmount) {
      this.wrestlers.splice(this.generatorService.getRandomInt(this.wrestlers.length), 1);
      currentAmount = this.wrestlers.length;
    }
    // need to account for duplication...
    if(currentAmount < desiredAmount) {
      let storedWrestlers = this.localStorgae.get("wrestlers");
      while(currentAmount < desiredAmount) {
        let tierIndex = this.generatorService.getRandomInt(this.action.generativeParams.tiers.length);
        let tier = this.action.generativeParams.tiers[tierIndex];
        let maxRand = storedWrestlers[tier].length;
        this.wrestlers.push(storedWrestlers[tier][this.generatorService.getRandomInt(maxRand)]);
        currentAmount = this.wrestlers.length;
      }
    }
    this.localStorgae.set(this.action.name, this.wrestlers);
  }

  get getAction() {
    return this.actionService.currentAction;
  }
}
