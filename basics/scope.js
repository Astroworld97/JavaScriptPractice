//global scope - defined outside of all code blocks
//local scope - defined inside a code block

//in a scope you can access variables defined in that scope, or in any parent/ancestor scope

//global scope - varOne
//local scope - varTwo

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo) //varTwo is in scope here

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

//console.log(varTwo) //varTwo is out of scope here