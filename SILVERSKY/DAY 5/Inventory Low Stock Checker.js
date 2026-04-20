// 5️⃣ Inventory Low Stock Checker
// Given products array:
// {
//   name,
//   category,
//   stock,
//   price
// }
// Write function to:
// Find low stock items (< 10)
// Calculate total inventory value
// Find category with highest stock count
// Sort products by stock descending
function inventory_low_stock_checker(products) {
    const lowstockitem=products.filter(product=>product.stock<10);
    const totalinventoryvalue=products.reduce((acc,product)=>acc+(product.stock*product.price),0);
    const categoryStockCount = products.reduce((count, product) => {
    // If category not yet created, set it to 0
    if (count[product.category] === undefined) {
        count[product.category] = 0;
    }
    // Add stock
    count[product.category] += product.stock;
    return count;
}, {});
    let maxStockCategory = null;
    let maxStockCount = -1;
    for (const category in categoryStockCount) {
    if (categoryStockCount[category] > maxStockCount) {
        maxStockCount = categoryStockCount[category];
        maxStockCategory = category;
    }
}
    const sort_products=products.sort((a,b)=>b.stock-a.stock);
    //it means simply if stock of product b is greater than stock of product a then return positive value and it will sort in descending order
    return {
        lowstockitem,
        totalinventoryvalue,
        maxStockCategory,
        sort_products
    };
}
let products = [
    { name: "Laptop", category: "Electronics", stock: 5, price: 50000 },
    { name: "Mouse", category: "Electronics", stock: 15, price: 800 },  
    { name: "Keyboard", category: "Electronics", stock: 8, price: 1500 },
    { name: "Shirt", category: "Clothing", stock: 20, price: 1200 },
    { name: "Jeans", category: "Clothing", stock: 12, price: 2000 },
    { name: "Sofa", category: "Furniture", stock: 3, price: 25000 },
    { name: "Table", category: "Furniture", stock: 7, price: 15000 }
];
console.log(inventory_low_stock_checker(products));