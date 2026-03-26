// function display(n){
//   if(n===0){
//     return;
//   }

//   console.log(n);//5 // 4 // 3// 2 // 1 
//   display(n-1) // display(4)
// }
// display(5)

// ====================================

// factorial number :-  

function fact(n){
    if(n===1){
        return 1;
    }

    return n*fact(n-1) // 5*fact(4) // 5*4*3*2*1
}
console.log(fact(5));

