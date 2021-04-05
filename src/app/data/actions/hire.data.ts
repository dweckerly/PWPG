export const hire = {
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
            name: "Referees",
            description: "Hire an official in ring rules arbiter to count pinfalls and help matches run smoother.",
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