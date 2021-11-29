let myBook = { //declaring an object called myBook with its respective parameters in the curly braces
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook) //prints a dict with all the object's parameters
console.log(myBook.title) //prints the specific object parameter as a string
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`) //this will now print Animal Farm as the title instead of 1984

//Challenge Area

//name, age, location
let hyooman = {
    name: 'Finn the human',
    age: 13,
    location: 'Ooo'
}

console.log(`${hyooman.name} is ${hyooman.age} and lives in ${hyooman.location}.`) //prints: Finn the human is 13 and lives in Ooo.

hyooman.age = 13 + 1

console.log(`${hyooman.name} is ${hyooman.age} and lives in ${hyooman.location}.`) //prints: Finn the human is 14 and lives in Ooo.
