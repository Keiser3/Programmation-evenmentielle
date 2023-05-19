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