// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// print Hello world 100 times.
// for(let i=1;i<=100;i++){
// console.log("Helloworld");
//     console.log(i);
// }
// i=1   1<<=100 ->T   Helloworld
// i=2   2<=100 T Helloworld

// 1. print sum of the number from 1 to 5.
// let sum = 0;
// for(let i=1;i<=5;i++){
//   sum = sum +i;// 1/// 3
// }
// console.log(sum);
// i=1   sum =0   sum = 0+1; // 1
// i=2   sum =1   sum = 1+2 // 3
// i=3   sum = 3   sum = 3+3 = 6
// i=4  sum =6     sum = 6+4 = 10
// i=5   sum =10    sum = 10+5 = 15
// i=6   ,<=5

// 3. Print all even numbers from 1 to 50 using a for loop.

// 153 =>  1*1*1+5*5*5+3*3*3 = 1+125+27 => 153

// ===================================================

// Faboncci Series :-
// 0 , 1 , 1 ,2 , 3, 5, 8,13,21.....
// a , b

// let a = 0;
// let b = 1;
// for (i = 1; i <= 9; i++) {
//   console.log(a);// 0 // 1 // 1
//   let temp = a + b; // temp = 0+1 = 1 , 1+1= 2
//   a = b;// a = 1
//   b = temp;// b = 2
// }

// swap two number with third variable.
// swap two number wiithout third variable.
// let a = 10;
// let b = 20;
// let c =0 ;

// c= a;
// a =b;
// b = c;
// console.log(a);
// console.log(b);

// swap without third variable 
// let a = 10;
// let b = 20;

// a = a+b; // a = 30
// b = a-b; // b = 10
// a = a-b; // a = 20
// console.log(a);
// console.log(b);

// ====================================

// Armstrong Number
// 345  => 3*3*3+4*4*4+5*5*5 => 27+64+125 = 216
// let num = 153;
// let n = num;
// let sum = 0;
// while(num>0){// 345
//     let digit = num%10;
//     sum = sum +digit*digit*digit;
//     num = Math.floor(num/10);
// }
// if(sum==n){
//     console.log(sum +` is armstrong`);
// }else{
//    console.log(sum +` is not armstrong`);
// }


//Leap year Questions 
// divisible by  4 -> 
// divisible by 400 -> 
// not divisible by 100 -> 1800 1900 2000 

let year = 1900;
if(((year%4==0) && (year%100!==0))  || (year%400==0)){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not leap year`);
}



// Strong number



check(digit)


function check(digit){
    
}