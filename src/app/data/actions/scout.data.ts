export const scout = {
    name: "Scout",
    description: "Search for and sign contracts with talented performers to star in your events.",
    options: [
        {
            name: "Local Bars",
            description: "Check local bars for ruffians willing to fight in your events.",
            cost: {
                money: null,
                time: {
                    amount: 1,
                    period: "day"
                }
            },
            generativeParams: {
                tiers: ['c', 'd'],
                maxAmount: 5,
                types: [
                    {
                        name: 'hardcore',
                        chance: 'high'
                     },
                     {
                        name: 'generalist',
                        chance: 'medium'
                     },
                     {
                         name: 'actor',
                         chance: 'low'
                     }
                ]
            },
            requirements: null
        },
        {
            name: "Local Gyms",
            description: "Find fit performers at local gyms.",
            cost: {
                money: null,
                time: {
                    amount: 1,
                    period: "day"
                }
            },
            generativeParams: {
                tiers: ['b', 'c', 'd'],
                maxAmount: 4,
                types: [
                    {
                        name: 'striker',
                        chance: 'medium'
                     },
                     {
                        name: 'generalist',
                        chance: 'medium'
                     },
                     {
                         name: 'acrobat',
                         chance: 'low'
                     }
                ]
            },
            requirements: null
        },
        {
            name: "Local Sporting Event",
            description: "Attend a local sporting event and offer contracts to athletes.",
            cost: {
                money: 15,
                time: {
                    amount: 1,
                    period: "day"
                }
            },
            generativeParams: {
                tiers: ['b', 'c', 'd'],
                maxAmount: 4,
                types: [
                    {
                        name: 'striker',
                        chance: 'medium'
                     },
                     {
                        name: 'generalist',
                        chance: 'medium'
                     },
                     {
                         name: 'acrobat',
                         chance: 'medium'
                     },
                     {
                        name: 'technician',
                        chance: 'low'
                     }
                ]
            },
            requirements: null
        }
    ]
}