const ar1 = [1,2,3,4,5];
let ar2 = [1,2,3,4,5];
console.log(ar1);
console.log(ar2);

ar1[0] = 20;
ar2 = [1,2,3,4,5,6,7];
console.log(ar1);
console.log(ar2);

ar1[0] = 30;
ar2 = 10;
console.log(ar1);
console.log(ar2);

const ch1 = ["abcd" , "defg", "hijk"];
console.log(ch1);

const arr = ["Apple", "2kg", "Himachal" , 20, 99.1, true]

const arr1 = ["Apple", "2kg", "Himachal" , 20, 99.1, true]
for(let i =0 ; i<arr.length ; i++){
    console.log (arr1[i]);
}

console.log(arr[2]);
console.log(arr.at(-4));

const ch2 = ["abcd" , "defg", "hijk"];
for(let i =0 ; i<arr.length ; i++){
    console.log (ch2[i]);
}

let arr2 = ["Apple", "2kg", "Himachal" , 20, 99.1, true]

arr2.push("Delhi");
console.log(arr2);

arr2.push();
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.filter(item=>item!= "Himachal");
console.log(arr2);

arr2.splice(3,1);
console.log(arr2);

let a = arr2.slice(0,2);
console.log(arr2);

arr2.slice(2,2);
console.log(arr2);

const Name = "Hiteshi Parihar";
console.log(Name);

let x = Name.split(" ");
console.log(x);

let y = Name.split("i");
console.log(y);

arr2.shift();
console.log(arr2);

arr2.unshift("HII");
console.log(arr2);

// for each
 const arr4 = ["Orange", "2kg", "Nagpur" , 20, 99.1, true]
// for(var i =0 ; i<arr.length ; i++) {
//     console.log (arr4[i]);
// }

arr4.forEach((element) => {
    console.log(element);
});





