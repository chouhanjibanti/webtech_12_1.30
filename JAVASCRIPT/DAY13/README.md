Spread and Rest Operator :- 

Spread :- Merge data . -> ...

===============================
1. Write a function calculateTotal() that accepts unlimited product prices and returns the total.

calculateTotal(200, 300, 150, 400)

------------------------------------------------

2. Clone User Profile (Spread Operator)
Question:
Create a copy of the user object using the spread operator and change the city.
const user = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};

change the name of the city using the new object and dispaly using the original user.

------------------------------------------------


3. Find Maximum Number (Spread Operator) -> Math.max
Question:
Use the spread operator to solve this
const numbers = [10, 50, 20, 80, 30]; -> answer - 80


const numbers = [10, 50, 20, 80, 30];
const MaxNumber = Math.max(...numbers)
console.log(MaxNumber);

------------------------------------------------

4. Update Product Details (Spread Operator)

Scenario:
An eCommerce app wants to update only the price of a product without modifying the original object.

Question:
Use spread operator.
const product = {
  name: "Laptop",
  price: 50000
};
Update price → 55000

-----------------------------------------------

5. Separate First Element and Rest (Rest Operator)
Scenario:
In a queue system, you want to separate the first person and the remaining people.
using the function -> "Aman","Rahul","Priya","Sneha"

---------------------------------------------

6. Add New Items to Existing Cart (Spread Operator)

Scenario:
A shopping cart already has some items and the user adds new items.

Question:
const cart = ["Shoes","Shirt"];
const newItems = ["Watch","Cap"];

---------------------------------------------

7. Function With Fixed and Dynamic Arguments (Rest Operator)
Scenario:
A company gives a fixed bonus to employees and then adds additional bonuses.

Question:
Create a function:
bonusCalculator(fixedBonus, ...extraBonus)
bonusCalculator(1000, 200, 300, 400)
Total Bonus = 1900 answers






