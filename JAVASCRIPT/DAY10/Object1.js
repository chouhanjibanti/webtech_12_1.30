// const person = {
//     name:"jay",
//     age:23,
//     address:"indore"
// }
// console.log(person);
// String , array [] , Object {}

// const person = {
//     name:"jay",
//     age:23,
//     address:"indore"
// }

// const person1 = {
//     name:"ajay",
//     age:22,
//     address:"indore"
// }

// =============================

// const person = {
//     name:"jay",
//     age:23,
//     address:"indore"
// }
// console.log(person);
// console.log(person.age);
// console.log(person["age"]);

// // add the keys and value 
// person.phone = 6789876;
// console.log(person);

// // modify
// person.age = 25;
// console.log(person);

// // delete 
// delete person.age;
// console.log(person);

// // ======================================= 

// // Constructor function 

// function Car(brand,color){
//   this.brand = brand;
//   this.color = color;
// }
// let p = new Car("TATA","BLACK")
// let p1 = new Car("BMW","RED")
// console.log(p.brand);
// console.log(p1.color);


// Before ES6 :-  
// constructor function


// After ES6 :- 
// class , constructor 


// class Person{
//     constructor(fname,lname,contact){
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//     }
// }
// let obj1 = new Person("Ajay","verma",6789874);
// console.log(obj1.lname);



// const person = [
//      {id:1,name:"jay"},
//      {id:3,name:"jayesh"},
//      {id:2,name:"raja"}
//  ] 

//  const result = person.findIndex((p)=> p.name === "jayesh")
//  console.log(result);



// Object methods :- 

const person = {
    name:"jay",
    age:23,
    address:"indore"
}

// keys
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(person.hasOwnProperty("name"));

Object.freeze(person);
person.age = 30;
console.log(person);
person.dob = '19-09-2002'
console.log([person]);

// assign 
const updatedPerson = Object.assign({},person, {age:30})
console.log(updatedPerson);
