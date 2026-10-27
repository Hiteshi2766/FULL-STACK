const str = "Hiteshi Parihar";

console.log(str.charAt(3));
console.log(str.at(3));


const str2 = str.slice(2, 6);
console.log(str2);

const S_Str = str.substring(2, 5);
console.log(S_Str);

const str = "   Rahul Sharma   ";
        const cleanedName = str.trim();

        const formattedName = cleanedName.toUpperCase();
        console.log("Formatted Name:", formattedName);
        document.getElementById("formattedName").textContent = formattedName;

        // Extracting First Name & Last Character
        const firstName = cleanedName.slice(0, 5);
        console.log("First Name:", firstName);
        document.getElementById("firstName").textContent = firstName;

        const lastChar = cleanedName.at(-1);
        console.log("Last Character:", lastChar);
        document.getElementById("lastChar").textContent = lastChar;

        // 2. Email Validation
        const email = "rahul@example.com";
        const isEmailValid = email.includes("@") && email.endsWith(".com");
        console.log("Email Valid:", isEmailValid);
        document.getElementById("emailValid").textContent = isEmailValid;

        // 3. Message Replacement
        const message = "HTML is useful. HTML is popular.";
        const updatedMessage = message.replaceAll("HTML", "JavaScript");
        console.log("Updated Message:", updatedMessage);
        document.getElementById("updatedMessage").textContent = updatedMessage;

        // 4. Greeting
        const greeting = "Welcome, ".concat(formattedName, "!");
        console.log("Greeting:", greeting);
        document.getElementById("greeting").textContent = greeting;

        // 5. Subjects Array
        const rawSubjects = "HTML, JavaScript, React";
        const subjectsArray = rawSubjects.split(", ");
        console.log("Subjects Array:", subjectsArray);
        document.getElementById("subjectsList").textContent = subjectsArray.join(", ");