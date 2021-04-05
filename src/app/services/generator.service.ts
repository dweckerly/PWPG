import { Injectable } from '@angular/core';

import { ORG_NAMES } from '../data/names/org-names.data';
import { NAMES } from '../data/names/names-english.data';
import { Wrestler } from '../objects/wrestler';
import { MONIKERS } from '../data/names/monikers.data';
import { TIERRANGES } from '../data/tier-ranges.data';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  names = NAMES; 
  monikers = MONIKERS;

  genderChanceThreshold: number = 0.79;
  uniqueWrestlerChance: number = 0.01;
  monikerChance: number = 0.8;
  
  orgDefaultAmount: number = 10;
  wrestlerDeafultAmount: number = 50;

  maxnormalValue = 3;

  generateOrgNames(orgAmount?: number) {
    let orgs: string[] = [];
    let prefixes = ORG_NAMES.prefix;
    let infixes = ORG_NAMES.infix;
    let suffixes = ORG_NAMES.suffix;
    let numberOfNames = this.orgDefaultAmount;
    if(orgAmount !== null && orgAmount > 0) {
      numberOfNames = orgAmount;
    }
    for(let i = 0; i < numberOfNames; i++) {
      let prefixChoice = this.getRandomInt(prefixes.length);
      let orgName = prefixes[prefixChoice] + " ";
      prefixes.splice(prefixChoice, 1);
      let infix = false;
      if(Math.random() > 0.74 && infixes.length > 0) {
        infix = true;
        let infixChoice = this.getRandomInt(infixes.length);
        orgName += infixes[infixChoice] + " ";
        infixes.splice(infixChoice, 1);
      }
      if(infix && Math.random() > 0.49) {
        orgName = orgName.slice(0, -1);
      }
      else {
        orgName += "Wrestling";
      }
      if(Math.random() > 0.49 && suffixes.length > 0) {
        let suffixChoice = this.getRandomInt(suffixes.length);
        orgName += " " + suffixes[suffixChoice];
        suffixes.splice(suffixChoice, 1);
      }
      orgs.push(orgName)
    }
    return orgs;
  }

  generateName(genderInput?: string): string {
    let gender = null;
    if(genderInput !== undefined) {
      gender = genderInput;
    }
    else {
      gender = (Math.random() > this.genderChanceThreshold) ? 'female' : 'male';
    }
    let firstNamesLength = this.names[gender].length;
    let firstNameIndex = this.getRandomInt(firstNamesLength);
    let firstName = this.names[gender][firstNameIndex];
    this.names[gender].splice(firstNameIndex, 1);

    let lastNamesLength = this.names['lastNames'].length;
    let lastNameIndex = this.getRandomInt(lastNamesLength);
    let lastName = this.names['lastNames'][lastNameIndex];
    this.names['lastNames'].splice(lastNameIndex, 1);

    return firstName + " " + lastName;
  }

  generateWrestlers() {
    let wrestlers = [];
    for(let i = 0; i < this.wrestlerDeafultAmount; i++) {
      // get range beased on tier
      let tierIndex = this.getRandomInt(4);
      let tier = TIERRANGES[tierIndex].label;
      let statRange = TIERRANGES[tierIndex].range;
      let modifier = TIERRANGES[tierIndex].modifier;
      let tierStats = [];
      let w = new Wrestler();
      console.log(w);

      // choose 1-3 random stats (may be duplicates)
      tierStats.push(this.getRandomInt(5));
      tierStats.push(this.getRandomInt(5));
      tierStats.push(this.getRandomInt(5));

      // apply tier based ranges
      // apply modifer to other stats
      let stats = [];
      for(let j = 0; j < 6; j++) {
        if(j in tierStats) {
          stats.push(this.getRandomIntRange(statRange[0], statRange[1]));
        }
        else {
          stats.push(this.getRandomInt(this.maxnormalValue) + modifier);
        }
      }
      // set stats
      w.stats.striking = stats[0];
      w.stats.aerial = stats[1];
      w.stats.hardcore = stats[2];
      w.stats.charisma = stats[3];
      w.stats.technical = stats[4];
      w.stats.power = stats[5];

      // generate name
      let max = 0;
      let maxStat = "";
      let moniker = "";

      if(this.monikerChance > Math.random()) {
        if(tier != 'd') {
          if(stats[0] > max) {
            maxStat = "striking";
            max = stats[0];
          }
          if(stats[1] > max) {
            maxStat = "aerial";
            max = stats[1];
          }
          if(stats[2] > max) {
            maxStat = "hardcore";
            max = stats[2];
          }
          if(stats[3] > max) {
            maxStat = "charisma";
            max = stats[3];
          }
          if(stats[4] > max) {
            maxStat = "technical";
            max = stats[4];
          }
          if(stats[5] > max) {
            maxStat = "power";
            max = stats[5];
          }
          let index = this.getRandomInt(this.monikers[maxStat][tier].length);
          moniker = this.monikers[maxStat][tier][index];
          this.monikers[maxStat][tier].splice(index, 1);
        }
        else {
          let index = this.getRandomInt(this.monikers.d.length);
          moniker = this.monikers.d[index];
          this.monikers.d.splice(index, 1);
        }
        let name = this.generateName('male');
        let firstAndLast = name.split(" ");
        let wrestlerName = firstAndLast[0] + " " + moniker + " " + firstAndLast[1];
        w.name = wrestlerName;
      }
      else {
        w.name = this.generateName('male');
      }
      wrestlers.push(w);
    }
    return wrestlers;
  }

  private isUniqueWrestler (): boolean {
    return Math.random() < this.uniqueWrestlerChance ? true : false;
  } 

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
