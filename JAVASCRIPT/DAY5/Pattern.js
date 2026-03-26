// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

// for(let i=1;i<=5;i++){ // row // i=1 1<=5 T // i=2
//     let line = ""; // line = ""
//     for(let j=1;j<=5;j++){ // j=1  1<=5 T // j=2 2<=5 T // j=3 3<=5 T // j=6 6<=5
//          line = line + "*"; // line = * * * * * 
//     }
//     console.log(line);
// }
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 



// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// let star = 6;
// for(let i=1;i<=5;i++){// i=1 // i=2
//     star--; // 5 // 4
//     let line = "";
//     for(let j=1;j<=star;j++){
//         line = line + "*";
//     }
//     console.log(line);
// }
// * * * * * 
// * * * *
// * * *
// * *
// *


// 10.
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let star = 6;
// let space = -1;

// for(let i=1;i<=5;i++){
//     star--;
//     space++;
//    let line  = "";
//     for(let j=1;j<=space;j++){
//      line = line + " ";
//     }
//     for(let j=1;j<=star;j++){
//         line = line + "*";
//     }
//     console.log(line);
// }


// 1
// 12
// 123
// 1234
// 12345


// for(let i=1;i<=5;i++){// i=1 / i=2
//     let num =1;
//     let line ="";
//     for(j=1;j<=i;j++){ // j=1 1<=1
//        line = line + num; // line = 1 2 3
//         num++
//     }
//     console.log(line);
// }
// 1
// 1 2 

// ASCII :- american standard code information interchange 
// A - 65
// a - 97

//5.
// A
// AB
// ABC
// ABCD
// ABCDE

// for(let i=1;i<=5;i++){
//   let ajay = 65;
//   let line = ""
//    for(let j=1;j<=i;j++){
//       line = line + String.fromCharCode(ajay);
//       ajay++;
//    }
//    console.log(line);
// }


//6. 
//     *    
//    ***   
//   *****  
//  ******* 
// *********


// let star = -1;
// let space = 5;
// for(let i=1;i<=5;i++){
//     space--;// 4
//     star+=2;
//    let line  = "";
//     for(let j=1;j<=space;j++){
//      line = line + " ";
//     }
//     for(let j=1;j<=star;j++){
//         line = line + "*";
//     }
//     console.log(line);
// }


//7
//     *    
//    ***   
//   *****  
//  ******* 
// *********
//  ******* 
//   *****  
//    ***   
//     *  





// 11.
// * * * * * * *
//   * * * * *
//     * * *
//       *


// let star = 9;
// let space = -1;
// for(let i=1;i<=5;i++){
//     space++;// 4
//     star-=2;
//    let line  = "";
//     for(let j=1;j<=space;j++){
//      line = line + "  ";
//     }
//     for(let j=1;j<=star;j++){
//         line = line + "* ";
//     }
//     console.log(line);
// }


let star = -1;
let space = 5;
for(let i=1;i<=9;i++){
   if(i<=5){
    star+=2;
    space--;
}else{
    star-=2;
    space++;
}
   let line  = "";
    for(let j=1;j<=space;j++){
     line = line + " ";
    }
    for(let j=1;j<=star;j++){
        line = line + "*";
    }
    console.log(line);
}