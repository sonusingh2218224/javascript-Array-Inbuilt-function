//sort 
//

const cars = [
    {
        "color": "abcd",
        "type": "cabrio",
        "registration": new Date('2016-09-02'),
        "capacity": 8
    },
    {
        "color": "green",
        "type": "cabrio",
        "registration": new Date('2016-05-08'),
        "capacity": 6
    },
    {
        "color": "white",
        "type": "cabrio",
        "registration": new Date('2016-05-08'),
        "capacity": 2

    }

]

// let sortCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? -1 : (c1.capacity < c2.capacity) ? 1 : 0);

//2nd method
cars.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})
console.log(cars)

//sorting number
const sortCars = cars.sort((a, b) => (a.capacity < b.capacity) ? 1 : (a.capacity < b.capacity) ? -1 : 0);
// console.log(sortCars);

//sorting string
const sortByColor = cars.sort((a, b) => (a === b) ? 1 : (a === b) ? -1 : 0);
console.log(sortByColor);