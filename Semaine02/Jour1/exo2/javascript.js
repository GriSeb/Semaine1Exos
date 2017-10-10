var fruits = ["Bananes", "Oranges", "Fraises", "Citrons", "Ananas"];

console.log("Tableau Initial \n\n");

for (var i = 0; i < fruits.length; i++)
    {
        console.log(fruits[i]);
    }

for (var i = 0; i < fruits.length; i++)
    {
        if (fruits[i] === "Citrons")
            {
                console.log("\n\nChangement de " + fruits[i] + " en Pastèque.\n");
                fruits[i] = "Pasteque";
                break;
            }
    }

console.log("\n\nTableau après modification\n\n");

for (var i = 0; i < fruits.length; i++)
    {
        console.log(fruits[i]);
    }