export const book = {
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
