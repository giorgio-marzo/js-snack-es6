/*
Esercizio di oggi: Snack Array e
Oggetti cartella/repo ****js-snack-es6


Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.
*/
const bici = [
    {name: 'Bianchi', peso:72},
    {name: 'Look', peso:69},
    {name: 'Pinarello', peso:78},
    {name: 'Trek', peso:84},

]

// definisco una variabile di partenza della prima posizione dell'elemento dell'array da confronare con le sucessive
let biciLeggera = bici[0]

//ciclo l'array
for(let i=0; i<bici.length; i++){

    if(biciLeggera.peso > bici[i].peso){
        biciLeggera = bici[i]
    }

}

console.log(biciLeggera)

/*
Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creazione array di squadre 
const team = [
    {name: 'Juve', punti:0, falli:0},
    {name: 'Milan', punti:0, falli:0},
    {name: 'Inter', punti:0, falli:0},
    {name: 'Roma', punti:0, falli:0},

]

// genero numeri casuali attraverso una funzione

const generateRandomNumbers = (min, max) => {

    return Math.floor(Math.random() * (max - min) + 1) + min

}

// ciclo l'array per assagnare i  punti e falli casuali 

for(let i=0; i<team.length; i++){

    team[i].punti = generateRandomNumbers(40, 80);
    team[i].falli = generateRandomNumbers(40, 80);
}

console.log(team);


// creo un array di solo nomi squadre e falli

const squadre = [];

for(let i=0; i<team.length; i++){

    let nomiEfalli = {
        name: team[i].name,
        falli: team[i].falli
    }

    squadre.push(nomiEfalli)
}

console.log(squadre)
