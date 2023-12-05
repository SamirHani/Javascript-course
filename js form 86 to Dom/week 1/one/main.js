/*
  DOM
  - what is DOM
  - Dom selctors
  --- find element by id
  --- tag Name
  --- Class Name
  --- css Selecors
  --- collection
  --- --- title
  --- --- body
  --- --- iamges
  --- --- forms
  --- --- links
 */

let getById = document.getElementById('my-div');
console.log(getById);
let getBytag = document.getElementsByTagName('p');
console.log(getBytag[1]);
let getByClass = document.getElementsByClassName('my-span');
console.log(getByClass[0]);
let getByQuery = document.querySelector('.special');
console.log(getByQuery);
let getByQuery2 = document.querySelector('.my-span');
console.log(getByQuery2);
let getByQueryAll = document.querySelectorAll('.my-span');
console.log(getByQueryAll[1]);
console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Atrributes With methods
  --- getAttribute()
  --- setAttribute()

  search
  - innerText => it is the same of textContent except the spaces,
  and it ignaores the script and style tags and there content,
  but the textContent shows there content only not the tag it self
 */

let myLink = document.querySelector('.shit');
myLink.innerHTML = 'https://www.facebook.com';
console.log(myLink.innerHTML);

let anysetter = document.querySelector('[href="https://facebook.com"]');
console.log(anysetter.getAttribute('href'));
anysetter.setAttribute('href', 'https://www.x.com');
console.log(anysetter.href);

/*
  Dom [check attributes]
  element.attributes
  element.hasAttribute
  element.hasAttributes
  element.remveAttribure
*/

console.log(document.getElementsByTagName('p')[0].attributes);
let myP = document.getElementsByTagName('p')[0];
console.log(myP.hasAttributes());
if (myP.hasAttribute('aria-details')) {
  if (myP.getAttribute('aria-details') === '') {
    myP.removeAttribute('aria-details');
  } else {
    myP.setAttribute('aria-details', 'new value');
  }
} else {
  console.log('not found');
}

/*
  Deal with children
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
 */

// if we have element have elements and textNode and comments (the spaces consider as textnode)
// children will return the elelments only
// childNodes will return all the content
// first and last child will return all the content
// first and last element child will return only elements

/*
  DOM [Events]
  - use events on html
  - use events on js
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  - for window
  --- onload
  --- onscrool
  --- onresize

  - for form
  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");
myBtn.onclick = function () {
  console.log("clicked")
}
window.onresize = function () {
  console.log("resized")
}





// // facebook
// let addFriend = document.querySelectorAll('[aria-label="Add Friend"]');
// for (let i = 0; i < addFriend.length; i++) {
//   addFriend[i].click();
// }
// // let nummo = [10,15]
// let sum = 0;
// for (let i = 0; i < nummo.length; i++) {
// }
// if (parseInt(nummo[i].innerHTML) < 2) {
//   sum++;
// }
// console.log(sum);
