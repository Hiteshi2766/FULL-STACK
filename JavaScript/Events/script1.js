const showAssBtn = document.getElementById("showAsssignmentNotification");
const showAttBtn = document.getElementById("showAttendenceNotification");
const stopAssBtn = document.getElementById("StopAsssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendenceNotification");

function ShowAsssignment () {
  
        assPara.textContent = "Your Assignment deadline is approching!";
    
}

showAssBtn.addEventListener("click", ShowAsssignment);

showAttBtn.addEventListener("click", () => {
    attPara.textContent = "Please check your Attendance";
});

stopAssBtn.addEventListener("click", () => {
    showAssBtn.removeEventListener ("click", ShowAsssignment);
    assPara.textContent = "Your Assignment Notification is Stopped!";
});

const parent = document.getElementById("outer");
const child = document.getElementById("inner");

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});

