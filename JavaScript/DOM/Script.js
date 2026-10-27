let text = document.querySelector("h1").innerText;

console.log(text + "Hiteshi");

function submit () {
    console.log("Submit Button Clicked")

    const nm = document.querySelector("#fullName").value.trim() ;
      const em = document.querySelector("#email").value.trim() ;

      console.log("Full Name:", nm);
      console.log("Email: , em");
}

const coursediv = document.getElementById("course");
console.log(coursediv);

const heading = document.querySelector("h2");
console.log(heading);

console.log(heading.parentElement.lastElementChild);
console.log(heading.parentElement.firstElementChild);
console.log(heading.parentElement.children);


