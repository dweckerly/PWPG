import { Performer } from "../performer";
import { MatchType } from "./match-type";

export class Match {
    performers: Performer[];
    type: MatchType;
    call: string;
}