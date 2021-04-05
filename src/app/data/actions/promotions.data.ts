export const promote = {
    name: "Promote",
    description: "Advertise your company and upcoming events.",
    options: [ 
        {
            name: "Flyers",
            description: "Create and distribute flyers.",
            cost: {
                money: 10,
                time: {
                    amount: 1,
                    period: "day"
                }
            },
            attention: 1,
            requirements: null
        },
        {
            name: "Newspaper",
            description: "Design an advertisement to be run in local newspapers.",
            cost: {
                money: 150,
                time: {
                    amount: 2,
                    period: "day"
                }
            },
            attention: 3,
            requirements: null
        },
        {
            name: "Radio",
            description: "Record a promotion and distribute it to radio stations.",
            cost: {
                money: 250,
                time: {
                    amount: 1,
                    period: "day"
                }
            },
            attention: 3,
            requirements: null
        },
        {
            name: "Local Television",
            description: "",
            cost: {
                money: 1000,
                time: {
                    amount: 5,
                    period: "day"
                }
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