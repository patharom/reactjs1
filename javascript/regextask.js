/* example@gmail.com */
// {
//   const string ='ompathar@gmail.com '
//   const replace_name = string.replace(/vasuvi/i, 'ompathar')
//   console.log(replace_name)
// }

/* 123 123 12 12 */
// {
//     const regex2 = /(\d{3})\D(\d{3})\D(\d{2})\D(\d{2})/g;
//     const result3 = regex2.exec('My phone number is: 123 123 12 12');
//     console.log(result3);
//   }
  
//   /* 12 12 12 12 12*/
//   {
//     const regex4 = /(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})/g;
//     const result5 = regex4.exec('My phone number is: 12 12 12 12 12');
//     console.log(result5);
//   }
  
//   /* 1234 1234 12*/
//   {
//     const regex6 = /(\d{4})\D(\d{4})\D(\d{2})/g;
//     const result7 = regex6.exec('My phone number is:1234 1234 12');
//     console.log(result7);
//   }
  
//   /* 12-12-12-12-12 */
//   {
//     const regex8 = /(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
//     const result9 = regex8.exec('My phone number is: 12-12-12-12-12');
//     console.log(result9);
//   }
  
//   /* 123-123-12-12 */
//   {
//     const regex10 = /(\d{3})-(\d{3})-(\d{2})-(\d{2})/g;
//     const result11 = regex10.exec('My phone number is: 123-123-12-12');
//     console.log(result11);
//   }
  
//   /* 1234-1234-12*/
//   {
//     const regex12 = /(\d{4})-(\d{4})-(\d{2})/g;
//     const result13 = regex12.exec('My phone number is:1234-1234-12');
//     console.log(result13);
//   }
//   const resultr = /^...+[0-9]@+[gmail|yahoo]+.com$/
//     console.log(resultr.test('ompathar@gmail.com'));