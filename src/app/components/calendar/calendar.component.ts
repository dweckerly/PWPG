import { Component, OnInit } from '@angular/core';
import { DAYS } from 'src/app/data/days';
import { TimePeriod } from 'src/app/objects/time/time-period';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  //years: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  years: number[] = [1];
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  weeks: number[] = [1, 2, 3, 4];
  days: number[] = [0, 1, 2, 3, 4, 5, 6];
  dayArray: string[] = DAYS;

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
  }

  get getCurrentDate() {
    return this.timeService.currentDate;
  }

  isCurrentDay(y, m, w, d): boolean {
    let date = this.getCurrentDate;
    if(date.year === y && date.month === m && date.week === w && date.day === d) {
      return true;
    }
    return false;
  }

  isPastDay(y, m, w, d): boolean {
    let date = this.getCurrentDate;
    if(date.year > y) {
      return true;
    }
    else if(date.year == y && date.month > m) {
      return true;
    }
    else if(date.year == y && date.month == m && date.week > w) {
      return true;
    }
    else if(date.year == y && date.month == m && date.week == w && date.day > d) {
      return true;
    }
    return false;
  }

  addEvent(year: number, month: number, week: number, day: number) {
    let date = new TimePeriod(year, month, week, day);
    this.timeService.updateTime(date);
  }

}
