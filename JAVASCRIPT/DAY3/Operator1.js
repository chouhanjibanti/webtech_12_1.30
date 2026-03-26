// 1. Arithmetic operator 
// 2. Assignment operator 
// 3. Comparison operator
// 4. Relational Operator 
// 5. Logical Operator 
// 6. Ternary Operator 
// 7. incremenet and decrement operator

// 1. Arithmetic operator + , - , * , / , %
// let a = 20;
// let b = 10;
// console.log(a+b);// 30
// console.log(a-b);//10
// console.log(a/b);//2
// console.log(a*b);//200
// console.log(a%b);// 0

// 2. Assignement Operator 
// let a = 100;
// // a = a+200; // a=a-200 , a=a/200 , a=a*200
//  a+=200; // a-=200 , a/=200 , a*=200
// console.log(a);

// 3. Comparison operator
// == and === and !=
// == :- it compare only value.
// let a = 100;
// let b = 100;
// console.log(a==b);

// // === [strictly eqauls ]:- it compares value as well as datatype.
// console.log(a===b);

// !=
// console.log(a!==b);



// 4. Relational Operator [> , < , >=, <=]
// let x = 100;
// let y= 200;
// console.log(x>y);//F
// console.log(x<=y);// T
// console.log(y<x);//F


// 5. Logical Operator [AND , OR , NOT]
// AND :- all conditions are stisfied.
// OR :- Any one condition are satisfied.
// NOT :- it will give the opposite.

// I1 & I2 Output
// T    T    T
// T    F    F
// F    T    F
// F    F    F

// I1 || I2 Output
// T     T    T
// T     F    T 
// F     T    T   
// F     F    F

// let x = 10;
// let y = 20;
// let z = 10;

// console.log(x==z && x<y);//T
// console.log(x==y || x<y);//T

// // NOT :- 
// console.log(x!=10);


// ===============================================

// 6. Ternary Operator  :- it will check the condition in the single line.

// Syntax :- condition ? True : false

// let x = 'peeu';
// console.log(('peeu'==x) ? "i am right" : "i am wrong");

// =============================================

// 7. incremenet and decrement operator
// post / pre increment 
// post / pre Decrement

// post increment :-  x++ // credit 
// pre increment :-  ++x // debit atm

let x = 10;
let x1 = x++;
console.log(x1);
console.log(x);

let y = 100;
++y;
console.log(y);//101

// Decrement :- post/ pre 
let z = 100;
let z1 =z--;//99
console.log(z+100);//199
console.log(z1);

// pre decrement 
let a = 1000;
let a1 = --a;
console.log(a);
console.log(a1-999);
