//const notes = ['Note 1', 'Note 2', 'Note 3']
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eat a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]



const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) { //defining a function called findNote
    const index = notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) { //returns the note where either the title or the body has a substring that matches the query in lower case
    const filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    return filteredNotes
}

//console.log(findNotes(notes, 'work'))

// console.log(filteredNotes)

// const findNote = function (notes, noteTitle) { //defining a function called findNote
//     const index = notes.findIndex(function (note, index) { //defining a function called index
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index] //return the note by its index in the notes array
// }

// const note = findNote(notes, 'Office modification')
// console.log(note)

//console.log(notes.indexOf({})) //is supposed to check where there is an empty object in the array, pero como usa el "===", el cual busca objetos que son iguales en memoria, te dice que {} no está en el array

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })

// console.log(index)

// notes.pop() //removes the last item in the array
// notes.push('My new note') //pushes to the list
// notes.shift() //removes the first item in the array
// notes.unshift('My first note') //adds an element to the beginning of the array

//notes.splice(1, 1) //start at the index of 1 and remove one item
//notes.splice(1, 0, 'This is the new second item') //adds an item
//notes.splice(1, 1, 'This is the new second item') //performs the actions of the previous two at the same time

// notes[2] = 'This is now the new note 3' //reassigns a value at a position

// notes.forEach(function (item, index) { //performs the action for each item in the array. This is a callback function: a function within a function.
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)
//console.log(notes[0]) //indexing the array
//console.log(notes[22]) //returns undefined
//console.log(notes[notes.length - 2])

// console.log(notes.indexOf('Note 2')) //returns the item's position in the array
// console.log(notes.indexOf('jimmy neutron')) //returns -1 if the item is not in the array
// //Counting up
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// //counting down
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }


// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }