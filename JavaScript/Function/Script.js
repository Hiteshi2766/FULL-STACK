// HOISTING: means that the function can be called either before its defined or after its defined

sum(3,4);
function sum(a , b) {
    let c = a + b;
    console.log(c);
}
sum(5,10);



function sum_width_d(x,y = 10) 
{
    console.log(x+y);

}

sum_width_d(7);
sum_width_d(8 , 20);


function Calculate(a,b,c){
    return a+b-c;
}
let answer = Calculate(5,6,7);
console.log(answer);

// Function Expression : jab koi function work kare aur usko variable ko diya ja sake
// 
const greet = function (){
    console.log("Welcome to my page");
};

greet();


// set (a)