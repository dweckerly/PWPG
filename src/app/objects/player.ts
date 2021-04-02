export class Player {
    name: string;
    money: number;
    hype: number;
    businessSize: number;

    constructor(name: string, money: number, hype: number, businessSize: number) {
        this.name = name;
        this.money = money;
        this.hype = hype;
        this.businessSize = businessSize;
    }
}