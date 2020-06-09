function register(){
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var age = document.getElementById('ageInput').value;
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    var usercheck = /^[A-Za-z. 1-99]{3,85}$/;
    var passwordcheck = /^(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,18}/;
    var emailcheck = /^[A-za-z0-9_]{3,}@[A-za-z]{3,}[.][A-Za-z.]{2,}$/;

    if(name==""){
        document.getElementById('registerResult').innerHTML = "Please Enter a Name";
        return false;
    }
    if(emailcheck.test(email)){
        document.getElementById('registerResult').innerHTML =" ";
    }else{
        document.getElementById('registerResult').innerHTML ="Email is invalid";
        return false;
    }
    if(usercheck.test(username)){
        document.getElementById('registerResult').innerHTML =" ";
    }else{
        document.getElementById('registerResult').innerHTML ="Username is invalid";
        return false;
    }
    if(passwordcheck.test(password)){
        document.getElementById('registerResult').innerHTML =" ";
    }else{
        document.getElementById('registerResult').innerHTML ="Password is too Weak";
        return false;
    }

    var accounts = {};
    accounts.name = document.getElementById("nameInput").value;
    accounts.email = document.getElementById("emailInput").value;
    accounts.age = document.getElementById("ageInput").value;
    accounts.username = document.getElementById("usernameInput").value;
    accounts.password = document.getElementById("passwordInput").value;
    var nat = document.getElementById("nationalityInput");
    accounts.nationality = nat.options[nat.selectedIndex].text;

    // Store user
    localStorage[accounts.username] = JSON.stringify(accounts);
    registerResult.style.color = "#28f785";
    document.getElementById("registerResult").innerHTML = "<b>Account Created</b>";
}