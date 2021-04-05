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
  monikerChance: number = 0.8;
  goesByMonikerChance: number = 0.2;
  
  orgDefaultAmount: number = 10;

  tiers = ['s', 'a', 'b', 'c'];
  stats = STATS;

  maxNormalValue = 4;

  ageModifier = 2;

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
    let wrestlers = {s:[], a:[], b:[], c:[], d:[]};
    for(let i = 0; i < this.tiers.length; i++) {
      for(let j = 0; j < this.stats.length; j++) {
        let tier = this.tiers[i];
        let maxStat = this.stats[j];
        while(this.monikers[maxStat][tier].length > 0) {
          let w = new Wrestler();
          w.name = this.generateNameWithMoniker(tier, maxStat);
          this.generateStats(w, tier, maxStat);
          this.generateAge(w);
          this.generateHeightAndWeight(w);
          wrestlers[tier].push(w);
        }
      }
    }
    while(this.monikers.d.length > 0) {
      let w = new Wrestler();
      w.name = this.generateNameWithMoniker('d');
      this.generateStats(w, 'd');
      this.generateAge(w);
      this.generateHeightAndWeight(w);
      wrestlers.d.push(w);
    }
    // generate wrestlers with no moniker
    let totalWrestlers = wrestlers.s.length + wrestlers.a.length + wrestlers.b.length + wrestlers.c.length + wrestlers.d.length
    let amount = Math.floor(totalWrestlers / 5)
    while(amount > 0) {
      let w = new Wrestler();
      w.name = this.generateName('male');
      let tiers = this.tiers;
      tiers.push('d');
      let tier = tiers[amount % tiers.length];
      this.generateStats(w, tier);
      this.generateAge(w);
      this.generateHeightAndWeight(w);
      wrestlers[tier].push(w);
      amount--;
    } 
    return wrestlers;
  }

  private generateNameWithMoniker(tier: string, maxStat?: string) {
    let moniker = "";
    if(maxStat) {
      let index = this.getRandomInt(this.monikers[maxStat][tier].length)
      moniker = this.monikers[maxStat][tier][index];
      this.monikers[maxStat][tier].splice(index, 1);
    }
    else {
      let index = this.getRandomInt(this.monikers[tier].length)
      moniker = this.monikers.d[index];
      this.monikers.d.splice(index, 1);
    }
    
    let wrestlerName = "";
    if(Math.random() < this.goesByMonikerChance) {
      wrestlerName = moniker;
    }
    else {
      let name = this.generateName('male');
      let firstAndLast = name.split(" ");
      wrestlerName = firstAndLast[0] + " '" + moniker + "' " + firstAndLast[1];
    }
    return wrestlerName;
  }

  private generateStats(w: Wrestler, tier: string, maxStat?: string) {
    w.stats.striking = this.getRandomInt(this.maxNormalValue) + TIERRANGES[tier].modifier;
    w.stats.aerial = this.getRandomInt(this.maxNormalValue) + TIERRANGES[tier].modifier;
    w.stats.hardcore = this.getRandomInt(this.maxNormalValue) + TIERRANGES[tier].modifier;
    w.stats.charisma = this.getRandomInt(this.maxNormalValue) + TIERRANGES[tier].modifier;
    w.stats.technical = this.getRandomInt(this.maxNormalValue) + TIERRANGES[tier].modifier;
    w.stats.power = this.getRandomInt(this.maxNormalValue) + TIERRANGES[tier].modifier;
    if(maxStat) {
      w.stats[maxStat] = this.getRandomIntRange(TIERRANGES[tier].range[0], TIERRANGES[tier].range[1]) + (TIERRANGES[tier].modifier / 2);
    }
  }

  private generateAge(w: Wrestler) {
    let chance = Math.random();
    if(chance > 0.8) {
      w.age = this.getRandomIntRange(44, 51);
      if(chance > 0.95) {
        w.age = this.getRandomIntRange(51, 65);
        let p = w.stats.power - this.ageModifier;
        if(p < 0)
          p = 0;
        w.stats.power = p;
      }
    }
    else if(chance > 0.2) {
      w.age = this.getRandomIntRange(26, 44);
    }
    else {
      w.age = this.getRandomIntRange(17, 26);
      w.stats.charisma += this.ageModifier;
    }
  }

  private generateHeightAndWeight(w: Wrestler) {
    let chance = Math.random();
    let feet;
    let inches;
    if(chance > 0.75) {
      feet = 5;
      let inchChance = Math.random();
      if(inchChance > 0.8) {
        inches = this.getRandomIntRange(2, 7);
        w.stats.aerial += 2;
        w.weight = 125 + this.getRandomInt(51);
      }
      else {
        inches = this.getRandomIntRange(7, 12);
        w.weight = 175 + this.getRandomInt(51);
      }
      inches = this.getRandomIntRange(7, 12);
    } else if (chance < 0.02) {
      feet = 7
      inches = this.getRandomInt(5);
      // very tall
      w.stats.power += 3;
      let a = w.stats.aerial - 2;
      if(a < 0)
        a = 0;
      w.stats.aerial = a;
      w.weight = 300 + this.getRandomInt(101);
    }
    else {
      feet = 6
      let inchChance = Math.random();
      if(inchChance > 0.9) {
        inches = this.getRandomIntRange(8, 12);
        w.stats.power += 2;
        let a = w.stats.aerial - 1;
        if(a < 0)
          a = 0;
        w.stats.aerial = a;
        w.weight = 250 + this.getRandomInt(101);
      }
      else if(inchChance < 0.1){
        inches = this.getRandomIntRange(4, 8);
        w.stats.power += 1;
        w.weight = 225 + this.getRandomInt(76);
      }
      else {
        inches = this.getRandomInt(4);
        w.weight = 200 + this.getRandomInt(76);
      }
    }
    w.height = feet + "'" + inches + '"';
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
