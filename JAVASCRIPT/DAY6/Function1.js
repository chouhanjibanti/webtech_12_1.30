// parameters :-  access the value 
// Arguments :- pass the value 

// function Declaration  // implicit function 
// function add(a,b){
//    console.log(a+b);
// }
// add(10,20) // argument

// function explicit declaration
// function add1(a,b){
//     return a+b;
// }
// console.log(add1(10,20));

// Arithemetic Operation +, -, * / 



// =======================================



// Function Expression :- 


// let demo = function(x){
//       x%2==0;
// }
// demo(0)


// check number is even or not .


// ===========================================


// Arrow function :-  

// let add = (a,b)=>{
//     console.log(a+b);
// }
// add(1,2)

// print hello 100 times.
// let print1 = (x,y)=>{ for(let i=x;i<=y;i++){ console.log("hello"); }}
// // let print1 = (x,y)=>  console.log("hello"); 

// print1(1,100)// argumnet



// Nested function :-  
// function Parent(d){
   
//     console.log(d);

//     function Child(d1){
//         console.log(d1);
//     }
//     Child(100);
// }
// Parent(10);

// IIFE 
// Syntax :-  ()()
// (function(){
//     console.log("hy i am IIFE");
// })()


// // Higher order function 
function HOF(cbf){

    console.log("hy i am higher order function");
    cbf();
}
function demo(){
   console.log("hy i am call back function");
}
HOF(demo)



// setTimeout(() => {
//     console.log(" hy i am settimeout function");
// }, 2000);


// setTimeout(()=>{

// })

// =========================================================

// HOF and CBF
// function multiplegreet(cbf,x){
//     for(let i=1;i<=x;i++){
//         cbf();
//     }
// }
// function greet(){
//     console.log("GoodMorning");
// }
// multiplegreet(greet,100)


// Logical Question
// 1. Fabonnaci series 
// 2. prime number 
// 3. Perfect number
// 4. armstrong number 
// 5. palindrome number 
// 6. star pattern questions 
