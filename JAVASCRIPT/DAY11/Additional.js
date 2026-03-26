// let obj = {
//   a: 10,
//   b: 20
// };

// let x = obj; // dono point to the same object 

// x = { a: 100 }; // then  create a new object // obj wese ka wese to original object 
// console.log(x.a);
// console.log(obj.a);

// ==========================================

// let obj = {
//   a: 10
// };

// function change(o){
//   o.a = 50; // obj.a = 50;
// }
// change(obj);
// console.log(obj.a);
// object passed by the references 

// ===================================
// let obj = {
//   a: 10
// };
// function change(o){
//   o = { a: 100 };
//   console.log(o.a);
// }
// change(obj);
// console.log(obj.a);


// point x, y and obj object
// let obj = {
//   a: 10,
//   b: 20
// };

// let x = obj;
// let y = x;

// y.b = 100;
// console.log(obj.b);
// // ================================

// let obj = {
//   a: 10
// };

// let x = obj;

// x.a = 20;
// x = null;

// console.log(obj.a);



//-----
// let obj = {
//   a: 10,
//   b: function(){
//     function test(){
//       return this.a;
//     }
//     return test();
//   }
// };

// console.log(obj.b());



//
// let obj = {
//   a: 10,
//   b: () => {
//     return this.a;
//   }
// };

// console.log(obj.b());



// let obj = {
//   a: 10,
//   b: function(){
//     return () => this.a;
//   }
// };

// let f = obj.b();

// console.log(f());



// let obj = {
//   a: 10,
//   b: function(){
//     console.log(this.a);
//   }
// };
// let f = obj.b;
// f();