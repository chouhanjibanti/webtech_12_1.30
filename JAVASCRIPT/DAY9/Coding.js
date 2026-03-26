// Advanced Question of an Array :- 

// 1.  Remove the duplicate element from the array .
// 2.  Sort the Array in ascending order.[Bubble sort]
// 3.  Sort the array using the selection sort.
// 4.  We can find the largest element from the array .
// 5.  find the occurrence of each element from the Array.

//  Sort the Array in ascending order.[Bubble sort].
// with the help of method and without method.

// let arr = [5,2,3,1,8,4]  // output :- [1,2,3,4,5,8]
// // 0 , 1 , 2  , 3 , 4
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j] > arr[j+1]){
//            let temp = arr[j]
//            arr[j]= arr[j+1]
//            arr[j+1]= temp
//         }
//     }
// }
// console.log(arr);

// find the largest elemement
// let arr = [5,2,3,1,8,10]
// // let max = arr[0];
// let min = arr[0];
// for(let i=1;i<arr.length;i++){
//     // if(arr[i]>max){
//     //     max = arr[i];
//     // }
//      if(arr[i]<min){
//         min = arr[i];
//     }
// }
// // console.log(max);
// console.log(min);

// find the occurence and freuqency of the each element 
// let arr = [1,5,2,5,6,3,5,3,8,9,7] // [1,2,3,6,7,8,9]
// // let arr = [1,5,2,5,6,3,5,3,8,9,7]

// for(let i=0;i<arr.length;i++){
//   let count =0;
//   for(let j=0;j<arr.length;j++){

//     if(arr[i]===arr[j] && i>j){
//         break;
//     }
//     if(arr[i]==arr[j]){
//         count++;
//     }
//   }
//   if(count>1){
//     console.log(arr[i] + " occures = "+count);
// }
// }
 let arr = [0,1,1,0,0,1,1,0]
// [0,0,0,0,1,1,1,1]
 let zero = 0;
 let one = 0;

 for(let i=0;i<arr.length;i++){
   if(arr[i]===0){
    zero++;
   }else{
     one++;
   }
 }
//  let result = [];
//  for(let i=0;i<zero;i++){
//    result.push(0)
//  }
//  for(let i=0;i<one;i++){
//   result.push(1)
//  }
for(let i=0;i<zero;i++){
  arr[i] = 0;
}
for(let i=zero;i<arr.length;i++){
  arr[i] =1;
}
console.log(arr);