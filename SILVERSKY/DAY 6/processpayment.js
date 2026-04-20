function processPayment(amount) {
    try {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }

        console.log("Payment successful");
    } catch (error) {
        console.log("Payment failed:", error.message);
    }
}
processPayment(100); // Payment successful
processPayment(-50); // Payment failed: Invalid amount