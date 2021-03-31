import { Injectable } from '@angular/core';

import { NAMES, ORG_NAMES } from '../data/generator.data';


@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  names = NAMES; 
  orgDefaultAmount: number = 10;

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
    let genderChanceThreshold = 0.79;
    let gender = null;
    if(genderInput !== undefined) {
      gender = genderInput;
    }
    else {
      gender = (Math.random() > genderChanceThreshold) ? 'female' : 'male';
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

  generateWrestler(specificType?: string, specificTier?: string, lowerTiersToo?: boolean) {

  }


  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
