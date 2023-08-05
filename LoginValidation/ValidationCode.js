var Users=[
    {
        username: "Ayman Ben",
        password: "GetReckt22!2",
    },
];


function add() {
    username = document.getElementById("in1").value;
    password = document.getElementById("in2").value;
    if(password.length < 8){
        document.getElementById("s1").innerHTML = "Password Must Contain 8 characters";
    }
    else{
       var user = {};
       user.username = username;
       user.password = password;
       Users.push(user);
       console.log(Users);
    }
      
}

function show() {
    let tableau = document.getElementById("table");

    for (let index = 0; index < Users.length; index++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.append(Users[index].username);
        td2.append(Users[index].password);
        tr.append(td1);
        tr.append(td2);
        tableau.append(tr);
    }
}
function showpass() {
    var pass = document.getElementById('in4');
    if(pass.type=='text'){
        pass.type = 'password';
    }
    else 
      pass.type = 'text';
    
}
function login() {
   var Username = document.getElementById("in3").value;
    var Password = document.getElementById("in4").value;
    var span = document.getElementById("s2");
    if (Username ==""){
        span.innerHTML = "Username cannot be blank!";
        return false;
    }
    if (Password ==""){
        span.innerHTML = "Password cannot be blank!";
        return false;
    }
    for (let index = 0; index < Users.length; index++) {
        if(Username == Users[index].username  && Password == Users[index].password){
            return true;
        }
    }
    span.innerHTML = "Password Or Useename do not exist";

    return 0;
    
}