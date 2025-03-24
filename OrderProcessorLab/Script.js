function createOrderProcessor() {
    let processedCount = 0; // Closure variable

    return function processOrder(order, callback) {
        console.log(`Processing order: ${order}`);
        processedCount++; // Increment 
        callback(processedCount); // Callback with count
    };
}

function notifyCustomer(count) {
    console.log(`Order completed. Total processed orders: ${count}`);
}

// Order processor
const processOrder = createOrderProcessor();

// Process orders
processOrder("Laptop", notifyCustomer);
processOrder("Mobile", notifyCustomer);
processOrder("Headphones", notifyCustomer);
