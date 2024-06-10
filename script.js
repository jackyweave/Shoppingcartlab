// Sample Shopping Cart Implementation
const shoppingCart = [];

// Function to add item to the shopping cart
function addItemToCart(name, price) {
    shoppingCart.push({ name, price });
}

// Sample products
const products = [
    { name: 'Product A', price: 10 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 15 }
];

// Add event listeners to "Add" buttons for each product
products.forEach(product => {
    const addButton = document.getElementById(product.name);
    addButton.addEventListener('click', () => {
        addItemToCart(product.name, product.price);
    });
});

// Function to calculate total cost
function calculateTotalCost() {
    let total = 0;
    shoppingCart.forEach(item => {
        total += item.price;
    });
    return total;
}

// Display items in the shopping cart and total cost
function displayShoppingCart() {
    shoppingCart.forEach(item => {
        console.log(`${item.name}: $${item.price}`);
    });
    console.log(`Total: $${calculateTotalCost()}`);
}

// Event listener for the "Check Out" button
const checkOutButton = document.getElementById('checkOut');
checkOutButton.addEventListener('click', () => {
    displayShoppingCart();