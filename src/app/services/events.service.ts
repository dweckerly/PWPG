import { Injectable } from '@angular/core';
import { EventObject } from '../objects/events/event-object';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventList: EventObject[] = [];
  
  constructor() { }

  addEvent(event: EventObject) {
    this.eventList.push(event);
  }

  removeEvent(index: number) {
    this.eventList.splice(index, 1);
  }
}
