Function :- Function is a block of code used to perform the specific task.
Advantage :- Resuable 

Types of Function :- 
1. Function Declaration 
2. Function Expreesion
3. Arrow function
4. call back function 
5. Higher order function 
6. Nested function 
7. IIEF (Immediate Invoke function expression)


Function Declaration :- 
let a;
function functName(){}


Syntax :- function functName(){
    //statement 
       }


// Function Expression :- 


// let demo = function(x){
//       x%2==0;
// }
// demo(0)



=======================================================


Arrow function :- 
by using this function we can reduce the code.

Syntax :- 

let demo = ()=>{
    // statement
}


=======================================


Nested Function :- 

function inside another functions is known as nested function.

Syntax :- 

function Parent(d){

    let d = 10;
    clg();

    function Child(){
      clg()
    }
    child()
}
Parent(10)


===============================


Higher order function 

Higher order function is a function which accept function as an paramter.

function HOF(CBF){
    clg(hy)
   CBF()
}
function demo(){

}
HOF(demo)



Call back function 
call back function is a function who passed as an argument.