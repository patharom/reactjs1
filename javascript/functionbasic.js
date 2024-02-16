/*  JavaScript Function and Function Expressions */



{
     function print(){
         console.log("Hello Function");
         console.log(2*2);
     }
}

/* Function Parameters */

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.


{

     function multiply(a , b){
         console.log(a);
         return a * b
     }

     console.log( multiply(10 , 10));

}

/* Function Return */


{
     function add(a , b){
         return a+b
     }

     console.log(add(23 , 45));
     console.log(add(23 , 10));
     console.log(add(23 , 56));
     console.log(add(23 , 101));
     console.log(add(23 , 89));
     console.log(add(23 , 7855));
     console.log(add(23 , 25));
}





/* JavaScript Arrow Function / Multiline Arrow Functions */



/* Arrow Function With Arguments */

 function print(){
     return console.log("Hello Function");
 }
 print();

 let x = () => console.log("Hello Arrow Function");

 x();

 let y = () => console.log(2*2);

 y();

// Arrow Function as an Expression

{
      let gender = "female"

        let x =(gender=="male")?() => console.log("You Are Male"):() => console.log("YOU ARE FEMALE");

        x();
}


/* JavaScript CallBack Function */

{
     greet('Tushar', callMe);
     function callMe() {
         console.log('I am first callback function');
     }
     function greet(name, callback) {
         console.log('Hi' + ' ' + name);
         callback();
     }
}
