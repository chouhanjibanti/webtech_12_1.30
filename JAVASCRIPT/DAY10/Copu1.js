
// Shallow Copy and Deep Copy :- 

// Shallow Copy :- A Shallow Copy creates a copy of an object.but nested object are 
// copied by references , not by value.

// const obj1 = {
//     name:"aman",
//     address:{
//         city:"indore"
//     }
// }

// const obj2 = {...obj1}// shallow copy
// obj2.address.city = "bhopal";
// console.log(obj1.address.city);
// =============================================

// deep copy :- A deep copy creates a completely independent copy of an object, 
// including all nested object.

// const obj1 = {
//     name:"aman",
//     address:{
//         city:"indore",
//         contact:{
//           phone:56789876
//         }
//     }
// }

// const obj2 = JSON.parse(JSON.stringify(obj1))// deep copy

// // obj2.address.city = "surat"
// obj2.address.contact.phone = 78887877
// console.log(obj1.address.city);
// console.log(obj1.address.contact.phone);

//closure :- 
// function Bank(){
//     let balance = 1000;

//     return function(a){
//         balance +=a;
//         console.log(balance);
//     }
// }
// const deposit =Bank()
// deposit(1000)
// deposit(10000)


// scope chaining :- 
// scope chain is the mechanism in js where the engine looks for a variable 
// first in current scope and if it is not found , it continue searching the the 
// outer (parent) scopes untill it reaches the global scope.

let globalDiscount= 5;

function Store(){
    let storeDiscount = 10;
    function Product(){
        let productDiscount =15;

        function calculatePrice(price){
            let totalDiscount = globalDiscount + storeDiscount + productDiscount;
            let finalPrice = price - (price*totalDiscount/100);
            console.log("Final price :", finalPrice);
        }
        calculatePrice(100)
    }
    Product()
}
Store()

// Count the vowels from this String "javascript";
//find the occurenece of the each element -> indoreprogramming
// find the duplicate element - indoredebugshala
// remove the duplicate element -> indoredebugshala

//find the occurenece of the each element -> [1,2,3,42,2,4,2,2,1,1,3,4]
// find the duplicate element - [1,2,3,42,2,4,2,2,1,1,3,4]
// remove the duplicate element -> [1,2,3,42,2,4,2,2,1,1,3,4]
// check String is palindrome or not.
// find the largest element from the array -> [1,2,3,42,2,4,2,2,1,1,3,4]
// sort the array without using the method. [5,3,7,2,9,8,1]



