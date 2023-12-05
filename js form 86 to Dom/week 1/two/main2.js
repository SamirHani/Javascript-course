/*
DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - CreateAttribute
  - appendChild
 */
let myElement = document.createElement('div');
let myAttr = document.createAttribute('data-custom');
let myText = document.createTextNode('product One');
let myComment = document.createComment('this is div and comment');

myElement.className = 'product';
myElement.setAttributeNode(myAttr);

myElement.setAttribute('data-test', 'testing');

// apend text to element

document.body.appendChild(myElement);
myElement.appendChild(myComment);
myElement.appendChild(myText);
console.log(myElement);

// document.write(`<div class="div-hello"> hello </div>`);
// let div = document.getElementsByClassName('div-hello')[0];
// let newatt = document.createAttribute('class');
// newatt.value = 'bg-green welcome';
// div.setAttributeNode(newatt);
// div.setAttribute('hell', 'welcome');
// console.log(div);

//
//
//
//
//
//
//
// myElement.setAttribute(
//   'style',
//   'color: red; background-color: green; padding: 10px; text-align: center;'
// );
function changeStyle() {
  // created attribute
  let myStyle = document.createAttribute('style');
  // assign attribute value
  myStyle.value = 'color: blue;';
  // append attribute to the element you need
  myElement.setAttributeNode(myStyle);
}
