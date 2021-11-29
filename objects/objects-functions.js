let myBook = { //declaring an object called myBook with its respective parameters in the curly braces
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challenge area
//create function - take fahrenheit in - return an object with all three

let tempFunc = function (fahrenheit) {
    let temp = {
        f: fahrenheit,
        c: (fahrenheit - 32) * (5 / 9),
        k: (fahrenheit + 459.67) * (5 / 9)
    }
    return temp
}

let temps = tempFunc(32)
console.log(temps)