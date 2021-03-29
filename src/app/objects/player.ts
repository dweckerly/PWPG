export class Player {
    name: string;
    money: number;
    hype: number;
    businessSize: string;

    constructor(name: string, money: number, hype: number, businessSize: string) {
        this.name = name;
        this.money = money;
        this.hype = hype;
        this.businessSize = businessSize;
    }
}