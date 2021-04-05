import { Stats } from "./stats";

export class Wrestler {
    name: string;
    age: number;
    height: string;
    weight: number;
    stats: Stats = new Stats();
    location: string;
}