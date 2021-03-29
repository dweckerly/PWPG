import { Duration } from "../time/duration";
import { StoryLineObjective } from "./story-line-objective";

export class StoryLine {
    title: string;
    objective: StoryLineObjective;
    duration: Duration;
}