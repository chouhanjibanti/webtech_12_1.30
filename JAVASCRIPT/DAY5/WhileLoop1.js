//  print the sum of the digit 456

// let num = 456;
// let sum = 0;
// while(num>0){// 456>0 // 45>0  // 4>0 // 0>0 
//      let digit = num%10; // 456%10 -> 6 // 45%10 -> 5 // 4%10 => 4
//      sum = sum+digit; // sum = 0+6 = 6 // sum = 6+5 = 11 // sum = 11+4 = 15
//     //  num= Math.floor(num/10);// num = 456/10 -> 45 // num = 45/10 => 4 // 4/10 => 0
//     //  num = (num-digit)/10; // 456-6 = 450
// }
// console.log(sum);

// 56.789

// =============================================================

// Reverse Number 
// palindrome 
// armStrong 
// Faboncii series 
// Extract the digit from the number 
// Count the number of digit from the number 456789

// let num = 456789;
// let count=0;
// while(num>0){// 456789>0 || 45678>0 // 4567>0
//     count++;// 1 // 2
//     num= Math.floor(num/10);// 45678/10 || 4567
// }
// console.log(count);

// prime number 
// perfect number 

// prime number 
// 1 to 50 - prime 

// let num = 4;
// let count=0;
// for(i=2;i<=num;i++){// i=2 2<=4 T -> i=3 3<=4 T // i=4 // i=5 5<=4
//     if(num%i==0){// 4%2==0 // 4%3==0  // 4%4==0
//             count++;// 1 // 2
//     }
// }
// if(count==1){
//     console.log("prime");
// }else{
//     console.log("not prime");
// }


//perfect number 
// 6 -> 1 +2+3 = 6
// 28 -> 1+2+4+7+14 = 28
// let num = 28;
// let sum = 0;
// for(let i=1;i<=(num/2);i++){ // i=4 4<=3
//     if(num%i==0){// 1 // 2 // 3 // F
//        sum = sum +i;// sum = 0+1 = 1 || sum = 1+2= 3  || sum = 3+3 = 6
//            }
// }
// if(sum==num){
//     console.log("perfect");
// }else{
//     console.log("not perfect");
// }
// ========================================

// prime number between 1 to 50 check number is prime or not.
// for(let i=1;i<=50;i++){
//     let num = i;
//     let count=0;
// for(let i=2;i<=num;i++){// i=2 2<=4 T -> i=3 3<=4 T // i=4 // i=5 5<=4
//     if(num%i==0){// 4%2==0 // 4%3==0  // 4%4==0
//       count++;// 1 // 2
//     }
// }
// if(count==1){
//     console.log(i + " number is prime");
// }else{
//     console.log(i + " number is not prime");
// }
// }

// ======================================