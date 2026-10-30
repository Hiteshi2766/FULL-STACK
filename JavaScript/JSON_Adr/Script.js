const ob = {
  name: "Patel",
  gender: "male",
  college: "sam",
  year: 3,
  cgpa: 8.2,
};

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const ar = [10, 20, 30, 40, 50];

console.log(...ar);

const data = [

];

function displayStudent(name, ...subjects) {
    console.log("Student:", name);
    console.log("Subjects:", subjects);
}

displayStudent("John", "Math", "Science", "History");

function sum(...n) {
    const total = n.reduce((result = 0, num) => (result += num));
}

const answer = Sum(2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(answer);