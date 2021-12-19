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

//DOM - Document Object Model
//e = event
document.querySelector('button').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked' //changes the text of the actual button
})