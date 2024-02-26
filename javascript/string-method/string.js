/***** Javascript String Method ******/

/* primitive string */

 let String1 = "Hello World"
 let String2 = 'Hello World'
 let String3  = `Hello World`

 console.log(String1);
 console.log(String2);
 console.log(String3);


/* string as object */ 

let string4 = new string("hello world")
console.log(string4);

let string5 = string1.split("")
console.log(string5);

/* string length */

{String.length}

 let String6  = "WHAT ARE MOST SIMPLE FOO."
 console.log(String6.length);

 
 /*String charAt() */

 let String7  = "WHAT ARE MOST SIMPLE FOO."
 let String8 = String7.charAt(3)
 console.log(String8);

 /* string replace */

 let String24 = "WHAT ARE MOST SIMPLE MOST FOO."
 let String25 = String24.replace("Most" , "index")
 let String26 = String24.replace("MOST" , "INDEX")
 console.log(String26);

/* string replaceall */

let String27 = "WHAT ARE MOST HARD MOST FOO."
let String28  = String27.replaceAll(/MOST/g , "TUSHAR")
let String29  = String27.replaceAll(/MOST/i , "TUSHAR") // Error
console.log(String28);

/* String toUpperCase() */

let String30 = "This is most common langauage"
let String31 = String30.toUpperCase();
console.log(String31);

/* String toLowerCase() */

let String32 = " THIS IS MOST COMMON LANGUAGE "
let String33  = String32.toLowerCase();
console.log(String33);

/* String concat() */

let String34 = "Hello"
let String35  = "World"
let String36  = "How Are You!"
let String37 = String34.concat(" " + String36 + " " +  String35)
console.log(String37);

/* String trim() */

let String38 = " This is most common lecture! "
 console.log(String38);
 console.log(String38.length);
 let String39 = String38.trim()
 console.log(String39);
 console.log(String39.length);

 /* String trimStart() */

 let String40 = " This is most common lecture! "
 console.log(String40);
 console.log(String40.length);
 let String41 = String40.trimStart();
 console.log(String41);
 console.log(String41.length);

 /* String trimEnd() */

 let String42 = " This is most common lecture! "
 console.log(String42);
 console.log(String42.length);
 let String43 = String42.trimEnd();
 console.log(String43);
 console.log(String43.length);

 /* String padStart() */

 let String44 = "This is Common langauage!"
 console.log(String44);
 console.log(String44.length);
 let String45 = String44.padStart(30 , "1");
 console.log(String45);
 let Number1  = "500"
 let Number2  = Number1.padStart(2 , 0)
 console.log(Number2);

 /* String padEnd() 
 let Number1  = "500"
 let Number2  = Number1.padEnd(4 , 0)
 console.log(Number2);
 console.log(typeof(Number2));
 let Number3 = parseFloat(Number2)
 console.log(Number3);
 console.log(typeof(Number3)); */


 /* String charCodeAt() */

 let String46 = "This is most CoMmon!"
 let String47  = String46.charCodeAt(15);
 console.log(String47);

 /* String split() */

 let String48 = "Wow! What a Place."
 console.log(String48);
 let String49 = String48.split("");
 console.log(string49);




 /* JAVASCRIPT STRING METHOD */


 /* String indexOf() */

 let String52 = "Wow! What a Place."
 console.log(String52);
 let String53  = String52.indexOf("a" , 8)
 console.log(String53);

/* String lastIndexOf() */

let String54 = "Why Need Form Valiadation In Web Development"
 console.log(String54);
 let String55  = String54.lastIndexOf("m" , 20)
 console.log(String55);

 /* String search() */

 let String56 = "Why Need Form Valiadation In Web Development"
 console.log(String56);
 let String57 = String56.search("W")
 console.log(String57);

 /* String startsWith() */

 let String58 = "Why Need Form Valiadation In Web Development"
 console.log(String58);
 let String59 = String58.startsWith("h");
 console.log(String59);

 /* String endWith() */

 let String60 = "Why Need Form Valiadation In Web Development  "
 console.log(String60);
 let String61 = String60.endsWith(" ");
 console.log(String61);

 


 

