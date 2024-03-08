 /* Javascript Map Methods */

 /* Methods */

 //{
     /* You can create a Map by passing an Array to the new Map() constructor */

//     const Data = new Map([
//         ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])

//     console.log(Data);
//     console.log(Data.size);

// }

// {
//     const data = new Map([
//         ["option-5" , 10],
//         ["option-6" , 20],
//         ["option-7" , 30],
//         ["option-8" , 40],
//     ])

//     console.log(data);
//     console.log(data.size);
// }

// {
//     const data = new Map([
//         ["option-9" , 50],
//         ["option-10" , 60],
//         ["option-11" , 70],
//         ["option-12" , 80],
//     ])

//     console.log(data)
//     console.log(data.size);
// }


// {
// /* The set() method can also be used to change existing Map values */

//     const newmap = new Map();

//     newmap.set("item-1" , "car");
//     newmap.set("item-2" , "bus");
//     newmap.set("item-3" , "truck");
//     newmap.set("item-1" , 50 )

//     console.log(newmap);
// }

// {
//     const newmap = new Map();

//     newmap.set("item-1" , "mobile");
//     newmap.set("item-2" , "leptop");
//     newmap.set("item-3" , "headphone");

//     console.log(newmap);
// }

// {
//     const newmap = new Map();

//     newmap.set("item-1" , "orange");
//     newmap.set("item-2" , "mango");
//     newmap.set("item-3" , "banana");

//     console.log(newmap);
// }



// {
//     /* The get() method gets the value of a key in a Map */

//      const newmap = new Map([
//          ["item-1" , "car"],
//          ["item-2" , "bus"],
//          ["item-3" , "truck"]
//      ]);

//      newmap.set("item-1" , "truck");

//      console.log(newmap);
//      console.log(newmap.get("item-1"));
// }


//     {
//          const newmap = new Map([
//              ["item-1" , "orange"],
//              ["item-2" , "mango"],
//              ["item-3" , "banana"]
//          ]);
    
//          newmap.set("item-1" , "banana");
    
//          console.log(newmap);
//          console.log(newmap.get("item-1"));
//     }


//     {
//         const newmap = new Map([
//             ["item-1" , "mobile"],
//             ["item-2" , "leptop"],
//             ["item-3" , "headphone"]
//         ]);
   
//         newmap.set("item-1" , "headphone");
   
//         console.log(newmap);
//         console.log(newmap.get("item-1"));
//    }


// {
//     /* The size property returns the number of elements in a Map */

//      const Data = new Map([
//          ["option-1" , 20],
//          ["option-2" , 40],
//          ["option-3" , 60],
//          ["option-4" , 80],
//          ["option-4" , 80]
//      ])
//      const sizes = Data.size;
//      console.log(sizes);
// }  


// {
//      const Data = new Map([
//          ["option-1" , 10],
//          ["option-2" , 20],
//          ["option-3" , 30],
//          ["option-4" , 40],
//          ["option-4" , 50]
//      ])
//      const sizes = Data.size;
//      console.log(sizes);
// }  

// {
//      const Data = new Map([
//          ["option-1" , -20],
//          ["option-2" , -40],
//          ["option-3" , -60],
//          ["option-4" , -80],
//          ["option-4" , -80]
//      ])
//      const sizes = Data.size;
//      console.log(sizes);
// }  


// {
//     /* The delete() method removes a Map element */

//      const newmap = new Map([
//          ["item-1" , "car"],
//          ["item-2" , "bus"],
//          ["item-3" , "truck"]
//      ]);

//     console.log(newmap);
//     console.log(newmap.delete("item-1"));
//     console.log(newmap);
// } 

// {
//     const newmap = new Map([
//         ["item-1" , "banana"],
//         ["item-2" , "mango"],
//         ["item-3" , "oramge"],
//     ]);

//     console.log(newmap);
//     console.log(newmap.delete("item-1"));
//     console.log(newmap);
// }


// {
//     const newmap = new Map([
//         ["item-1" , "mobile"],
//         ["item-2" , "laptop"],
//         ["item-3" , "headphone"],
//     ]);

//     console.log(newmap);
//     console.log(newmap.delete("item-1"));
//     console.log(newmap);
// }


// {
//     /* The has() method returns true if a key exists in a Map */
    
//      const Data = new Map([
//          ["option-1" , 20],
//          ["option-2" , 40],
//          ["option-3" , 60],
//          ["option-4" , 80]
//      ])
    
//      console.log(Data.has("option-4"));
// }

// {
//      const Data = new Map([
//          ["option-1" , 20],
//          ["option-2" , 40],
//          ["option-3" , 60],
//          ["option-4" , 80]
//      ])
    
//      Data.delete("option-5");

//      const hasss = Data.has("option-5");

//      console.log(hasss);

//      console.log(Data.size);

// }


// {
    
    
//      const Data = new Map([
//          ["option-1" , 10],
//          ["option-2" , 20],
//          ["option-3" , 30],
//          ["option-4" , 40]
//      ])
    
//      console.log(Data.has("option-3"));
// }

// {
//      const Data = new Map([
//          ["option-1" , 10],
//          ["option-2" , 20],
//          ["option-3" , 30],
//          ["option-4" , 40]
//      ])
    
//      Data.delete("option-3");

//      const hasss = Data.has("option-3");

//      console.log(hasss);

//      console.log(Data.size);

// }



/* Note : forEach() after function lecture */

// {
//     const newmap = new Map([
//         ["item-1" , "car"],
//         ["item-2" , "bus"],
//         ["item-3" , "truck"]
//     ]);

//     let mapitem = "";

//     for(const x of newmap.entries()){
//         mapitem += x + "<br>" ;
//     }

//     document.getElementById("element").innerHTML = mapitem
// }


// {
//     const newmap = new Map([
//         ["item-1" , "mobile"],
//         ["item-2" , "leptop"],
//         ["item-3" , "headphoone"]
//     ]);

//     let mapitem = "";

//     for(const x of newmap.entries()){
//         mapitem += x + "<br>" ;
//     }

//     document.getElementById("element");
// }


// {
//     const newmap = new Map([
//         ["item-1" , "orange"],
//         ["item-2" , "mango"],
//         ["item-3" , "banana"]
//     ]);

//     let mapitem = "";

//     for(const x of newmap.entries()){
//         mapitem += x + "<br>" ;
//     }

//     document.getElementById("element");
// }