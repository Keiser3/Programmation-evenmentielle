var nomEtudiant = 'Benrabiaa';
var prenomEtudiant = 'Ayman';
var a = 2, b=3, c;
function ConvertToseconds(n){

    return n*60;
}
function Surface(b,h){
    return (b*h)/2;
}
c = a;
a = b;
b = c;
document.getElementById("p1").innerHTML = "Bonjour je m'appelle" + " " + nomEtudiant+" "+ prenomEtudiant;

document.write(ConvertToseconds(10));

alert(Surface(10,5));