//Note: var is deprecated in JS. Use let and const instead.

var firstName = 'Andrew'
firstName = 'Mike'

var firstName = 'Jen' //this would give you an error with let or const, but not with var

console.log(firstName)

//Also, the scope of var is different. It treats local variables as global variables.