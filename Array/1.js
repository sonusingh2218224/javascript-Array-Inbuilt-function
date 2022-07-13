const car = [
    {
        carName: "swift",
        model: 2345,
        color: "red",
        price: 600000,
        capacity: 3,

    },
    {
        carName: "BMW",
        model: 1234,
        color: "black",
        price: 200000,
        capacity: 5,

    },
    {
        carName: "Scarpio",
        model: 5000,
        color: "red",
        price: 300000,
        capacity: 7,

    },

]
//unshift
// console.log(car.length)
const arr = car.unshift([
    {
        carName: "maruti"
    }
])
//push
const arr1 = car.push(
    {
        carName: "thar",
        model: 12345,
        color: "black",
        price: 500000
    }
)

//splice

const spices = car.splice(3, 0, {
    carName: "nitesh",
    model: 12345,
    color: "black",
    price: 500000
});


//find
let finds = car.find(car => car.color === "black");
let find1 = car.find(car => car.carName === "swift");

//find 
let priceOfCar = car.find(car => car.price < 400000);

//filter
let fill = car.filter(car => car.color === "black");
let fillers = car.filter(car => car.price < 400000)


//map

let sizes = car.map(car => {
    if (car.capacity <= 5) {
        return "small";
    }
    if (car.capacity <= 7) {
        return "medium";
    }
    return "large";
});
console.log(sizes);



// console.log(arr)
// console.log(car)
// console.log(car.length)
// console.log(arr1)
// console.log(car[2]);
// console.log(spices)
// console.log(finds)
// console.log(find1)
// console.log(priceOfCar)
// console.log(fill)
console.log(fillers)


