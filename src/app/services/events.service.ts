import { Injectable } from '@angular/core';
import { EventObject } from '../objects/events/event-object';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventList: EventObject[] = [];
  
  constructor(private localStorageService: LocalStorageService) { }

  addEvent(event: EventObject) {
    this.eventList.push(event);
    this.localStorageService.set("events", this.eventList);
  }

  removeEvent(index: number) {
    this.eventList.splice(index, 1);
    this.localStorageService.set("events", this.eventList);
  }
}
