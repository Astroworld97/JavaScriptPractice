//DOM - Document Object Model

// const p = document.querySelector('h1')
// p.remove()

//Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.textContent = '******'
    //p.remove()
})