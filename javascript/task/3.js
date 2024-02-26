// 10 //

// var num1 = 10;
// var num2 = -7;
// var num3 = 1;

// if(num1 >0 && num2 >0 && num3 >0){
//     alert("the sign is +");
// }
// else if (num1 <0 && num2 <0 && num3 <0){
//     alert("the sign is -");
// }
// else if(num1 <0 && num2 >0 && num3 <0){
//     alert("the sign is -");
// }
// else if(num1 <0 && num2 <0 && num3 >0){
//     alert("the sign is +");
// }
// else{
//     alert("the sign is -");
// }



 // 2 //
// function celsiustofahrenheit(celsius)  {
//     return(celsius * 9/5) + 32
// }

// 3 //
// let width = 5;
// let height = 10;
// let area = rectangleArea(width, height);
// console.log(`The area of the rectangle is ${area}.`);

// 4 //


function reverseNumber(num) {
    let str = Math.abs(num).toString();
    let reversed = str.split('').reverse().join('');
    return Number(reversed);
  }