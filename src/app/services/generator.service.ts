import { Injectable } from '@angular/core';

import { ORG_NAMES } from '../data/names/org-names.data';
import { NAMES } from '../data/names/names-english.data';
import { Wrestler } from '../objects/wrestler';
import { MONIKERS } from '../data/names/monikers.data';
import { TIERRANGES } from '../data/tier-ranges.data';
import { STATS } from '../data/stats.data';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  names = NAMES; 
  monikers = MONIKERS;

  genderChanceThreshold: number = 0.79;
  uniqueWrestlerChance: number = 0.01;
  monikerChance: number = 0.8;
  goesByMonikerChance: number = 0.2;
  
  orgDefaultAmount: number = 10;

  tiers = ['s', 'a', 'b', 'c'];
  stats = STATS;

  maxNormalValue = 4;

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
    // generate wrestler for each moniker in tiers s through c
    for(let i = 0; i < this.tiers.length; i++) {
      for(let j = 0; j < this.stats.length; j++) {
        let tier = this.tiers[i];
        let maxStat = this.stats[j];
        while(this.monikers[maxStat][tier].length > 0) {
          let index = this.getRandomInt(this.monikers[maxStat][tier].length)
          let moniker = this.monikers[maxStat][tier][index];
          this.monikers[maxStat][tier].splice(index, 1);
          let wrestlerName = "";
          if(Math.random() < this.goesByMonikerChance) {
            wrestlerName = moniker;
          }
          else {
            let name = this.generateName('male');
            let firstAndLast = name.split(" ");
            wrestlerName = firstAndLast[0] + " '" + moniker + "' " + firstAndLast[1];
          }
          let w = new Wrestler();
          w.name = wrestlerName;
          // generate stats
          wrestlers.push(w);
        }
      }
    }
    // generate wrestler for each moniker in tier d
    while(this.monikers.d.length > 0) {
      let index = this.getRandomInt(this.monikers.d.length)
      let moniker = this.monikers.d[index];
      this.monikers.d.splice(index, 1);
      let wrestlerName = "";
      if(Math.random() < this.goesByMonikerChance) {
        wrestlerName = moniker;
      }
      else {
        let name = this.generateName('male');
        let firstAndLast = name.split(" ");
        wrestlerName = firstAndLast[0] + " '" + moniker + "' " + firstAndLast[1];
      }
      let w = new Wrestler();
      w.name = wrestlerName;
      // generate stats
      wrestlers.push(w);
    }
    // generate wrestlers with no moniker

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
