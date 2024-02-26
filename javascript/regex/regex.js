/* javascript regex */

// {
//     const regex = new regexp(/^a....s$/);
//     console.log(regex.test('aliais'));
// }

// {
//     const regex = /[123]/
//     console.log(regex.test('685748697'))
// }


/* . - Period */

// {
//     const regex = /.../
//     console.log(regex.test('ax'));
// }


 /* ^ - Caret */

// {
//  const  regex = /^v..+x(c)+h$/
//  console.log(regex.test('vbvxchh'));
// } 


/* $ - Dollar */

// {
// const regex = /s$/
// console.log(regex.test('pass'));
// }


/* * - Star */

// {
//     const regex = /ma+n/
//     console.log(regex.test('man'));
// }

/* + - Plus */

// {
// const regex = /ma+n/
// console.log(regex.test('woman'));
// }

 /* {} - Braces */

//  {
//     const regex = /[0-0]{2,4}/
//     console.log(regex.test('01234560'));
//  }   

/* () - Group */

//  {
//     const regex1 = /(x|y|z)cb/
//    console.log(regex1.test('xcba'));

//     const regex2 = /(x|y|z)cb$/
//     console.log(regex2.test('xcba'));

//       const Regex3 = /(x|y|z)cb+d$/
//       console.log(Regex3.test('xcbd'));
//  }
    

// {
//  // searching name surname and birthdate;
//      const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
//      const result3 = ('sarname:pathar, name:om, birthdate:24/07/2003');
//      console.log(result3);//['surname:pathar, name:om, birthdate:24/07/2003']
// } 


/* ? - Question Mark */

// {
//    let neighbor = /neig?hbou?r/;
//    console.log(neighbor.test("neighbour"));
//    console.log(neighbor.test("neihbor"));
// }

/* | - Alternation */

// {
//   const Regex = /fg|er/
//   console.log(Regex.test('fgootball'));
// }

/* \ - Backslash */

// {
//   const regex1 = /^a.../;
//   const regex2 = ('abvbvbve'); 
//   console.log(regex1.test(regex2));
// }

// {
//   const Regex1 =/[0-2]{1,0}/;
//   const regex = Regex1.test('12345678910')
//   console.log(regex);
// }

const resultr = /^...+[0-9]@+[gmail|yahoo]+.com$/