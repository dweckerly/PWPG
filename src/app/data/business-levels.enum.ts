export enum BusinessLevel {
    "Micro-enterprise" = 0,
    "Small Business" = 1,
    "Medium Business" = 2,
    "Large Business" = 3,
    "Corporation" = 4
}

export type BusinessLevels = keyof typeof BusinessLevel;