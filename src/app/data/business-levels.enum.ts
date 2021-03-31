export enum BusinessLevel {
    "Micro-enterprise",
    "Small Business",
    "Medium Business",
    "Large Business",
    "Corporation"
}

export type BusinessLevels = keyof typeof BusinessLevel;