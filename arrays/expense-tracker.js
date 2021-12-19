const account = {
    name: 'Andrew Mead',
    income: [],
    expenses: [],
    addExpense: function (description, amount) {
        let toAdd = {
            description: description,
            amount: amount
        }
        this.expenses.push(toAdd)
    },
    addIncome: function (description, amount) {
        let toAdd = {
            description: description,
            amount: amount
        }
        this.income.push(toAdd)
    },
    getAccountSummary: function () {
        let name = this.name
        let expenses = this.expenses
        let income = this.income
        let balance = 0
        let totalIncome = 0
        let totalExpenses = 0
        for (let i = 0; i < income.length; i++) {
            totalIncome += income[i].amount
        }
        for (let i = 0; i < expenses.length; i++) {
            totalExpenses += expenses[i].amount
        }
        balance = totalIncome - totalExpenses

        return `${name} has a balance of $${balance}. $${totalIncome} in income.  $${totalExpenses} in expenses.`
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

//1. add income array to account
//2. addIncome method -> description, amount
//3. Tweak getAccountSummary

//Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

// account.addExpense('Rent', 950)
// account.addExpense('Coffee', 2)
// account.addIncome('Job', 1000)
account.addIncome('example', 100)
account.addExpense('example', 90)
//console.log(account.expenses)
console.log(account.getAccountSummary())