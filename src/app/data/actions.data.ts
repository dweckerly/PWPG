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
            businessLevelRequired: 0
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
            businessLevelRequired: 0
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
            businessLevelRequired: 0
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
            businessLevelRequired: 1
        }
    ]
}

const scout = {
    name: "Scout",
    description: "Search for and sign contracts with talented performers to star in your events.",
    options: [
        {
            name: ""
        },
        {}
    ]
}

const hire = {
    name: "Hire",
    description: "Hire business professionals to join your company.",
    options: [
        {
            name: "Manual Laborers",
            description: "Find stage crew and laborers to help build up and tear down of event equipment.",
            businessLevelRequired: 0
        },
        {
            name: "Commentators",
            description: "Find the voice(s) of your company to boost excitement at your events.",
            businessLevelRequired: 0
        },
        {
            name: "Design Agency",
            description: "Hire designers to create promotional material and build your brand.",
            businessLevelRequired: 1
        },
        {
            name: "Medical Staff",
            description: "",
            businessLevelRequired: 1
        },
        {
            name: "Legal Team",
            description: "Keep your assets safe from lawsuits with a suite of lawyers at your service.",
            businessLevelRequired: 2
        },
        {
            name: "Writing Staff",
            description: "Procure creative minds to gain access to new angles.",
            businessLevelRequired: 2
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
            cost: 20,
            capacity: 40,
            augments: null,
            businessLevelRequired: 0
        },
        {
            name: "Warehouse",
            description: "",
            cost: 50,
            capacity: 120,
            augments: null,
            businessLevelRequired: 0
        },
        {
            name: "Strip Club",
            description: "",
            cost: 150,
            capacity: 120,
            augments: null,
            businessLevelRequired: 0
        },
        {
            name: "Bingo Parlor",
            description: "",
            cost: 100,
            capacity: 160,
            augments: null,
            businessLevelRequired: 0
        },
        {
            name: "School Gymnasium",
            description: "",
            cost: 200,
            capacity: 250,
            augments: null,
            businessLevelRequired: 1
        }
    ]
}

const purchase = {
    name: "Purchase",
    description: "Buy essential items for your events. ",
    options: [
        {}
    ]
}

export const ACTIONS = [
    scout,
    book,
    promote, 
    hire,
    purchase,
  ]

