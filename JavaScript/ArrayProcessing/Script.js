

// filter works on conditions perfrom different tasks according to the condition.
// filter creates icon for the cases passed and then return it to the user

const a = 10; 
const arr = ["Apple", 2.5, 99, "Himachal", a];

console.log("--- With forEach ---");
arr.forEach((element) => {
    
    if (typeof element === "number") {
        console.log(element);
    }
});

console.log("--- With Map ---");
// Used map instead of forEach to match the label
arr.map((element) => {
    console.log(element);
});

var x = arr.map((element) => {
    if (typeof element === "number") {
        return element;
    }
    // map returns undefined for elements that don't match the condition
});
console.log("X = ", x);

const ar2 = ["Apple", 2.5, 99, "Himachal", 90, true];
var F = ar2.filter((item) => item !== 99);
console.log("F = ", F);
console.log("Found Item: ", ar2.find((item) => item === "Apple"));


var findIndexResult = ar2.findIndex((item) => item !== 99);
console.log("Fix = ", findIndexResult); 

var findResult = ar2.find((item) => item !== 99);
console.log("Fi = ", findResult);
// Sorting
const ar3 = [2,5,1,7,6,3,9,4,8]
var s = ar3.sort();
console.log("S = ", s);
S
