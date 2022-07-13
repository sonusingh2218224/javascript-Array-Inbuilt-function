//splice
//splice is used to add an object in middle
//{index where to start },
//{how many items to remove },
//{items to add }

const Courses = [
    {
        btech: ["civil", "cse", "ee"],
    },
    {
        Mba: ["finance", "management"]
    }
]

let singleCourse = {
    BBA: "marketing"
}

const result = Courses.splice(1, 0, singleCourse);
console.log(result);
console.log(Courses);