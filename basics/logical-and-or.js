let temp = 90

//logical And operator - true if both sides are true. False otherwise.

if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('do not go outside!')
} else {
    console.log('eh, do what u want')
}

//challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = true

//are both vegan? only offer vegan dishes
//at least one vegan? make sure to offer some vegan options
//else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('make sure to offer some vegan options')
} else {
    console.log('offer up anything on the menu')
}
