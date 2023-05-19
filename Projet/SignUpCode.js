var Users = [
    {
        Firstname : "Ayman",
        Lastname  : "Benrabiaa",
        Email     : "Aymanbenr@protonmail.com",
        Password  : "$GetReCkt20!&",
    },
]



function add() {
    Firstname = document.getElementById("Firstname").value;
    Lastname = document.getElementById("Lastname").value;
    Email = document.getElementById("Email").value;
    Password = document.getElementById("password").value;
    PasswordR = document.getElementById("passwordR").value;
    if(Password != PasswordR ){
        document.getElementById("s1").innerHTML = "Passwords do not match";
    }
    else{
       var user = {};
       user.Firstname = Firstname;
       user.Lastname = Lastname;
       user.Email   = Email;
       user.Password = Password;
       Users.push(user);
    }
}

function login() {
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    for (let index = 0; index < Users.length; index++) {
        if(Users[index].Firstname == Username && Users[index].Password == Password){
            return true;
        }    
    }
    return false;
}