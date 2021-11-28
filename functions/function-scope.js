//Global scope (convertFahrenheitToCelsius, firstConv, secondConv)
//Local scope (temp, cels)
//Local scope (isFreezing)

let convertFahrenheitToCelsius = function (temp) {
    let cels = (temp - 32) * (5 / 9)

    if (cels <= 0) {
        let isFreezing = true
    }

    return cels
}

//Call a couple of times (32 -> 0) (68 -> 20)

let firstConv = convertFahrenheitToCelsius(32)
let secondConv = convertFahrenheitToCelsius(68)

//print the converted values

console.log(firstConv) //prints 0
console.log(secondConv) //prints 20