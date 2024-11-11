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

  showCompleteName() {
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

// Ora andiamo a definire una classe per un Developer
// un Developer ha un firstName, un lastName etc.... perchè è una persona!
class Developer extends Person {
  // Developer è definita SOTTO-CLASSE di Person
  // Person è la SUPER-CLASSE di Developer
  // Person è sempre accessibile nella sotto-classe tramite la parola "super"
  constructor(_firstName, _lastName, _address, _email, _knownLanguages) {
    // in particolare, "super()" invoca il COSTRUTTORE di Person

    // this.firstName = _firstName
    // this.lastName = _lastName
    // this.address = _address
    // this.email = _email
    // invece di riscrivere questo...
    // ...invochiamo il costruttore di Person dalla nostra classe Developer!
    super(_firstName, _lastName, _address, _email)
    // questa invece si aggiunge "on-top" perchè è una proprietà specifica per i Developer
    this.knownLanguages = _knownLanguages
  }

  showCompleteName() {
    return super.showCompleteName() + ' and I am a developer'
  }
}

const yoshi = new Developer(
  'Yoshi',
  'Bros',
  'Mushroom Kingdom 2',
  'yoshi@nintendo.com',
  ['HTML', 'CSS', 'JS']
)

console.log('yoshi', yoshi.showCompleteName())

class GameDeveloper extends Developer {
  constructor(
    _firstName,
    _lastName,
    _address,
    _email,
    _knownLanguages,
    _favouriteEngine
  ) {
    super(_firstName, _lastName, _address, _email, _knownLanguages)
    this.favouriteEngine = _favouriteEngine
  }

  showCompleteName() {
    return super.showCompleteName() + ' of videogames'
  }
}

const wario = new GameDeveloper(
  'Wario',
  'Bros',
  'Money Kingdom',
  'wario@nintendo.com',
  ['c++'],
  'unity'
)

wario.numberOfLegs = 4
console.log('wario', wario)
console.log('wario', wario.showCompleteName())
