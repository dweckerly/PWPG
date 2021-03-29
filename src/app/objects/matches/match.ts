import { EventObject } from "../events/event-object";
import { Performer } from "../performer";
import { MatchCategory } from "./match-category";
import { MatchType } from "./match-type";

export class Match {
    eventObject: EventObject;
    performers: Performer[];
    order: number;
    catgeory: MatchCategory;
    type: MatchType;
}