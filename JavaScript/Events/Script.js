// function ShowAlert()
// {
//     alert("Click Me Button cliked using HTML events");
// }
// document.getElementById("clickButton").addEventListener("click" , ShowAlert2);

// function ShowAlert2 () {
   
//     alert("Click Me Button cliked using JS events");
// }

// document.getElementById("box").addEventListener("click" , ()=> {
//     document.getElementById("box").innerText = "This box was clicked";
// });

// // function ShowAlert() {
// //     alert("Click Me Button clicked using HTML events");
// // }

// // function ShowAlert2() {
// //     alert("Click Me Button clicked using JS events");
// // }

// // // Attach event listener to the second button
// // document.getElementById("clickButton").addEventListener("click", ShowAlert2);

// // // Change text content of the box when clicked
// // document.getElementById("box").addEventListener("click", () => {
// //     document.getElementById("box").innerText = "This box was clicked";
// // });

function ShowAlert() {
           alert("Click Me Button clicked using HTML events");
       }
        document.getElementById("clickButton").addEventListener("click", ShowAlert2);

       // Function for the second button (JS Event Listener)
       function ShowAlert2() {
           alert("Click Me Button clicked using JS events");
       }

       // Attach event listener to the second button
      

       // Change text content of the box when clicked
       document.getElementById("box").addEventListener("click", () => {
           document.getElementById("box").innerText = "This box was clicked";
       });

        function showMessage() {
            alert("Welcome to RICR!");
        }

         function onHoverIn() {
            document.getElementById("hoverPara").innerText = "Pointer is over the paragraph!";
        }

        document.getElementById("box").addEventListener("click", () => {
            document.getElementById("box").innerText = "Box clicked!";
        });

        document.getElementById("nameSubmit").addEventListener('click',()=>{
            console.log(document.getElementById(fullName).ariaValueMax.trim());
        });

         document.getElementById("fullName").addEventListener("keydown", (e) => {
             e.key==="Enter" 
                && 
             console.log(document.getElementById(fullName).value.trim());
         });
        
        document.getElementById("LoginForm").addEventListener("submit",(e)=> {
            e.preventDefault();
        console.log("Login done");
       });