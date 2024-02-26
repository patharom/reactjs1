

    /* NOTE:- Continue after Array */



/* The For Of Loop */


/*   iterable - an iterable object (array, set, strings, etc). */
/*   element - items in the iterable */

{
     /* for...of with Arrays */

     
     const students = ['John', 'Sara', 'Jack'];
     for ( let element of students ) {
         console.log(element);
     }
}

{
     // for...of with Strings
     const string = 'code';
     for (let i of string) {
         console.log(i);
     }
}

{
     // for...of with Sets
     const set = new Set([1, 2, 3]);
     for (let i of set) {
         console.log(i);
     }
}

{
     // for...of with Maps
     let map = new Map();
    map.set('name', 'Jack');
     map.set('age', '27');

     // looping through Map
     for (let [key, value] of map) {
         console.log(key + '- ' + value);
     }
}


// The For In Loop

{
     for (key in object) {

     }
}

// Iterate Through an Object

{
     const student = {
         name: 'Monica',
         class: 7,
         age: 12
     }
    
     // using for...in
     for ( let key in student ) {
         console.log(`${key} => ${student[key]}`);
     }
}

// Update Values of Properties

{
     const salaries= {
         Jack : 24000,
         Paul : 34000,
         Monica : 55000
     }
    
     // using for...in
     for ( let i in salaries) {
         let salary = "$" + salaries[i];
         console.log(`${i} : ${salary}`);
     }
}

// You can also use for...in loop to iterate over string values.

{
     const string = 'code'
     for (let i in string) {
         console.log(string[i]);
     }
}

// for...in with Arrays

{
     // define array
    const arr = [ 'hello', 1, 'JavaScript' ];
     for (let x in arr) {
         console.log(arr[x]);
     }

     // You should not use for...in to iterate over an array where the index order is important.

     // One of the better ways to iterate over an array is using the for...of loop.
}

/* JavaScript forEach() */

/* The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets. */

{
    // array.forEach(function(currentValue, index, arr));

    // function(currentValue, index, arr) - a function to be run for each element of an array
    // currentValue - the value of an array
    // index (optional) - the index of the current element
    // arr (optional) - the array of the current elements
}

/* forEach with Arrays */

{
     let students = ['John', 'Sara', 'Jack'];

     // using forEach
     students.forEach(myFunction);

     function myFunction(item) {

         console.log(item);
       }

    // the forEach() method takes myFunction() function that displays each element of a students array.
}

/* Updating the Array Elements */

/* the forEach() method is used to iterate over an array, it is quite simple to update the array elements. */

{
     let students = ['John', 'Sara', 'Jack'];

     // using forEach
     students.forEach(myFunction);

     function myFunction(item, index, arr) {

         // adding strings to the array elements
         arr[index] = 'Hello ' + item;
     }

     console.log(students);
}


/* for...of with Sets */

{
     // define Set
     const set = new Set([1, 2, 3]);

     // looping through Set
     set.forEach(myFunction);

     function myFunction(item) {
         console.log(item);
     }
}

/* forEach with Maps */

{
     let map = new Map();

     // inserting elements
     map.set('name', 'Jack');
     map.set('age', '27');

     // looping through Map
     map.forEach (myFunction);

     function myFunction(value, key) {
        
         console.log(key + '- ' + value);
     }
}
