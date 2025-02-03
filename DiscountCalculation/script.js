function calculateFinalPrice(productName, originalPrice, discountPercentage, taxPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let priceAfterDiscount = originalPrice - discountAmount;
    let taxAmount = priceAfterDiscount * (taxPercentage / 100);
    let finalPrice = priceAfterDiscount + taxAmount;

    console.log("\n--- Final Price Calculation ---");
    console.log("Product Name: " + productName);
    console.log("Original Price: $" + originalPrice.toFixed(2));
    console.log("Discount Amount: $" + discountAmount.toFixed(2));
    console.log("Price After Discount: $" + priceAfterDiscount.toFixed(2));
    console.log("Tax Amount: $" + taxAmount.toFixed(2));
    console.log("Final Price After Tax: $" + finalPrice.toFixed(2));
}

let productName = "Laptop";
let originalPrice = 1000;
let discountPercentage = 10;
let taxPercentage = 8;

calculateFinalPrice(productName, originalPrice, discountPercentage, taxPercentage);
