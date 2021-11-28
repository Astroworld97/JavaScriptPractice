let add = function (a, b, c) { //you can have as many arguments as you want
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments
let getScoreText = function (nombre = 'Anonymous', score = 0) { //nombre has a default value of 'Anonymous'. score has a default value of 0.
    return `Name: ${nombre} - Score: ${score}`
    //return 'Name: ' + nombre + ' - Score: ' + score
    // console.log(nombre)
    // console.log(score)
}

getScoreText()
getScoreText('Andrew', 100) //100 gets used instead of 0 bc the default value only gets used if there is no given argument value in the function call.

//challenge area
//total, tipPercent

let calcPayment = function (total, tipPercent = .2) {
    let payment = total + (total * tipPercent)
    return payment
}

console.log(calcPayment(100))
console.log(calcPayment(100, .3))

//note: single quotes and double quotes are equivalent in JS
//example:
console.log("andy" + " " + 'mead') //this works

//template strings: use ` `

let nom = 'Jimmy'
let edad = 12
console.log(`Hey, my name is ${nom}. I am ${edad} years old.`)

//Challenge area:
//A 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .2) {
    //return total * tipPercent
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tip = getTip(40, .25)

console.log(tip)

let tip2 = getTip(60)

console.log(tip2)