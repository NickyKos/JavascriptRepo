const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employees = [
    { name: 'Alice', salary: 45000 },
    { name: 'Joseph', salary: 90000 },
    { name: 'David', salary: 18500 },
    { name: 'Danny', salary: 25000 },
    { name: 'Yash', salary: 120000 }
];

rl.question('Enter salary threshold: ', (threshold) => {
    threshold = parseFloat(threshold);
    let filteredEmployee = employees.filter(emp => emp.salary >= threshold);
    console.log('\nEmployees above threshold:', filteredEmployee);

    rl.question('Enter salary increase percentage (as decimal): ', (percentage) => {
        percentage = parseFloat(percentage);
        employees = employees.map(emp => ({
            ...emp,
            salary: emp.salary + (emp.salary * percentage)
        }));
        console.log('\nUpdated Employee Salaries:', employees);

        let totalPayroll = employees.reduce((total, emp) => total + emp.salary, 0);
        console.log('\nTotal Payroll Cost:', totalPayroll);
        rl.close();
    });
});