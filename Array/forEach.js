//The forEach() method calls a function for each element in an array.
let Students = ["sonu", "vikram", "aditya", "shalu"];
const result = Students.forEach(myFunction);
function myFunction(items) {
    console.log(items)

}

function myFunction(items, index, arr) {

    // adding strings to the array elements
    arr[index] = 'Hello ' + items
    console.log(arr[index])
}

console.log(Students)