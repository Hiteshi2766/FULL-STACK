const ar = ["Hiteshi" , "Parihar" , "Riddhi" , "Princess" , "Hitu"];

const list = document.createElement("ol");

ar.forEach((item)=> {
    const l = document.createElement("11");
    l.textContent = item;
    list.appendChild(l);
});

document.getElementById("myList").appendChild(List);