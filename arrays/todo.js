//Create an array with five todos
//You have x todos
//print the first and second to last items -> Todo: walk the dog
//const todos = ['Eat breakfast', 'Study Chinese', 'Do hw', 'Study JS', 'Recoger el cuarto'] //array

const todos = [{ //array of objects
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) { //-1 indicates not found
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.completed === false
    })
    return filteredTodos
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))

//1. convert array to array of objects-> text, completed
//2. create fxn to remove a todo by text value

// deleteTodo(todos, 'buy food')
// console.log(todos)


// //Delete the 3rd item
// todos.splice(2, 1)

// //Add a new item onto the end
// todos.push('Buy coffee')

// //Remove the first item from the list
// todos.shift()

// console.log(`You have ${todos.length} todos.`)
// //console.log(`First todo: ${todos[0]}. Second to last todo: ${todos[todos.length - 2]}`)

// //1. The first item
// //2. The second item

// todos.forEach(function (todo, index) { //prints each todo in the array
//     console.log(`${index + 1}. ${todo}`)
// })

// for (let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }

