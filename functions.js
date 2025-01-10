// function addToCart(){
//     alert("product is added to cart");
// }
//!function without parameters

// function demo(){
// console.log("function without parameters");
// }
// demo();

//!function with parameters

// function userDetails(name , age, city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("roshini" , 20 , "kamareddy");
 
//!function expression
// let x = function(){
//     console.log("function expression is execution")
// };
// x();
//! IIFE(imediate invoke function)
// (function(){
//     console.log("IIFE");
// })();

//! arrow function
// function demo(){
//     console.log("Hello");
// } 
// demo();

// let x = ()=>{console.log("arrow function");};
//     x();

// let x=_=>{console.log("hi");
//     console.log("hello");
//     console.log("bye");
// };
// x();

//!return keyword
// function demo(a,b){
//     return a+b;
// };                            //!explicit return
// let x = demo(5,5);
// console.log(x);

// let y = (a,b) => a+b;
// let a = y(10,20);              //!implicit return
// console.log(a);

//! higher order functions
// function hof(a){
//     return a;
// };
//  let x = hof(10);
//  console.log(x);

//!?ex-2
// function hof(a){
//        return a;
//      };
//       let x = hof(function(){return "hello i am a callback function"});
//       console.log(x);

//?ex-3
// function hof(a){
//            return a(2,3);
//           };
//           let x = hof(function(a,b){return a+b});
//            console.log(x);

//?ex-4
// function parent(callback){  //!higher order function

//     return callback;
// }
// let x = parent(add(5,5));
// console.log(x);
// function add(a,b){
//     return a+b
// }

//!closure 
// var a = 100;
// let b = "hi";
// function x(){
//     var user = "Roshini";
//     let company = "Google";
//     const sal = 1234567890
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);
// }
// x();


    

    
    