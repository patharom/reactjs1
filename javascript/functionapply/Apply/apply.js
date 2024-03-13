/* Function Apply() Method */

// {
//     const newobj ={
//         firstname : 'taylor',
//         lastname : 'jackson'
//     }

//     function grow(wish , message){
//         return `${this.firstname} , ${wish}. ${message}`;
//     }

//     const result = grow.apply(newobj , ["good morning" , "how are you"]);
//     console.log(result);
// }

// {
//       const NewObj  = {
//         firstName : 'Taylor',
//         lastName : 'Jackson'
//       }
      
//       const grow = (wish , message) => {
//         return `${this.firstName} , ${wish}. ${message}`; 
//       }
      
//       const result = grow.apply(NewObj , ["Good Morning"  , "How Are You" ]);
//       console.log(result);
// }
    

/* Function Borrowing Method */

// const item = {
//     name:'AUDI',
//     discription(){
//         return `${this.name} is of ${this.color} color.`
//     }
// }

// const bike ={
//     name:'DUCATI',
//     color:'black'
// }

// let result = item.discription.apply(bike)

// console.log(result);


/* Append Array */

// let color1 = ["Red", "Green", "Blue"];
// let color2 = ["Yellow", "Black"];

// // appending two arrays color1 and color2
// color1.push.apply(color1, color2);

// console.log(color1);
