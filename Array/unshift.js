//unshift

//To add an element in first position
const cars = [
    {
        "color": "blue",
        "type": "cabrio",
        "registration": new Date('2016-09-02'),
        "capacity": 8
    },
    {
        "color": "green",
        "type": "cabrio",
        "registration": new Date('2016-05-08'),
        "capacity": 6
    }

]




let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}


const result = cars.unshift(car);
console.log(result)
console.log(cars);