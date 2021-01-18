/* Maak en nieuwe map en nieuwe javascript file.
Maak een array genaamd colors met de kleuren: yellow, blue, red, orange.
Schrijf een while loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn. */

let colors = ["yellow", "blue", "red", "orange"];
let index = 0;
while (index < colors.lenght) {
    console.log(colors[index]);
    index++;
}

/* Gebruik dezelfde array als startpunt.
Schrijf een for loop die de kleuren in de console logged en stopt wanneer alle kleuren geprint zijn.
Gebruik de lengte van de array in je for loop: array.length
Het schrijven van een for of while loop kan best veel ruimte in beslag nemen. Daarnaast is het ook makkelijk om een foutje te maken.*/

let colors = ["yellow", "blue", "red", "orange"];

for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}

/* gebruik array.foreach */

const colors = ["yellow", "blue", "red", "orange"];

colors.forEach(element => console.log(element));

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
//Antwoord: for loop en while loop nemen 3 regels in beslag.

// Hoeveel regels neemt mijn forEach method in beslag?
// Antwoord: 1 regel

//Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Beter leesbaar. Minder foutgevoelig. Staat maar op 1 regel.

//object met 5 properties loopen

const colors = {
    yellow: 1,
    blue: 2,
    red: 3,
    orange: 4,
    green: 5,
}

const keys = Object.keys(colors)
console.log(keys)

//ja ik ben nu aan het iriteren. Het betreft 1 herhaling.