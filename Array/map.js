//map
//In the map() array method, a new array is returned by calling the function on each array element.
//map() array method में हर एक array element पर function को call करके उसका नया array return किया जाता है |

// Return किये गए सभी array के elements positive होते है |

const Cars = [
    {
        model: 2013,
        capacity: 3,
        color: "red",
    },
    {
        model: 2016,
        capacity: 9,
        color: "red",
    },
    {
        model: 2012,
        capacity: 2,
        color: "red",
    },

]
const Sizes = Cars.map(car => {
    if (car.capacity <= 3) {
        return "small"
    }
    if (car.capacity <= 5) {
        return "midium"
    }

    return "large"

})
console.log(Sizes)