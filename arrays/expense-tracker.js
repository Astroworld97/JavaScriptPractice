const account = {
    name: 'Andrew Mead',
    expenses: [],
    addExpense: function (description, amount) {
        let toAdd = {
            description: description,
            amount: amount
        }
        this.expenses.push(toAdd)
    },
    getAccountSummary: function () {
        let name = this.name
        let expenses = this.expenses
        let total = 0
        for (let i = 0; i < expenses.length; i++) {
            total += expenses[i].amount
        }
        return `${name} has $${total} in expenses.`
    }
}

//expense -> description, amount
//addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.

// const addExpense = function (description, amount) {
//     let toAdd = {
//         description: description,
//         amount: amount
//     }
//     account.expenses.push(toAdd)
// }

// const getAccountSummary = function (account) {
//     let total = 0
//     for (let i = 0; i < account.expenses.length; i++) {
//         total += account.expenses[i]
//     }
//     return `${account.name} has $${total} in expenses.`
// }


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
//console.log(account.expenses)
console.log(account.getAccountSummary())