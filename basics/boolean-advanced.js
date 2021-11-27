let isAccountLocked = true
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Is account locked')
} else {
    console.log('Welcome!')
}

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('Welcome!')
}

//challenge area

let temp = 4

//it is freezing outside!
if (temp <= 32) {
    console.log('It is freezing outside!')
}
//it is hot outside
else if (temp >= 110) {
    console.log('it is hot outside!')
}
//it is pretty nice
else {
    console.log('It is pretty nice')
}