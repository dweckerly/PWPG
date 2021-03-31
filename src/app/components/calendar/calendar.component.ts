import { Component, OnInit } from '@angular/core';
import { DAYS } from 'src/app/data/days';

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

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(year: number, month: number, week: number, day: number) {

  }

}
