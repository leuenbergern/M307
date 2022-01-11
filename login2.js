function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "1234") {
        alert("Login erfolgreich");
        window.open("works.html");
    }


    else {
        alert("Login fehlgeschlagen");
    }


}



