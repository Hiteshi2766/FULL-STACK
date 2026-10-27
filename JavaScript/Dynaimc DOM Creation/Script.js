const H = document.createElement("h2");

const P = document.createElement("p");

const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub-Heading";

P.textContent= "Loremorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis veniam culpa, aliquam reiciendis iure quaerat neque maiores at excepturi deleniti illo ab possimus? Assumenda ut beatae vel neque quia!"
B.classList.add("btn","btn-primary");
B.innerText = "Submit";

const div = document.getElementById("task1");
div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

H.append(" Welcome")

console.log(H.innerText);
H.remove();
