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
function addNewPothole() {
    
    let newPothole = prompt(`What is the name of your new pothole?`);

    let txt;
    let txt2 = `${newPothole}`;

    if (newPothole === "" || newPothole === undefined) {
        txt = "Cancelled";
    } else {
        txt = `Thanks! I'll add that to the list.\n ${txt2}`; 
    }
    document.getElementById("addNewPothole").innerHTML = txt;
}
