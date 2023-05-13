function test() {
    var origin = document.getElementById("mainDiv");
    var item1 = document.createElement('fieldset');
    origin.append(item1);
    var item2 = document.createElement('legend');
    item1.append(item2);
    item2.innerHTML = "legend";
    
    var item3 = document.createElement('div');
    item1.append(item3);
    
}



/*const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);*/