//Create an array with five todos
//You have x todos
//print the first and second to last items -> Todo: walk the dog
todos = ['Eat breakfast', 'Study Chinese', 'Do hw', 'Study JS', 'Recoger el cuarto']

//Delete the 3rd item
todos.splice(2, 1)

//Add a new item onto the end
todos.push('Buy coffee')

//Remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos.`)
//console.log(`First todo: ${todos[0]}. Second to last todo: ${todos[todos.length - 2]}`)

//1. The first item
//2. The second item

todos.forEach(function (todo, index) { //prints each todo in the array
    console.log(`${index + 1}. ${todo}`)
})

// for (let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }

