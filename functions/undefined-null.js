//undefined for variable
let nombre

if (nombre === undefined) {
    console.log('Please provide a name')
} else {
    console.log(nombre)
}

console.log(nombre) //prints undefined. Undefined is used in JS to indicate the absence of a value.

//Undefined for function arguments
let square = function (num) {
    console.log(num)
}

square() //when an argument isn't provided, but it is named in the function definition, undefined is assigned as its value

//Undefined as function return default value
let result = square()
console.log(result) //prints undefined bc return is not used anywhere in the square() fxn

//Null as assigned value
//note: you can assign a variable to be undefined. But if you see the word undefined, you know it is a system assigned word, vs null, which will always be assigned by the programmer in JS
let age = 27

age = null //another way to write this: age = undefined

console.log(age)