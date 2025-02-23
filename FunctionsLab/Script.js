const prompt = require('prompt-sync')();

function calculateBill(units) {
    let bill = 0;
    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 300) {
        bill = (100 * 5) + ((units - 100) * 7);
    } else {
        bill = (100 * 5) + (200 * 7) + ((units - 300) * 10);
    }
    return bill;
}

function generateBillMessage(name, units) {
    const totalBill = calculateBill(units);
    return `Hello ${name}, your electricity bill for ${units} units is $${totalBill}.`;
}

const name = prompt("Enter customer name: ");
const units = parseInt(prompt("Enter electricity units used: "), 10);

if (isNaN(units) || units < 0) {
    console.log("Invalid input. Please enter a valid number of units.");
} else {
    console.log(generateBillMessage(name, units));
}
