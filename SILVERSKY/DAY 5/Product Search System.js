// 8️⃣ Product Search System
// Given products:
// Search by name (partial match)
// Filter by price range
// Filter by category
// Sort by rating or price
// Create one function that handles all cases dynamically.
products = [
    { name: "Laptop", category: "Electronics", price: 50000, rating: 4.5 },
    { name: "Mouse", category: "Electronics", price: 800, rating: 4.0 },    
    { name: "Keyboard", category: "Electronics", price: 1500, rating: 4.2 }
];
function searchProducts(products, options) {
    let result = [...products];//shallow copy of products created by ...
    if (options.name) {
        const searchTerm = options.name.toLowerCase();
        result = result.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }
    if (options.category) {
        result = result.filter(product =>
            product.category === options.category
        );
    }
    if (options.minPrice !== undefined) {
        result = result.filter(product =>
            product.price >= options.minPrice
        );
    }
    if (options.maxPrice !== undefined) {
        result = result.filter(product =>
            product.price <= options.maxPrice
        );
    }
    if (options.sortBy) {
        const { sortBy, order = "asc" } = options;
        result.sort((a, b) => {
            if (order === "asc") {
                return a[sortBy] - b[sortBy];
            } else {
                return b[sortBy] - a[sortBy];
            }
        });
    }
    return result;
}
console.log(searchProducts(products, { name: "lap" }));