window.onload = checkLogin; // Check to see if user is logged in

function checkLogin(){
    if(sessionStorage.loggedInUsername !== undefined){
        // Extract details of logged in user
        let accounts = JSON.parse(localStorage[sessionStorage.loggedInUsername]);
        window.location.href = "game.php";
    }
}

let cookies = document.cookie;

function login(){
    // Retrieving username from the input field
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    // Inexistent account
    if(localStorage[username] === undefined){
        document.getElementById("loginFailure").innerHTML = "Username Not Recognized";
        return; // Do nothing else
    }
    else if (username===""){ // Empty Username Field
        document.getElementById("loginFailure").innerHTML = "Please Enter Username";
    }
    else if (password===""){ // Empty Password Field
        document.getElementById("loginFailure").innerHTML = "Please Enter Password";
    }
    else{ // Account Recognized
        let accounts = JSON.parse(localStorage[username]); // Converting Username String to Object
        let password = document.getElementById("passwordInput").value;

        if(password === accounts.password){ // Successful login
            document.getElementById("loginFailure").innerHTML = ""; // Clear any login failures
            sessionStorage.loggedInName = accounts.name;
            sessionStorage.loggedInUsername = accounts.username;
            sessionStorage.loggedInAge = accounts.age;
            sessionStorage.loggedInNationality = accounts.nationality;
            window.location.href = 'game.php'; // Opening the game page
        }else{
            document.getElementById("loginFailure").innerHTML = "Incorrect Password"; // Incorrect Password
        }
    }
}