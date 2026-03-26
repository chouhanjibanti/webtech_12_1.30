Conditional Statement :- 

ifelse 
if elseif else 
switch 
==============================

Loops :- 
for the repetative task instead of writing mannually.
1. for Loop 
2. while loop
3. Do While loop

Diff b/w for loop and while loop 
1. number of iteration is known that time we use for loop.
1. number of iteration is unknown.

2. In for loop init, conditiona and incre/decre in single line.
2. In while loop init, condition and incr/decre in diff lines.

3. Syntax of for loop :- 
    for(init;condition;incr/decre){
        // statement 
    }

3. Syntax of while loop ;- 
    init
    while(condition){
        // statement 
        incre/decre
    }



Difff between while and do-while loop 
1. While loop run bassed in the condition.
1. do-while loop atleadt once run no mattter condition true or false.

2. While loop is a entry control loop.
2. do-while is a exit control loop.

3. Syntax of while loop ;- 
    init
    while(condition){
        // statement 
        incre/decre
    }

3. do-while loop
 do{
    // statement
    incre/decre
 }while(condition)



================== For Loop Queestions ==================


// 1. Print the multiplication table of a number m using a for loop, where m is provided by the user.
// 2. print sum of the number from 1 to 5.
// 3. Print all even numbers from 1 to 50 using a for loop.
// 4. Print all odd numbers between 1 and 100 using a for loop, where n is provided by the user.
// 5. Print all numbers from 1 to 200 that are divisible by both 3 and 5 using a for loop, where n is provided by the user.
// 6. Calculate the product of all even numbers between 1 and n using a for loop, where n is provided by the user.
// 7. Calculate the sum of the digits of a number using a for loop, where the number is provided by the user.
// 8. Generate the first n Fibonacci numbers using a r loop, where n is provided by the user.
// 9. Print numbers from 10 to 1 using a for loop.
// 10.Print the factorial of a number using a loop for loop.
// 11. Print all odd numbers between 1 and 70.
// 12. Print the sum of even number between 1 to 30




=================================================================

ternary operator :- condition ? true :false 


Conditional Statement :- 

ifelse - single condition
if elseif else -> multiple conditions
switch case -> multiple cases

ifelse :- 

if(condition){
    // statement 
}else{
    // statement
}


=======================
if else if else 
if(condition1){
    // statement
}else if(condition2){
  // statement
}else if(condition3){
    // statement
}else{
    // statement
}
=========================
switch case 
switch(case){
    case 'withdraw:
       // statament
       break;
    case 'deposit'
       // statement
       break;
    default:
       // statement 
       break;
}



=========================

solve this :-

age>0 && age<9 -> kid
age>=9 && age<18 -> teenager
age>=18 -> adult 
wrong -> invalid age 