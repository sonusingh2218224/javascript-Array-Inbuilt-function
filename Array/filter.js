//filter
//multiple element of an array to match then use filter method
// you applied a condition then multiple element are match then use filter
//
const Voting = [
    {
        name: "raushan",
        age: 18,
    },
    {
        name: "vishal",
        age: 17,
    },
    {
        name: "vikram",
        age: 19,
    },
    {
        name: "aniket",
        age: 15,
    },
]

const res = Voting.filter(res => res.age >= 18);
console.log(res)