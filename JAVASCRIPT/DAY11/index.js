// function Parent(){

//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = Parent();
// counter()
// counter()
// counter()


function Bank(balance){
     balance;

    return function(a){
        balance+=a;
        console.log(balance);
    }
}
const deposit = Bank(1000);
deposit(100)
deposit(1000)