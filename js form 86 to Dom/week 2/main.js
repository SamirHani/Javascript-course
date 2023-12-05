/*
  click
  focus
  blur
  you can read about more events in the reference
 */
// one of the ideas of the simulation events that you can
// make validation in the input if it's valid you can move automaticlly
// to the next input like apple's website

let one = document.querySelector('.demo');
one.setAttribute(
  'style',
  `display: inline-block;
  padding: 15px;
  border-radius: 5px;
  color: white;
  background-color: #367693;`
);

let inputo = document.querySelector('.input');

window.onload = function () {
  inputo.focus();
};

console.log(one, inputo);
one.onmouseover = function () {
  inputo.blur();
};

/*
DOM [Class List]
- calssList
--- length
--- contains
--- item(index);
--- add
--- remove
--- toggle
*/
let element = document.getElementById('elzero');
let element2 = document.querySelector('.removeme');
let reset = document.querySelector('.reset');
console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains('elzero'));
console.log(element.classList.contains('one'));
console.log(element.classList.item('0'));

element.onclick = function () {
  this.classList.add('color');
};
element2.onclick = function () {
  element2.classList.add('hidden');
};
reset.onclick = function () {
  element.classList.remove('color');
  element2.classList.remove('hidden');
  inputo.focus();
};

/*
  DOM [Css]
  - style
  - cssText
  - removeProperty(propertyName) [INline, Stylesheet]
  - setProperty(PropertyName, value, priority)
*/
let elemento = document.getElementById('my-div');

// this is inline
elemento.style.fontWeight = 'bold';
elemento.style.color = 'red';

elemento.style.cssText = 'font-weight: bold; color: green; opacity: 0.9;';
// set and remove property in inline
elemento.style.removeProperty('color');
elemento.style.setProperty('font-size', '40px', 'important');
// in css file
// dont use this rules in the code again
document.styleSheets[0].rules[5].style.removeProperty('line-height');
document.styleSheets[0].rules[5].style.setProperty(
  'background-color',
  'red',
  'important'
);
document.styleSheets[0].rules[5].style.cssText =
  'border-radius: 20px; background-color: red; color: white; padding: 10px; margin: 10px';

/*
  before()
  after()
  append()
  prepend()
  remove
*/

elemento.before('shit this is before + there is a deleted element here + ');
elemento.after('shit this is after');
elemento.append(' append');
elemento.prepend('prepend ');

// elemento.remove();

/*
  DOM [Traversing]
  - nextSibling اللي هوا الشئ الذي يلي العنصر االلي اختارته
  - previousSibling اللي هو قبل الشئ اللي اختارته
  - nextElementSibling العنصر اللي بيلي العنصر المختار
  - previousElementSibling العنصر الذي يسبق العنصر المختار
  - parentElement العنصر الأب
*/

let span = document.querySelector('.two').cloneNode(true);

// console.log(span.previousElementSibling.style.color = "black");
console.log(span.parentElement);

/*
  DOM [Clloning]
  - cloneNode(Deep)
  - remember to change the classes and id to avoid any errors
*/
console.log(elemento);
console.log(span);
elemento.appendChild(span);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On 
  - Attach Multipe Events
  - Error Test
  
  Search 
  - Capture & Bubbling Javascript
  there is a three argument in the addeventlistner that takes true and false 
  true mean capture and false means bubbling 
  it is by default is false
  caputre mean the parent event will implement first then the child
  bubbling is the opposite of the caputre the child event will implement first

  - removeEventListener
*/

// when i use onclick to add two events the second one will over ride the first one

let myP = document.querySelector('.my-p');
myP.addEventListener('click', function () {
  // let newP = document.createElement('p');
  // let text = document.createTextNode('hello form p cloned');
  // newP.appendChild(text);
  let newP = myP.cloneNode(true);
  newP.className = 'cloned';
  document.body.appendChild(newP);
  // newP.addEventListener("click", function(){
  //   console.log("I'm cloned")
  // })
});

document.addEventListener('click', function (e) {
  if (e.target.className === 'cloned') {
    console.log(e.target);
  }
});
// you can use object or javascript funciton

// myP.addEventListener('mouseover', function () {
//   console.log('hello from hover');
// });
