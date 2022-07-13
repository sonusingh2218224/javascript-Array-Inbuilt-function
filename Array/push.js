//push method
// To add an object in last position

const Employee = [
    {
        name: "sonu singh",
        roll: 2218224,
        subject: "science"
    },
    {
        name: "sonu singh",
        roll: 2218224,
        subject: "science"
    }

]

const person = {

    name: "nitesh kumar",
    roll: 2218212,
    subject: "biology"

}

const result = Employee.push(person);
console.log(result);
console.log(Employee);
console.log(Employee.length)
