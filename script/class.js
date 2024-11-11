// le classi in JS sono un metodo ALTERNATIVO di creare delle funzione costruttore
// lo scopo è sempre il medesimo: creare in modo robusto MOLTI oggetti dello stesso tipo

class Person {
  // inseriamo le proprietà
  constructor(_firstName, _lastName, _address, _email) {
    // qui dentro inserite le proprietà il cui valore viene determinato da un parametro
    this.firstName = _firstName
    this.lastName = _lastName
    this.address = _address
    this.email = _email
  }

  // notate come al di fuori del constructor non ci vada "this." prima del nome della proprietà
  numberOfLegs = 2 // questo valore NON CAMBIA da persona a persona, quindi
  // sarebbe uno "spreco" metterlo nel constructor dove invece vanno inserite le proprietà
  // con valore "dinamico" (perchè è solo lì che avete accesso ai parametri!)

  showCompleteName = function () {
    // return 'Hello! My name is ' + this.firstName + ' ' + this.lastName
    return `Hello! My name is ${this.firstName} ${this.lastName}`
  }
}

const mario = new Person(
  'Mario',
  'Bros',
  'Mushroom Kingdom 1',
  'mario@nintendo.com'
)

console.log(mario)

console.log(mario.showCompleteName()) // `Hello! My name is Mario Bros`

const luigi = new Person(
  'Luigi',
  'Bros',
  'Mushroom Kingdom 1',
  'luigi@nintendo.com'
)

//
