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

//You have 2 todos left (p element)
//Add a p for each todo above (use text value)

const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

const b = document.querySelector('body')
let uncompletedCounter = 0
for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (!todo.completed){
        uncompletedCounter++
    }
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todo.text
    b.appendChild(newParagraph)
}

//Listen for new todo creation
document.querySelector('button').addEventListener('click', function(e){
    console.log('Adding a new todo ')
})
// const uncompletedCount = document.createElement('p')
// uncompletedCount.textContent = `You have ${uncompletedCounter} todos left`
// b.appendChild(uncompletedCount)

// console.log(uncompletedCounter)

