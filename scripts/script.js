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
    } else {
        alert(`Your username does not match the profiles in our database.`);
    } 
    
}

let password;
// Ask Kiki or Melissa questions about why the Line Break doesnt workVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

let txt2 = `Thanks! I'll add that to the list`;
function addNewPothole() {
    
    let newPothole = prompt(`What is the name of your new pothole?`);

    let txt;
    txt2 += `<p>${newPothole}<p>`;

    if (newPothole === "" || newPothole === undefined || newPothole === null) {
        txt = "Cancelled";
    } else {
        document.getElementById("addNewPothole").innerHTML = txt2;
    }
    // document.getElementById("addNewPothole").innerHTML = txt2;
}
