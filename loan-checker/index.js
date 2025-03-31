const prompt = require('prompt-sync')();

// Get user input
const score = parseInt(prompt('Enter your credit score: '));
const income = parseFloat(prompt('Enter your monthly income: '));
const loanAmt = parseFloat(prompt('Enter requested loan amount: '));

// Function to check credit score
function checkCreditScore(score) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (score >= 700) {
                resolve('Credit is good');
            } else if (score >= 600) {
                resolve('Credit is average');
            } else {
                reject('Loan rejected due to poor credit score');
            }
        }, 2000);
    });
}

// Function to check income
function checkIncome(income, loanAmt) {
    return new Promise((resolve, reject) => {
        if (income * 10 >= loanAmt) {
            resolve('Income check passed');
        } else {
            reject('Loan rejected; Income too low');
        }
    });
}

// Chaining the promises
checkCreditScore(score)
    .then((creditMessage) => {
        console.log(creditMessage);
        return checkIncome(income, loanAmt);
    })
    .then((incomeMessage) => {
        console.log(incomeMessage);
        console.log('Loan Approved');
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
