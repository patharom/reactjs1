 {
   let n1=0, n2=1, next_num, i=1;
   let num=15;

   document.write("fibonacci series:")
   while(i<=num){
     document.write("<br>" + n1)
     next_num=n1 + n2;
     n1=n2;
     n2=next_num;
     i++;
   }
 }
 0
 1
 1
 2
 3
 5

 {
   next = 0 + 1
   n1 = 1
   n2 = 1
 }
 {
   next = 1 + 1
   n1 = 1
   n2 = 2
 }
 {
   next = 1 + 2
   n1 = 2
   n2 = 3
 }
 {
   next = 2 + 3
   n1 = 3
   n2 = 5
 }
 {
   next = 3 + 5
   n1 = 5
   n2 = 8
 }


 let number=50;
 let guesscount=0;
 console.log(guesscount)
 let guess=2;
 
 for(guesscount; guesscount < guess; guesscount++){
   let user = prompt("enter number between 1 to 100");

 if(user == number){
   alert("congrations! you guess the number");
  break;
 }
  if(user>number){
   alert("guess is too high. try again");
  }else  if(user<number){
   alert("guess is too low.try again");
  }

  if(guesscount == guess){
   alert("sorry, your guess limit over.")
  }
 }

/* word palindrome program */

let string1 = "madam"
let string2 = string1.split("")
console.log(string2);
let string3  = string2.reverse();
console.log(string3);
let string4 = string3.join("")
console.log(string4);

let result = string1 === string4;
console.log(result);
           