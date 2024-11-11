// parliamo di oggetti

// in JS (e in generale nella programmazione) un oggetto è una rappresentazione digitale di un entità che esiste nel mondo reale
// sono sostanzialmente dei contenitori per molteplici valori, definiti tramite coppie "key: value"

// come si dichiarano degli oggetti in JS?
const house = {
  // queste coppie definiscono delle "caratteristiche"
  color: 'yellow',
  numberOfFloors: 4,
  families: ['Rossi', 'Bianchi'],
  gardenSize: 25,
  // questa coppie che definiscono dei "comportamenti"
  explode: function () {
    // questa coppia che definisce un comportamento si chiama "metodo"
    console.log('BOOM!')
  },
}

// house.color -> 'yellow'
// house.gardenSize -> 25

house.explode() // console.log di 'BOOM'
// un oggetto è una serie di coppie chiave valore, se una coppia definisce una caratteristica viene chiamata "proprietà", se definisce un comportamento (se il suo valore è una funzione) viene chiamata "metodo".

house.__proto__ // Object

// altro esempio
const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  // sayHello viene di seguito definito in due maniere: con una funzione "tradizionale" e una funzione "arrow" (freccia)
  // sayHello: function() {
  //   console.log('Ciao, sono Mario Rossi')
  // },
  sayHello: () => {
    console.log('Ciao, sono Mario Rossi', this)
  },
}

// FUNZIONE FRECCIA: apporta 2 modifiche alle funzioni normali
const somma1 = function (num1, num2) {
  return num1 + num2
}

// 1) se la funzione freccia è "monoriga", è possibile omettere le graffe insieme alla parola "return"
const somma2 = (num1, num2) => num1 + num2

somma1(5, 6) // torna 11
somma2(5, 6) // torna 11

// 2) una funzione freccia apporta un differente significato alla parola "this"
// una funzione freccia NON possiede un proprio riferimento per "this", ma eredita quello "circostante"