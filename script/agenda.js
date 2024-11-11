// recuperiamo i riferimenti ai 3 campi
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const phoneInput = document.getElementById('phone')

// riferimento al form
const myForm = document.getElementById('user-form')

// creiamo la classe User
class User {
  constructor(_firstName, _lastName, _phone) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
  }
}

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const utente = new User(
    firstNameInput.value,
    lastNameInput.value,
    phoneInput.value
  )

  console.log('UTENTE CREATO', utente)
})
