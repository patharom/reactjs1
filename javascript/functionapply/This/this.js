/* Global Use */
 /* Length , toString , name */

// let max = this;
// console.log(max);
// //windows{}

// this.name = "skillQode"

// console.log(this.name);


/* Inner Function */

// function grow(){
//     console.log(this);
// }
// grow();

// window{}



/* Constructor Function */

// function grow(){
//   this.name = 'Javascript'
//   console.log(name);
// }

// let NewObj = new grow()

// console.log(NewObj);



/* this Keyword in Arrow Function */

// const newfunction = () =>{
//     console.log(this);
// }

// newfunction()

// //window{}

// const obj = () =>{
//     this.name = 'jquery'
//     console.log(name);
// }

// obj();



/* function.length Method */

// function greet(){

// }

// console.log(greet.length);

// function greets(a , b , c = 10){

// }
// console.log(greet length);



/* function.toString() */

// function greet(){
//     console.log('skillqude');
// }

// console.log(greet.tostring());

// console.log(() => console.log('data').tostring());



/* function.name */

// function greet(){

// }

// console.log(greet.name);



/* this Inside Inner Function */

// {
//   const person = {
//     name : 'Jack',
//     age: 25,
//     greet() {

//         console.log(this);        
//         console.log(this.age);  

//         const innerFun = () => {
//             console.log(this);       
//             console.log(this.age); 
//         }

//         innerFun();
//     }
// }

// person.greet();

// }


// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   getThis : function() {
//     return this;
//   }
// };

// console.log('this in object method', person.getThis());



// function getThis() {
//   return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis()); 
// console.log(obj2.getThis());

// console.log(obj1);
// a = 20;
// console.log(a);

// a = 'skillqode'

// function greet(){
//   'use strict'
//   console.log(a);
// }
// greet();

