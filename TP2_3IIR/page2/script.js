var Users = [];
var i=0;
var user = {};
let table = document.getElementById("table");
function add() {
    Name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;
    if(Name.length < 2 && email.length < 2 && phone.length < 2 && address.length <2){
        window.alert("fields cannot be blank");
    }
    else{
     
        
       user.name = Name;
       user.email = email;
       user.phone = phone;
       user.address = address;
       print();
       Users.push(user);
       
    }
      
}


function edit(x){
    var user = {};
    let name = prompt("Please enter the modified name", "name");
    user.name = name;

    let email = prompt("Please enter the modified email", "email");
    user.email = email;

    let phone = prompt("Please enter the modified phone", "phone");
    user.phone = phone;

    let address = prompt("Please enter the modified address", "address");
    user.address = address;
    Users[x] = user;
    console.log(user);
    document.getElementById(x).remove();
    
    table = document.getElementById("table");
    var tr = document.createElement('tr');
    tr.setAttribute("id", x );
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 =document.createElement('div');
    var btn1 = document.createElement('a');
    btn1.setAttribute("onclick","edit("+x+")");
    btn1.setAttribute("class" ,"btn btn-primary" );
    var btn2 = document.createElement('a');
    btn2.setAttribute("onclick","remove("+x+")");
    btn2.setAttribute("class" ,"btn btn-primary" );
    i++;
    td5.append(btn1);
    td5.append(btn2);

    td1.append(user.name);
    td2.append(user.email);
    td3.append(user.phone);
    td4.append(user.address);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    table.append(tr);
    
}

function print(){
    var tr = document.createElement('tr');
    tr.setAttribute("id", i );
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 =document.createElement('div');
    var btn1 = document.createElement('a');
    btn1.setAttribute("onclick","edit("+i+")");
    btn1.setAttribute("class" ,"btn btn-primary" );
    var btn2 = document.createElement('a');
    btn2.setAttribute("onclick","remove("+i+")");
    btn2.setAttribute("class" ,"btn btn-primary" );
    i++;
    td5.append(btn1);
    td5.append(btn2);

    td1.append(user.name);
    td2.append(user.email);
    td3.append(user.phone);
    td4.append(user.address);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    table.append(tr);
    console.log(Users);

}

function remove(x) {
    document.getElementById(x).remove();
    Users.splice(x,1);
    console.log(Users);
}