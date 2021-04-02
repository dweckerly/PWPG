const promote = {
    name: "Promote",
    description: "Advertise your company and upcoming events.",
    options: [ 
        {
            name: "Flyers",
            description: "Create and distribute flyers.",
            cost: {
                money: 10,
                time: [
                    {
                        amount: 1,
                        period: "day"
                    }
                ]
            },
            attention: 1,
            requirements: null
        },
        {
            name: "Newspaper",
            description: "Design an advertisement to be run in local newspapers.",
            cost: {
                money: 150,
                time: [
                    {
                        amount: 2,
                        period: "day"
                    }
                ]
            },
            attention: 3,
            requirements: null
        },
        {
            name: "Radio",
            description: "Record a promotion and distribute it to radio stations.",
            cost: {
                money: 250,
                time: [
                    {
                        amount: 1,
                        period: "day"
                    }
                ]
            },
            attention: 3,
            requirements: null
        },
        {
            name: "Local Television",
            description: "",
            cost: {
                money: 1000,
                time: [
                    {
                        amount: 5,
                        period: "day"
                    }
                ]
            },
            attention: 6,
            requirements: [
                {
                    attributeName: "businessSize", 
                    value: 1
                }
            ]
            
        }
    ]
}

const scout = {
    name: "Scout",
    description: "Search for and sign contracts with talented performers to star in your events.",
    options: [
        {
            name: "Local Bars",
            description: "Check local bars for ruffians willing to fight in your events.",
            cost: {
                money: null,
                time: [
                    {
                        amount: 1,
                        period: "day"
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
                time: [
                    {
                        amount: 1,
                        period: "day"
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
                time: [
                    {
                        amount: 1,
                        period: "day"
                    }
                ]
            },
            requirements: null
        }
    ]
}

const hire = {
    name: "Hire",
    description: "Hire business professionals to join your company.",
    options: [
        {
            name: "Manual Laborers",
            description: "Find stage crew and laborers to help build up and tear down of event equipment.",
            requirements: null
        },
        {
            name: "Commentators",
            description: "Find the voice(s) of your company to boost excitement at your events.",
            requirements: null
        },
        {
            name: "Design Agency",
            description: "Hire designers to create promotional material and build your brand.",
            requirements: [
                {
                    attributeName: "businessSize", 
                    value: 1
                }
            ]
        },
        {
            name: "Medical Staff",
            description: "",
            requirements: [
                {
                    attributeName: "businessSize", 
                    value: 1
                }
            ]
        },
        {
            name: "Legal Team",
            description: "Keep your assets safe from lawsuits with a suite of lawyers at your service.",
            requirements: [
                {
                    attributeName: "businessSize", 
                    value: 2
                }
            ]
        },
        {
            name: "Writing Staff",
            description: "Procure creative minds to gain access to new angles.",
            requirements: [
                {
                    attributeName: "businessSize", 
                    value: 2
                }
            ]
        }
    ]
}

const book = {
    name: "Book",
    description: "Secure a venue for the date of your next event.",
    options: [
        {
            name: "Backyard",
            description: "",
            cost: {
                money: 20
            },
            capacity: 40,
            augments: null,
            requirements: null
        },
        {
            name: "Warehouse",
            description: "",
            cost: {
                money: 50
            },
            capacity: 120,
            augments: null,
            requirements: null
        },
        {
            name: "Strip Club",
            description: "",
            cost: {
                money: 150
            },
            capacity: 120,
            augments: null,
            requirements: null
        },
        {
            name: "Bingo Parlor",
            description: "",
            cost: {
                money: 100
            },
            capacity: 160,
            augments: null,
            requirements: null
        },
        {
            name: "School Gymnasium",
            description: "",
            cost: {
                money: 200
            },
            capacity: 250,
            augments: null,
            requirements: [
                {
                    attributeName: "businessSize", 
                    value: 1
                }
            ]
        }
    ]
}

const purchase = {
    name: "Purchase",
    description: "Buy essential items for your business.",
    options: [
        {
            name: "Portable Ring Ropes",
            description: "",
            cost: {
                money: 125
            },
            type: "ring",
            augments: null
        },
        {
            name: "Canvas Mat Floor Ring",
            description: "",
            cost: {
                money: 375
            },
            type: "ring",
            augments: null
        },
        {
            name: "12-Foot Sports Mat Ring with Frame",
            description: "",
            cost: {
                money: 2050
            },
            type: "ring",
            augments: null
        },
        {
            name: "16-Foot Deluxe Ring",
            description: "",
            cost: {
                money: 5475
            },
            type: "ring",
            augments: null
        },
        {
            name: "20-Foot Professional Competition Ring",
            description: "",
            cost: {
                money: 8900
            },
            type: "ring",
            augments: null
        },
        {
            name: "Entryway Curtains",
            description: "",
            cost: {
                money: 325
            },
            type: "decor",
            augments: null
        },
        {
            name: "Custom Ring Floor Print",
            description: "",
            cost: {
                money: 500
            },
            type: "decor",
            augments: null
        },
        {
            name: "Custom Printed Ring Skirt",
            description: "",
            cost: {
                money: 625
            },
            type: "decor",
            augments: null
        },
    ]
}

export const ACTIONS = [
    scout,
    book,
    promote, 
    hire,
    purchase,
  ]

