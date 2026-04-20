function calculateBill(cart1) {
    const subtotal = cart1.reduce((acc, item) => {
        return acc + (item.price * item.qty);
    }, 0);
    const discount = subtotal > 50000 ? subtotal * 0.10 : 0;
    const afterDiscount = subtotal - discount;
    const gst = afterDiscount * 0.18;
    const shipping = subtotal > 30000 ? 0 : 500;
    const total = afterDiscount + gst + shipping;
    return {
        subtotal,
        discount,
        gst,
        shipping,
        total
    };
}
const cart1 = [
  { name: "Laptop", price: 50000, qty: 1 },
  { name: "Mouse", price: 800, qty: 2 },
  { name: "Keyboard", price: 1500, qty: 1 }
];
console.log(calculateBill(cart1));             