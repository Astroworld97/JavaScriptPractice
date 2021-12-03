let num = 103.941

console.log(num.toFixed(2)) //to specify the number of digits after the decimal point

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

console.log(Math.random()) //generates a random number between zero and one

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//gets a random number between 10 and 20
console.log(randomNum)

//challenge area
// range: 1 and 5 - true if correct - false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum === guess
}

console.log(makeGuess(1))