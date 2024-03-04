 /* javascript asyncronous method */

 /* settimeout method */

// // setTimeout(function, delay, parameter1, parameter2 , .....)

//  setTimeout(
//     function(){

//     }, delaytime
// )



// function print(){
//     console.log(
//         "Hello javascript"
//     );
// }


// //setTimeout(print , 5000)

// let print = () => {
//     console.log("settimeout method");
// }

// setTimeout(print , 5000)


// setTimeout(
//     function greet(){
//         console.log("Hello javascript");
//     } , 5000
// )

// setTimeout(
//     () => console.log("Hello world") , 5000
// ) 


// function greet(name , age){
//     console.log(`Your name is ${name} and age ${age}`);
// }

//     setTimeout(greet , 1000 , "rakesh" , 52)


//     /* setInterval */

// //   setInterval(function,  delay, parameter1 , parameter2,);
  
//   setInterval(
//     function greet(){
//         console.log("1");
//     }, 2000
//   )

//   setInterval(
//     () => console.log("Hello"), 3000
//   )

//   function greet(name , age){
//     console.log(`Your name is ${name} and age ${age}`);
//   }

//   setInterval(greet , 1000 , "rakesh" ,52)


//   /* current time print every 3 seconds */

//   /* Tomorrow Task */

//   {
//     let datetime= new Date().tolocaleTimestring()

//     function time(date){
//         console.log(`current Time ${date}`);
//     }
//     time(datetime)
//     setInterval(time , 3000)
//   }


//   /* setInterval Id */

//   function greet(name , age){
//     console.log(`Your name is ${name} and age ${age}`);
//   }

//   let Id= setInterval(greet , 1000 , "rakesh" ,52)

//   console.log("This is ID " , Id);

//   /* clearTimeout */

//   clearInterval(Id)