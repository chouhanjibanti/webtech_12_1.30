// // implicit typecasting :- 

console.log(10+10);// 20
console.log(10+'10');// number convert into string. '10'+'10' => 1010

console.log(10-10);// 0
// - , * , /  number, string -> 
console.log(10-'10');// string -> number -> 10-10 =0
console.log(10*'20');// 10*20 => 200


console.log(10+"a");//10a
console.log(10-'a');// NAN

// ===========================


// explicit typecasting :- 

console.log(10+Number(false));// 20 
console.log(100+String(100));// '100'+'100' -> 100100

// console.log(Boolean(1));
// console.log(Boolean(0));

// console.log(1>2>3);
// console.log(0>3);
// true // false 