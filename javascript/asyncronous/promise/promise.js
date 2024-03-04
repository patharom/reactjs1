//javascript promise and promise chaining //

/* program with promise  */
// {
//     const count = false;

//     let countvalue = new Promise(function (resolve,reject){
//         if (count) {
//             resolve("There is a count value.");
//         }else {
//             reject("There is no count value");
//         }
//     });

//     console.log(countvalue);
// }


/* javascript promise chaining */

//javascript then method //

// {
//     //promiseobject.then(onfulfilled, onrejected);
// }

// //chaining the promise with then()

// {
//   let countvalue = new Promise(function (resolve, reject){
//     reject("promise is not resolved");
//   });
  
  
//   countvalue
//     .then(function successvalue1() {
//         console.log("you can call multiple functions this way.");
//     });
// }


// /* javascript catch()method */

// {
//     let countvalue = new promise(function (resolve, reject) {
//         resolve('promise is not rejected');
//     });

//     countvalue.then(
//         function successvalue() {
//             let text= 8*10
//             console.log(text);
//         },
//     )

//     .catch(
//         function errorvalue(result) {
//             console.log(result);
//         }
//     );
// }

/* javascript promose versus callback */

//the syntex is user-friendly and easy to read.

//error handling is easier to manage.

 {
//     api().then(function(result) {
//         return api2() ;
//     }).then(function(result2) {
//         return api3() ;
//     }).then(function(result3) {
//            //do work
//     }).catch(function(error) {
//        // handle any error that may occur before this point
//     });
 }

 /* javascript callback */
 {
    // Api(function(result){
    //     api2(function(result2){
    //         api3(function(result3){
    //             //do work
    //             if(error) {
    //                 //do something
    //             }
    //             else {
    //                 //do something
    //             }
    //         });
    //     });
    // });
 }


//  //javascript finally() method

//  {
//     let countvalue = new Promise(function (resolve, reject) {
//         reject();
//     });

//     countvalue.finally(
//         function greet(){
//             console.log('This code is executed.');
//         }
//     );

//     let promise = new promise(function(resolve , reject){
//         setTimeout(
//            function(){
//             console.log('Hello promises');
//             //reject("This Task Is Not compelte!");
//             resolve();
//            } , 5000
//         )
//     })
//     promise.then(function(){
//         setTimeout(
//             function(){
//                 console.log('First Then Function');
//             } , 1000
//         )
//     })
//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log('Second Then Function');
//             } , 5000
//         )
//     })
//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log('Third Then Function');
//             } , 4000
//         )
//     })
//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log('Fourth Then Function');
//             } , 5000
//         )
//     })
//     .then(function(){
//         setTimeout(
//             function(){
//                 console.log('Fifth Then Function');
//             } , 6000
//         )

//     })
//     .catch(function(result){
//         console.log(result);
//     })
//     .finally(function(){
//         console.log('The Asyncronous Task complete!.');
//     })
//  }

