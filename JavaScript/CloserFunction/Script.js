function Greetings(name) {
    return function () {
    console.log("Welcome to RICR !!! , name")
   };
}

const greetHiteshi = Greetings("Hiteshi");
const greetRiddhi = Greetings("Riddhi");

greetHiteshi();
greetRiddhi();
