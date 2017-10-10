//var questions = [
//    {
//        ques : "Est-ce que tu aimes le Javascript ? ",
//        ans : "Oui"
//    },
//    {
//        ques : "Le Javascript est une évolution de Java ?",
//        ans : "Non"
//    },
//    {
//        ques : "Le Javascript est proche du Java ?",
//        ans : "Non"
//    },
//    {
//        ques : "Le Javascript est un langage d'objet par prototypage ?",
//        ans : "Oui"
//    },
//    {
//        ques : "Le Javascript est souvent utilisé côté client ?",
//        ans : "Oui"
//    }
//];
//
//console.log("Avec la boucle for :\n\n")
//
//for (var i = 0; i < questions.length; i++)
//    {
//        var result = prompt(questions[i].ques);
//
//        if (result.toLowerCase() == questions[i].ans.toLowerCase())
//            {
//                console.log("Bonne réponse pour la question : " + questions[i].ques);
//            }
//        else {
//            console.log("Mauvaise réponse. La bonne réponse à : " + questions[i].ques + " était " + questions[i].ans);
//        }
//    }
//
//console.log("\nAvec la boucle while :\n\n")
//
//
//var index = 0;
//
//while (index < questions.length)
//{
//    var result = prompt(questions[index].ques);
//
//    if (result.toLowerCase() == questions[index].ans.toLowerCase())
//        {
//            console.log("Bonne réponse pour la question : " + questions[index].ques);
//        }
//    else {
//        console.log("Mauvaise réponse. La bonne réponse à : " + questions[index].ques + " était " + questions[index].ans);
//    }
//    index++;
//}

function testChaine(arg1) 
{
    arg1 = "changement";
    console.log(arg1);
}

function testTab(arg1)
{
    arg1[1] = "changement";
    console.log(arg1);
}

var str = "String";



const tab = ["test1", "test2", "test3"];

tab = "test";
console.log(tab);

console.log("\n\nAvant la fonction, tab vaut : ")
console.log(tab);

console.log("\nAppel de la fonction : ");
testTab(tab);

console.log("\nAprés la fonction, tab vaut : ");
console.log(tab);

