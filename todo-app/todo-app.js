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

//1. Setup a div contain for todos
//2. Setup filters (searchText) and wire up a new filter input to change it
//3. Create a renderTodos function to render and rerender the latest filtered data

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary) 

    filteredTodos.forEach(function(todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Adding a new todo ')
})

document.querySelector('#new-todo').addEventListener('input', function(e){
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// const b = document.querySelector('body')
// let uncompletedCounter = 0
// for (let i = 0; i < todos.length; i++) {
//     const todo = todos[i];
//     if (!todo.completed){
//         uncompletedCounter++
//     }
//     const newParagraph = document.createElement('p')
//     newParagraph.textContent = todo.text
//     b.appendChild(newParagraph)
// }
