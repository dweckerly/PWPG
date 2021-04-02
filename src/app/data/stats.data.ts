export const STATS = [
    "striking",
    "aerial",
    "hardcore",
    "charisma",
    "technical"
]

export const TEMPLATES = [
    {
        name: "Striker",
        statBoost: 0
    },
    {
        name: "Acrobat",
        statBoost: 1
    },
    {
        name: "Hardcore",
        statBoost: 2
    },
    {
        name: "Actor",
        statBoost: 3
    },
    {
        name: "Technician",
        statBoost: 4
    },
    {
        name: "Generalist",
        stats: [
            {
                stat: 'striking',
                modifier: [0, 2]
            },
            {
                stat: 'aerial',
                modifier: [0, 2]
            },
            {
                stat: 'hardcore',
                modifier: [0, 2]
            },
            {
                stat: 'charisma',
                modifier: [0, 2]
            },
            {
                stat: 'technical',
                modifier: [0, 2]
            },
        ]
    },
]
