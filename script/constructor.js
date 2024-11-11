// LA FUNZIONE COSTRUTTORE
// una funzione costruttore permette la facile creazione in serie di oggetti dotati delle stesse caratteristiche

let p1 = {
  firstName: 'Mario',
  lastName: 'Bianchi',
  address: 'Via Roma 1',
  email: 'mariobianchi@gmail.com',
  showCompleteName: function () {
    // return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
    return `Hello! My name is ${this.firstName} ${this.lastName}`
  },
}

let p2 = p1
p1 = null // questo NON elimina l'oggetto, ma solo il "puntatore"

console.log(p2.showCompleteName())

let a = 10
let b = a // 10
a = 20
// b? 10

let objA = { name: 'Stefano' }
let objB = objA // { name: 'Stefano' }
objA.name = 'Mario'
// objB.name è diventato "Mario" pure lui!

// const p1copy

// se mi trovassi a dover "generalizzare" una persona (la struttura che ho scritto per p1) al fine di creare altri oggetti dotati della stessa struttura ecco che invece di copiare/incollare righe di codice (o scrivere a mano ogni volta) è possibile creare una FUNZIONE COSTRUTTORE, al fine di inserire nel codice la struttura dell'oggetto una volta sola (DRY)