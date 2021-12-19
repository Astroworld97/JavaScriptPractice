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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''//wipes everything
    
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click', function(e){ //targeting button by its id
    e.target.textContent = 'The button was clicked' //changes the text of the actual button
})

document.querySelector('#remove-all').addEventListener('click', function(e){ //selects the button with index 1, i.e. the second button
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

