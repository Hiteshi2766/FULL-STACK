// () => {
//     console.log("This is Arrow Function");
// // };

// console.log((=>) {
//     let a = 10,
//     b = 5;
//     return a + b ;
// });

const a =() => {
    console.log("THis is Arrow Function")
};
a()

function add (a , b) {
    let x = a+ 5;
    let y = b + 5;
    console.log ( x+y);
}

function sum (m , n , jor){
    let p = m*2;
    let q = n * 2;

    jor(p , q);
}

sum(5,6,add);

