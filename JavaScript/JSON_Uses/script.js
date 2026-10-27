const data = [
    {
        title: "MyPhone 18",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 11",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 14",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 17",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 15",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 1",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 19",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 20",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 3",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 7",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 8",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 5",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    },
    {
        title: "MyPhone 9",
        description: "very good phone is deep beetroot Color",
        button1: "\$25",
        button2: "buy now"
    }
];

// Target the correct container ID present in index.html
const container = document.getElementById("card-parent");

function add_Data() {
    // Clear any existing content inside the parent row before injecting cards
    container.innerHTML = "";

    data.forEach(item => {
        // Create column wrapper for responsive layout
        const myCard = document.createElement("div");
        myCard.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "p-2");

        myCard.innerHTML = `
            <div class="card h-100 shadow-sm border p-3 d-flex flex-column justify-content-between">
                <div>
                    <h3 class="h5 card-title">${item.title}</h3>
                    <p class="card-text text-muted">${item.description}</p>
                </div>
                <div class="row g-2 mt-3">
                    <div class="col-6"> 
                        <button class="btn btn-outline-primary w-100">${item.button1}</button>
                    </div> 
                    <div class="col-6"> 
                        <button class="btn btn-outline-danger w-100 text-capitalize">${item.button2}</button>
                    </div> 
                </div>
            </div>
        `;

        container.appendChild(myCard);
    });
}

// Call function on load
// add_Data();

// const student = {
//     name = "Hiteshi",
//     age: 20
// };

// console.log(student);

// student

data.forEach((element) => add_Data(element));

const student = {
  name: "Aarav",
  age: 20,
};
console.log(student);

student.name = "Manav";

console.log(student);
student.subject = "CSE";

console.log(student);

delete student.name;

console.log(student);