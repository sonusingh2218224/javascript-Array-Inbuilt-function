//find
// find the first element of the object
//This function returns the first matching element:

const CollegeData = [
    {
        name: "sonu singh",
        age: 18,
        branch: "cse"
    },
    {
        name: "vikram",
        age: 19,
        branch: "cse"
    },
    {
        name: "asha",
        age: 18,
        branch: "cse"
    },
    {
        name: "sonu singh",
        age: 16,
        branch: "ee"
    },
]

const result = CollegeData.find(data => data.age === 18 && data.branch === "cse");
console.log(result);
const result1 = CollegeData.findIndex(data => data.age === 18);