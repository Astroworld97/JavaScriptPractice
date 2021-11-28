// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//challenge area

//converFahrenheitToCelsius

let convertFahrenheitToCelsius = function (temp) {
    let cels = (temp - 32) * (5 / 9)
    return cels
}

//Call a couple of times (32 -> 0) (68 -> 20)

let firstConv = convertFahrenheitToCelsius(32)
let secondConv = convertFahrenheitToCelsius(68)

//print the converted values

console.log(firstConv) //prints 0
console.log(secondConv) //prints 20