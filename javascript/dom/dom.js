// //document object model in javascript//

// //selecting elements

// //getElementbyId() - select an element by id.
// //getElementsByTagName() - select elements by a tag name.
// //getElementsByclassName() - select elements by one or more class names.
// //queryselector() - select elements by css selectors.


// //javascript getElementById

// {
//     //document.getElementByIdlementById('para1').innerHTML="Hello DOM !"
//     // document.getelementbyid('box-1').innerHTML="This is div tag"
//     //const model = document.getelementbyclassname('box');
//     //console.log(model);
//     const element = document.getElementsByTagName('h1');
//     function addText(){
//         for(let i = 0; i < element.length; i++){
//         element[i].innerHTML = "Hello world!"
//         element[i].style.color ="orange"
//         element[i].style.background = "green"
//     } 
//   }
//   addText();
// }


// {
//     const Newelement = document.createElement("marquee");
//     Newelement.textcontent = "This is marquee tag"
//     document.body.appendChild(Newelement)
// }


// //queryselector()
// {
//     //document.queryselector('.box').style.color="green";
//     //document.querySelectorAll('.box').style.color="green";
// }

// //queryselectorAll

// {
//     const elements = document.querySelectorAll("#sun p");
//     console.log(elements);

//     function changecolorss() {
//         for (let i = 0; i < element.length; i++) {
//             elements[i].style.color = "red";
//         }
//     }
// }