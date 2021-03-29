import { Venue } from "../venue";
import { EventDate } from "./event-date";
import { EventType } from "./event-type";

export class EventObject {
    name: string;
    date: EventDate;
    type: EventType;
    venue: Venue;
}