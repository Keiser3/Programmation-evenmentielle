let etudiant = [
    {
      prenom: "Ayman",
      note: "20",
    },
    {
      prenom: "anas",
      note: "19",
    },
    {
        prenom: "achraf",
        note: "19",
    },
    {
        prenom: "hamid",
        note: "18",
    },
    {
        prenom: "said",
        note: "9",
    },
    {
        prenom: "abdjalil",
        note: "11",
    }
  ];


let table = "<table >"+ "<tr> <th> prenom</th> <th>note</th></tr> ";

for (let i = 0; i < etudiant.length; i++) {
    table += "<tr><td>" + etudiant[i].prenom + "</td> <td>"+ etudiant[i].note+ "</td></tr>";

}
table += "</table>";
document.getElementById("div1").innerHTML = table;
const keys = Object.keys(etudiant);
console.log(keys);