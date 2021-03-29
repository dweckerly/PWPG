import { MatchType } from "../objects/matches/match-type";

export const MatchTypes: MatchType[] = [
    {
        name: "Standard",
        description: "A standard match where competitors win by technical knock out, submission, pinfall or disqualification."
    },
    {
        name: "Tag Team",
        description: "Teams of two competitors each face off fighting one at a time with the ability to switch by tagging their teammates."
    },
    {
        name: "Knock Out",
        description: "This match must be won by technical knock out or pass out from a submission hold."
    },
    {
        name: "No Count-Out",
        description: "Competitors are allowed to be outside of the ring for any amount of time."
    },
    {
        name: "No Surrender",
        description: "Neither competitor is permitted to submit or give up during the match."
    },
    {
        name: "Steel Cage",
        description: "Competiors are locked in a steel cage and win by escaping the cage."
    },
    {
        name: "Inferno",
        description: "The ring is surrounded in fire and competiors must set their opponent on fire to win."
    },
    {
        name: "Barbed Wire Ring",
        description: "Ring ropes are replaced with barbed wire."
    },
    {
        name: "I Quit",
        description: "A competitor must force the other comptetitor to say the words 'I Quit' to win."
    },
    {
        name: "Bra and Panties",
        description: "Competitors must strip their opponents down to their underwear in order to win."
    },
    {
        name: "Special Referee",
        description: "A performer is allowed to referee this match instead of the standard referee."
    },
    {
        name: "First Blood",
        description: "The first competitor to bleed loses."
    }
]