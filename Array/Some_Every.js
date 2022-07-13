const Hospital = [
    {
        patientName: "suresh",
        disease: "fever",
        patientBedNumber: 2,
        MedicineAmount: 4000,
    },
    {
        patientName: "naresh",
        disease: "pen",
        patientBedNumber: 6,
        MedicineAmount: 5000,
    },
    {
        patientName: "karthik",
        disease: "ill",
        patientBedNumber: 10,
        MedicineAmount: 6000,
    },
    {
        patientName: "virat",
        disease: "fever",
        patientBedNumber: 10,
        MedicineAmount: 3000,
    },
]

const somePatient = Hospital.some((patient) => patient.patientBedNumber === 10)
console.log(somePatient);

//age is less than 18 
const AgeArray = [18, 20, 16, 22, 34, 15, 19];
function checkAge(age) {
    if (age < 18) {
        console.log("age should be less than 18")
    }


}
let check = AgeArray.some(checkAge);

//check result of student;
let scoreObtained = [45, 86, 20, 78, 15, 50];
//a test function to return score in less than 40
function StudentPassed(score) {
    return score > 90
}
if (scoreObtained.some(StudentPassed) === true) {
    console.log("fail")
} else {
    console.log("pass")
}