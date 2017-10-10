var students = [
    {
        name : "Pierre",
        moyenne : "15",
        admis : true
    },
    {
        name : "Paul",
        moyenne : "18",
        admis : true
    },
    {
        name : "Jacques",
        moyenne : "8",
        admis : false
    },
    {
        name : "Manon",
        moyenne : "5",
        admis : false
    }
];

for (var i = 0; i < students.length; i++)
{
    if (students[i].admis)
        console.log(students[i].name + " est admis avec " + students[i].moyenne + " de moyenne !");
    else
        console.log(students[i].name + " n'est pas admis. Il lui manque " + (10 - parseInt(students[i].moyenne)) + " points pour l'être !");

}

do {
    var result = prompt("Indiquer quel paragraphe vous souhaitez supprimer : (entre 1 et 5)");
}while (parseInt(result) <= 0 || parseInt(result) > 5);

result = parseInt(result);
document.getElementsByTagName("p")[result - 1].innerHTML = "Changement.";
