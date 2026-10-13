let a = 10;
let b = 20;
let c = "10";
let d = "20";

console.log(a == b);  // false (10 is not equal to 20)
console.log(a == c);  // true  (loose equality converts string "10" to number 10)
console.log(a === c); // false (strict equality checks type: number vs string)
console.log(a != c);  // false (loose inequality converts type, so 10 != "10" is false)
console.log(a !== c); // true  (strict inequality checks type: number and string differ)

let x = 5;
let y = 2;

console.log(x % y); // 1 (remainder of 5 divided by 2)

let p = 10;
let q = 3;

console.log(p / q); // 3.3333333333333335 (standard floating-point division)

// Logical operators
let m = true;
let n = false;
let o = true;

console.log(m && n);  // false
console.log(m && o);  // true
console.log(n && o);  // false
console.log(m || o);  // true
console.log(n || o);  // true
console.log(m || n);  // true
console.log(!m && o); // false
console.log(!n && o); // true
console.log(!m || n); // false
console.log(!m || n); // false

// Increment/Decrement
console.log(a++); // 10 (postfix: prints 10, 'a' becomes 11)
console.log(a--); // 11 (postfix: prints 11, 'a' becomes 10)
console.log(a);   // 10

console.log(b--); // 20 (postfix: prints 20, 'b' becomes 19)
console.log(b);   // 19
console.log(b++); // 19 (postfix: prints 19, 'b' becomes 20)
console.log(++b); // 21 (prefix: 'b' becomes 21, then prints 21)

// Ternary Operator
console.log(a > b ? "Hello" : "Bye"); // "Bye" (10 > 21 is false)

// Reassign existing variables instead of redeclaring with 'let'
c = 10;
d = 21;

// 1. If-Else Condition
if (c < d) {
    console.log("Hello");
} else {
    console.log("bye");
}

// 2. For Loop (using 'let' for block scoping)
for (let i = 0; i < 5; i++) {
    console.log("We are learning JavaScript", i + 1);
}

// 3. While Loop
let i = 0;
while (i < 5) {
    console.log("We are learning JavaScript", i + 1);
    i++;
}

// 4. Switch Statement
let Choice = 2;

switch (Choice) {
    case 1: {
        console.log("Checking your balance");
        break;
    }
    case 2: {
        console.log("Please collect your cash");
        break;
    }
    case 3: {
        console.log("Deposit cash");
        break;
    }
    case 4: {
        console.log("Update your PIN");
        break;
    }
    default: {
        console.log("Invalid choice, please select between 1 and 4");
    }
}


// FUNCTION