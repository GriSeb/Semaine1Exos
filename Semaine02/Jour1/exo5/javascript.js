var multiplication = function(chiffre1, chiffre2) {
    return (chiffre1 * chiffre2);
}

var addition = function(chiffre1, chiffre2) {
    return (chiffre1 + chiffre2);
}
var division = function(chiffre1, chiffre2) {
    if (chiffre2 != 0)
        return (chiffre1 / chiffre2);
    else
        console.log("\n\nPas de division par 0");
}
var soustraction = function(chiffre1, chiffre2) {
    return (chiffre1 - chiffre2);
}
var modulo = function(chiffre1, chiffre2) {
    if (chiffre2 != 0)
        return (chiffre1 % chiffre2);
    else
        console.log("\n\nPas de modulo par 0");}

chiffre1 = parseInt(prompt("Veuillez entrer un premier chiffre : "));
chiffre2 = parseInt(prompt("Veuillez entrer un second chiffre : "));

console.log("La multiplication de " + chiffre1 + " par " + chiffre2 + " vaut : " + multiplication(chiffre1, chiffre2));
console.log("\n\nL'addition de " + chiffre1 + " par " + chiffre2 + " vaut : " + addition(chiffre1, chiffre2));
console.log("\n\nLa division de " + chiffre1 + " par " + chiffre2 + " vaut : " + division(chiffre1, chiffre2));
console.log("\n\nLa soustraction de " + chiffre1 + " par " + chiffre2 + " vaut : " + soustraction(chiffre1, chiffre2));
console.log("\n\nLe modulo de " + chiffre1 + " par " + chiffre2 + " vaut : " + modulo(chiffre1, chiffre2));