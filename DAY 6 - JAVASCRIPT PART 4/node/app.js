//main application app.js

//import necessary modules
const products = require('./product.js');
const cart = require('./cart.js');
const calculateTotal = require('./order.js');


//Add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

//Display the cart items
console.log('Cart Items', cart.getCartItems());

//Calculate and siplay the order amount
const totalAmount = calculateTotal(cart.getCartItems())
console.log('otal order amount', totalAmount );