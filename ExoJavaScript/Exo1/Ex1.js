var Matieres = ['JS','Unix','PHP','SGBD','BI','ML','AI','LaTEx'];
Matieres.pop();
list = '<ul>';
for (let i= 0; i < Matieres.length; i++) {
    list+= '<li>' + Matieres[i] + '</li>';
}
list += '</ul>';
document.getElementById("d1").innerHTML = list;

