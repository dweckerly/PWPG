import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TimePeriod } from '../objects/time/time-period';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  currentDate: TimePeriod;

  timeChange: Subject<TimePeriod> = new Subject<TimePeriod>();
  
  constructor(private localStorageService: LocalStorageService) { 
    this.currentDate = this.localStorageService.get("time");
    this.timeChange.subscribe(value => {
      if(value !== null) {
        this.currentDate = new TimePeriod(value.year, value.month, value.week, value.day);
      }
    });
  }

  advanceByDays(amount: number) {
    let newDay = this.currentDate.day + amount;
    let newWeek = this.currentDate.week;
    let newMonth = this.currentDate.month;
    let newYear = this.currentDate.year;
    if(newDay > 6) {
      newWeek++;
      newDay -= 7;
      if(newWeek > 4) {
        newMonth++;
        newWeek -= 4;
        if(newMonth > 12) {
          newYear++;
          newMonth -= 12
        }
      }
    }
    this.updateTime(new TimePeriod(newYear, newMonth, newWeek, newDay));
  }

  updateTime(time: TimePeriod) {
    this.currentDate = time;
    this.timeChange.next(time);
    this.localStorageService.set("time", time);
  }
}
