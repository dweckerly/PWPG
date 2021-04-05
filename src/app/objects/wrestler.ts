import { Stats } from "./stats";

export class Wrestler {
    name: string;
    stats: Stats = new Stats();

    constructor() {
        this.name = "";
        this.stats.striking = 0;
        this.stats.aerial = 0;
        this.stats.hardcore = 0;
        this.stats.charisma = 0;
        this.stats.technical = 0;
        this.stats.power = 0;
    }
}