/**
 * October 6th Assignment
 *      Part 1 & 2 (Morning & Afternoon): Product Database Exploration
 */

/**
 * Product Database Exploration
 * Description:
 * You are given a dataset containing information about various products in an online store. 
 * The dataset is in the form of an array of product objects. Each product object contains details like name, price, category, and ratings.
 * We will declare a variable below to use for the sample database
 * 
 * Q1. Print each product's name to the console.
 * Q2. List all products that are under $100
 * Q3. Create a new array containing the names of all products.
 * Q4. Are there any products with a rating below 3?
 * Q5. Are all the products below $1500?
 * Q6. Retrieve the first product that belongs to the 'Electronics' category
 * Q7. Calculate the total cost of all products combined.
 * Q8. Create a new array containing the average rating of each product.
 * 
 * Hint: For each of the tasks, consider which of the array methods would be the best fit to complete the task. 
 * Then, consider what action needs to be performed on each of the items in the array
 */

const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics', ratings: [5, 5, 4, 4, 5] },
    { name: 'Shirt', price: 20, category: 'Apparel', ratings: [4, 3, 5, 4, 4] },
    { name: 'Microwave', price: 150, category: 'Electronics', ratings: [4, 5, 4, 5] },
    { name: 'Shoes', price: 50, category: 'Apparel', ratings: [5, 5, 4, 4] },
    { name: 'Bag', price: 70, category: 'Apparel', ratings: [3, 4, 3, 4, 4] },
    { name: 'Headphones', price: 100, category: 'Electronics', ratings: [5, 5, 5, 4, 4] }
];
// Write your code below this line -->