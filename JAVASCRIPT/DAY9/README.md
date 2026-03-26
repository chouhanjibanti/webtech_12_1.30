Advanced Question of an Array :- 


1.  Remove the duplicate element from the array and store in the new Array.
2.  Sort the Array in ascending order.[Bubble sort]
3.  Sort the array using the selection sort.
4.  We can find the largest element from the array .
5.  find the occurrence of each element from the Array.
6. let arr = [0,1,1,0,0,1,1,0]


let arr = [5,2,3,1,8,4]  // output :- [1,2,3,4,5,8]
// 0 , 1 , 2  , 3 , 4
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j] > arr[j+1]){
           let temp = arr[j]
           arr[j]= arr[j+1]
           arr[j+1]= temp
        }
    }
}
console.log(arr);

[5,2,3,1,8,4]
i=0  i<4 T 
 j=0  j<4  T
     arr[0]>arr[1] || 5>2 || [2,5,3,1,8,4]
 j=1 1<4  T
     arr[1]>arr[2]  || 5>3 || [2,3,5,1,8,4]
 j=2  2<4 T
      arr[2]>arr[3]  || 5>1 || [2,3,1,5,8,4]
  j=3  3<4  T
      arr[3]>arr[4]  ||  5>8
   j=4  4<4


i=1 1<4 T
  j=0  0<3  T
      arr[0]>arr[1]  || 2>3 F
  j=1 1<3 T
      arr[1]>arr[2] || 3>1 T  || [2,1,3,5,8,4]
j=2   2<3 T
      arr[2]>arr[3] || 3>5



let arr = [1,5,2,5,6,3,5,3,8,9,7]
// let arr = [1,5,2,5,6,3,5,3,8,9,7]

for(let i=0;i<arr.length;i++){
  let count =0;
  for(let j=0;j<arr.length;j++){

    if(arr[i]===arr[j] && i>j){
        break;
    }
    if(arr[i]==arr[j]){
        count++;
    }
  }
  if(count>1){
    console.log(arr[i] + " occures = "+count);
}
}

==============================================

1. String Questions :-

1. find the occurenece of each chracater from string "debugshalaindore"
2. find the duplicate elemenets from the string 'javaprogramming"
3. Remove the duplicate element display the elements.
4. Reverse the String.
5. String is palindrome or not. -> madam = madam


=========================================





