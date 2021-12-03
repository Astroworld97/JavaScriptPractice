let nombre = ' Andrew Mead '

//length property
console.log(nombre.length)

//convert to upper case
console.log(nombre.toUpperCase())

//convert to lower case
console.log(nombre.toLowerCase())

//includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

//trim - trims whitespace from the string
console.log(nombre.trim())

//challenge area

//isValidPassword

let isValidPassword = function (s) {
    return (s.length > 8 && !s.includes('password'))
}

//length is more than 8 - and it doesn't contain the word password

console.log(isValidPassword('lalalalalalalala123'))