let myAccount = {
    nombre: 'Andrew',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    //account = {} //clears the account
    account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function (account, income) {
    account.income += income
}

//resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

//getAccountSummary
//Account for Andrew has $900. $1000 in income. $100 in expenses.

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.nombre} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

console.log(myAccount)

addIncome(myAccount, 1000)

addExpense(myAccount, 100)

console.log(myAccount)

console.log(getAccountSummary(myAccount))

resetAccount(myAccount)

console.log(getAccountSummary(myAccount))

