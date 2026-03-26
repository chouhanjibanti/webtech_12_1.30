
// Methods of Array :- 
// 1. push 
// 2. pop 
// 3. shift 
// 4. unshift 
// 5. indexOf
// 5. slice 
// 6. splice
// 7. include
 

// // push -> add the element from the last.
// let arr = [1,2,3,4,5,6]
// arr.push(7,8,9)
// console.log(arr);

// // pop -> remove the element from the last.
// let arr1 = [1,2,3,4,5,6]
// console.log(arr1.pop());

// // shift :- remove the element from the begining.
// let arr2 = [1,2,3,4,5,6]
// console.log(arr2.shift());

// // unShift :- add the element from the begining.
// let arr3 = [1,2,3,4,5,6]
// arr3.unshift(100,200,300)
// console.log(arr3);

// // indexOf :- return the index of the element.
// // if element is exist -> index
// // if is not exist -> -1
// let arr4 = [1,2,3,4,5,6]
// console.log(arr4.indexOf(5));

// // slice :- we can extract the subarray from the array .
// // Syntax :- (start index,end index) -> end index - exclude [chhodna]
// let arr5 = [1,2,3,4,5,6,7,8,9]
// let slice1 =arr5.slice(2,5)
// console.log(slice1);


// // splice :- you can replace the element , place of element.
// // Syntax :- (start index, deleteCount,item1 , item2.....)
// let arr6 = [1,2,3,4,5,6,7,8,9]
// arr6.splice(2,4,100,200)
// console.log(arr6);

// // include :- it will check if element is exist or not.
// let arr7 = [1,2,3,4,5,6,7,8,9]
// console.log(arr7.includes(19));

// =====================================


// Iteration Method 
// 1. forEach 
// 2. for of 
// 3. for in 
// 4. map 
// 5. filter 
// 6. reduce
// 7. find 
// 8. findIndex
// 9. some 
// 10. Every

// let arr8 = [1,2,3,4,5,6,7,8,9]
// arr8.forEach((values,index,array)=>{
//    console.log(values);
//    console.log(index);
//    console.log(array);
// })

// // for of and for in 
// // for of :- 
// // it will return values.
// // Array , String , Map

// // in the case of Array
// let arr9 = [1,2,3,4,5,6,7,8,9]
// for(let values of arr9){
//     console.log(values);
// }

// // // In the case of the String 
// let s1 = "debugshala";
// for(let values of s1){
//     console.log(values);
// }

// // In the case of Map 
// let map1 = [["name","Ajay"],["age",21],["address","indore"]]
// for(let values of map1){
//     console.log(values);
// }

// for in :- 
// it will return index / key
// Array , Object 

// let arr10 = [1,2,3,4,5,6,7,8,9]
// for(let index1 in arr10){
//     console.log(index1);
// }

// let obj1 = {
//     "name":"jay",
//     "age":20,
//     "address":"indore"
// }
// for(let key1 in obj1){
//     console.log(key1);
// }

// // console.log((10-'a'));
// // filter :- it will filter the record based on the condition.
// let arr11 = [1,2,3,4,5,6,7,8,9]
// let filter1 = arr11.filter((item)=>{
//     return item%2==0;
// })
// console.log(filter1);

// // Map :- we can iterate on each and every element. [1,2,3,4,5,6]-> 5 , new array [5,10,15,20,25,30]
// let arr12 = [1,2,3,4,5,6,7,8,9]
// let map1 = arr12.map((value)=>{
//     return value*5;
// })
// console.log(map1);


// // Reduce :- it will return the single  value.
// let arr13 = [1,2,3,4,5,6,7,8,9]
// let red = arr13.reduce((value,totol)=>{
//       return value*totol
// },1)
// console.log(red);

// // find and fiter methods diff 
// // find method :- it will return the single way based on the condition.
// let arr14 = [2,3,4,5,6,7,8,9]
// let find1 = arr14.find((item)=>{
//    return item%2!==0;
// })
// console.log(find1);

// // findIndex :- it will return the index of the element who satisfied the condition.
// let arr15 = [2,3,4,5,6,7,8,9]
// let findIndex1 = arr14.findIndex((item)=>{
//    return item%2!==0;
// })
// console.log(findIndex1);

// // some :- it will return the boolean value based on the condition.
// let arr16 = [2,3,4,5,6,7,8,9]
// let some1 = arr16.some((item)=>{
//    return item%2==0;
// })
// console.log(some1);

// // Every :- it will return the boolean value based on the condition.
// let arr17 = [2,3,4,5,6,7,8,9]
// let every1 = arr16.every((item)=>{
//    return item%2==0;
// })
// console.log(every1);










// let arr141 = [2,3,4,5,6,7,8,9]
// for(let i=0;i<arr141.length;i++){
//     if(arr141[i]%2==0){
//         console.log(i);
//     }
// }


// sort the array 

let arr = [2,4,1,5,6,9] // [1,2,4,5,6,9]
// ascending order 
// descending order

let sort1 = arr.sort((a,b)=>{
    return b-a;
})
console.log(sort1);
// positive -> swap 
// negative 
// 2-4 = -2 [2,4,1,5,6,9]
// 4-1 = 3  [2,1,4,5,6,9]








// let arr = [1,253,5,64,2,6]
// let sort1 = arr.sort((a,b)=> {return a-b})
// console.log(sort1);