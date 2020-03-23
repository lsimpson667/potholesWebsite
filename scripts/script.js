function showUsernameMessage() {
    const userName = prompt(`Enter your username.`);
    if (userName === "Master123") {
        password = prompt(`Enter your password ${userName}`);
            if (password === "squad2020") {
                alert(`Welcome ${userName}.`);
            } else if (password === "" || password === undefined) {
                alert(`Canceled`);
            } else {
                alert(`Wrong password.`);
            }
    } else if (userName === "" || userName === undefined) {
        alert(`Cancelled`);
    } else {
        alert(`Your username does not match the profiles in our database.`);
    }
    
}

let password;

let txt;
let txt2 = `Thanks! I'll add that to the list.`;
function addNewPothole() {
    
    let newPothole = prompt(`What is the name of your new pothole?`);

    txt = `<p>Cancelled</p>`;
    txt2 += `<p>${newPothole}</p>`;

    if (newPothole === "" || newPothole === undefined || newPothole === null) {
        document.getElementById("addNewPothole").innerHTML = txt;
    } else {
        document.getElementById("addNewPothole").innerHTML = txt2;
    }
    // document.getElementById("addNewPothole").innerHTML = txt2;
}
