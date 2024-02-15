/*  JavaScript Date Objects  */



/*

new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(milliseconds)

*/


let Date1 = new Date();
console.log(Date1);
let Date2 = new Date("10-12-2050")
console.log(Date2);
let Date3 = new Date(2023 , 4)
console.log(Date3);
let Date4 = new Date(2023 , 4 , 26)
console.log(Date4);
let Date5 = new Date(2023 , 4, 26 , 16)
console.log(Date5);
let Date6 = new Date(2023 , 4, 26 , 16 , 12)
console.log(Date6);
let Date7 = new Date(2023 , 4, 26 , 16 , 12  , 59)
console.log(Date7);
let Date8 = new Date(120000)
console.log(Date8);










/* javascript ISO standard time */

{
    const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20)
    console.log(dates);
    console.log(dates.toString());
    console.log(dates.toDateString());
    console.log(dates.toUTCString());
    console.log(dates.toISOString());
  }
  
  /* JavaScript Date Formats */
  
  /* ISO Date , Short Date  , Long Date */
  
  {
    const dates = new Date("2024");
    console.log(dates);
  }
  
  /* ShortDate */
  
  {
    const dates = new Date("03/25/2023");
    console.log(dates);
  }
  
  /* LongDate */
  
  {
    const dates = new Date("march 23 2023");
    console.log(dates);
  }
  
  {
    const dates = new Date("23 march 2023");
    console.log(dates);
  }
  
  /*  Date Input - Parsing Dates */
  
  {
    let msec = Date.parse("october 21, 2002");
    console.log(msec);
  }
  
  
  /* JavaScript Get Date Methods */
  
  /*
  
  getFullYear()	Get year as a four digit number (yyyy)
  getMonth()	Get month as a number (0-11)
  getDate()	Get day as a number (1-31)
  getDay()	Get weekday as a number (0-6)
  getHours()	Get hour (0-23)
  getMinutes()	Get minute (0-59)
  getSeconds()	Get second (0-59)
  getMilliseconds()	Get millisecond (0-999)
  getTime()	Get time (milliseconds since January 1, 1970)
  
  */
  
  
  
  /*  JavaScript Set Date Methods */
  
  
  /*
  
  setDate()	Set the day as a number (1-31)
  setFullYear()	Set the year (optionally month and day)
  setHours()	Set the hour (0-23)
  setMilliseconds()	Set the milliseconds (0-999)
  setMinutes()	Set the minutes (0-59)
  setMonth()	Set the month (0-11)
  setSeconds()	Set the seconds (0-59)
  setTime()	Set the time (milliseconds since January 1, 1970)
  
  */
  
  
    
    
  