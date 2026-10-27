const headingText = document.getElementById("heading").innerText;
const paraText = document.getElementById("studentMessage").textContent;
const btnLabel = document.getElementById("courseButton").innerHTML;

console.log(headingText.innerHTML);
console.log(paraText.innerText);
console.log(btnLabel.textContent);

headingText.innerText="Hiteshi Parihar";
headingText.innerHTML="Hiteshi";
headingText.textContent="Riddhi";

function UpdateMyFunction(){
    const myName = document.getElementById("myName").valuetrim();
    paraText.innerText = "Welcome to your portal"
}

const pic = document.getElementById("somePicture");
pic.scr = "./WhatsApp Image 2026-10-09 at 7.28.43 PM.jpeg"

function change() {
    const myNameInput = document.getElementById("myName");
}

headingText.style.color = "red";
headingText.style.backgroundColor = "blue";







// const body = document.querySelector("body");

// console.log(body);

// console.log(body.childNodes);
// console.log("innerText");
// console.log(body.innerText);

// console.log("innerHTML");
// console.log(body.innerHTML);
