//equality operator: ===
//not equal operator: !==
// less than operator: <
// greater than operator: >
// less than or equal to operator: <=
// greater than or equal to operator: >=

// let temp = 80
// let isFreezing = (temp === 31) //note: the equality operator in JS is three equals sign

// let nombre = 'Andy'
// let isNombre = nombre === 'Andy '  //note: works for strings too!

let temp = 111

if (temp <= 32) {
    console.log('It is freezing outside!')
}

if (temp >= 110) {
    console.log('It is way too hot outside!')
}

//challenge area

//create age set to your age
// let age = 69
// isChild = age <= 7
// isSenior = age >= 65

// console.log(isChild)
// console.log(isSenior)

let age = 65

//if 7 or under print message about child pricing
if (age <= 7) {
    console.log('You will receive the child price!')
}
//if 65 or older print message about senior discount
if (age >= 65) {
    console.log('You will receive the senior price!')
}