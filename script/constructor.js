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

// se mi trovassi a dover "generalizzare" una persona (la struttura che ho scritto per p1) al fine di creare altri oggetti dotati della stessa struttura ecco che invece di copiare/incollare righe di codice (o scrivere a mano ogni volta) è possibile creare una FUNZIONE COSTRUTTORE, al fine di inserire nel codice la struttura dell'oggetto una volta sola (DRY)

const Person = function (_firstName, _lastName, _address, _email) {
  // questa è una funzione COSTRUTTORE
  // per convenzione si utilizza la nomenclatura PascalCase
  this.firstName = _firstName
  this.lastName = _lastName
  this.address = _address
  this.email = _email

  this.showCompleteName = function () {
    // return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
    return `Hello! My name is ${this.firstName} ${this.lastName}`
  }
}

const student1 = new Person(
  'Stefano',
  'Casasola',
  'Largo Colombo',
  'stefanocasasola@gmail.com'
) // implemento una ISTANZA della funzione costruttore

const student2 = new Person(
  'Lorenzo',
  'Lione',
  'Piazza dei Giardini',
  'lorenzo.lione@gmail.com'
)

const student3 = new Person(
  'Emanuele',
  'Lazzaro',
  'Vicolo Corto',
  'emanuele.lazzaro@gmail.com'
)
console.log('STUDENT1', student1)
console.log('STUDENT2', student2)
console.log('STUDENT3', student3)

console.log(student1.showCompleteName())
console.log(student2.showCompleteName())
console.log(student3.showCompleteName())

// questo è il concetto fondamentale :)
// poi, nel corso delle evoluzioni di JS, sempre al fine di attrarre nuovi sviluppatori, è stato
// introdotta la keyword "class", che di fatto si comporta come le classi nei linguaggi fortemente
// tipizzati come Java e C#
// "class" è un altro modo di dichiarare una funzione costruttore

// proseguiamo su "class.js"
