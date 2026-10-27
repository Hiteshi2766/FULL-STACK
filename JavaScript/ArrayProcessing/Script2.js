const Students = ["Hiteshi", "Parihar", "Riddhi", "Hitu"];

if(Students.includes("Hiteshi"))
{
    console.log("Eat something");

}
else 
{
    console.log("Study Something");

}

// 
const numbers = [2, 5, 8, 11, 14];

const filterNumbers = numbers.filter((number) => number > 5);
const doubleNumbers = filterNumbers.map((number) => number * 2);

console.log(doubleNumbers);

const arrayMethodChanning = numbers
 .filter((number) => number <= 5)
 .map((number) => number * 2);

 console.log(arrayMethodChanning);

 const res = numbers.filter((number) => number <=5).includes(4);

 console.log(res);

 const data = [2,5,8,11,14,7,1,3,9,12,17,15];

 let sum = 0;

 sum = data.reduce((sum = 0, item) => (sum += item));

 console.log(sum);
