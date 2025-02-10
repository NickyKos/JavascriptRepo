const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of customers: ", (numCustomers) => {
    let count = 0;

    function processCustomer() {
        if (count >= numCustomers) {
            rl.close();
            return;
        }

        rl.question("Enter customer name: ", (name) => {
            rl.question("Enter account balance: ", (balance) => {
                rl.question("Enter number of years: ", (years) => {
                    balance = parseFloat(balance);
                    years = parseInt(years);
                    let interestRate;

                    if (balance < 1000) {
                        interestRate = 0.02;
                    } else if (balance <= 5000) {
                        interestRate = 0.05;
                    } else {
                        interestRate = 0.08;
                    }

                    let newBalance = balance * (1 + interestRate * years);

                    console.log(`Customer: ${name}`);
                    console.log(`Interest Rate: ${(interestRate * 100).toFixed(2)}%`);
                    console.log(`New Balance after ${years} years: $${newBalance.toFixed(2)}`);
                    console.log("----------------------------");

                    count++;
                    processCustomer();
                });
            });
        });
    }

    processCustomer();
});
