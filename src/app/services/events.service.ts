import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventObject } from '../objects/events/event-object';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventList: EventObject[] = [];
  eventsChange: Subject<EventObject[]> = new Subject<EventObject[]>();
  
  constructor(private localStorageService: LocalStorageService) { 
    this.eventsChange.subscribe(value => {
      this.eventList = value;
    })
  }

  addEvent(event: EventObject) {
    this.eventList.push(event);
    this.eventsChange.next(this.eventList);
    this.localStorageService.set("events", this.eventList);
  }

  removeEvent(index: number) {
    this.eventList.splice(index, 1);
    this.eventsChange.next(this.eventList);
    this.localStorageService.set("events", this.eventList);
  }
}
