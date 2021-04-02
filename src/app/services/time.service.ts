import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TimePeriod } from '../objects/time/time-period';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  year: number = 1;
  month: number = 1;
  week: number = 1;
  day: number = 0;
  currentDate: TimePeriod;

  timeChange: Subject<TimePeriod> = new Subject<TimePeriod>();
  
  constructor(private localStorageService: LocalStorageService) { 
    this.currentDate = this.localStorageService.get("time");
    this.timeChange.subscribe(value => {
      if(value !== null) {
        this.year = value.year;
        this.month = value.month;
        this.week = value.week;
        this.day = value.day;
        this.currentDate = new TimePeriod(this.year, this.month, this.week, this.day);
      }
    });
  }

  updateTime(time: TimePeriod) {
    this.currentDate = time;
    this.timeChange.next(time);
    this.localStorageService.set("time", time);
  }
}
