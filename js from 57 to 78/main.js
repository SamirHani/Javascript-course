/*
  Function
  - What Is Funciton?
  - User Defined vs Built In 
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Parctical Example
*/

function sayHello(userName) {
  console.log(`Hello ${userName}`);
}

sayHello('Othman');
sayHello('Ali');
sayHello('Omar');

/*
  Funcion Advanced Examples
 */

function sayHelloAge(userName, age) {
  if (age < 20) {
    console.log(`app is not suibale for you`);
  } else {
    console.log(`hello ${userName} Your Age is ${age}`);
  }
}

sayHelloAge('osama', 20);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (exclude === i) {
      continue;
    }
    console.log(i);
  }
}

generateYears(2002, 2023, 2020);

/*

  !Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interruptting
 */

function retunUserName(userName) {
  return `Hello ${userName}`;
}
let result = retunUserName('samir');
console.log(result);

function calc(num1, num2) {
  return num1 + num2;
  // you cant put the result of the return under the line of return becauze of ASI
}
let result2 = calc(10, 20);
console.log(result2);

// You can use Return to inturpt the function

function interruptiing(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (15 === i) {
      return `interruptiing`;
    }
  }
}
interruptiing(10, 20);

/*
  Function
  - Default Function Parameters
  - Funciton Paramerters Deafult [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHelloDefault(
  userName,
  age = 'Unknown' /* default parametars value */
) {
  // if (age === undefined) {
  //   age = 'Unknown';
  // }
  // age = age || 'Unknown';

  return `Hello ${userName} Your Age Is ${age} `;
}
console.log(sayHelloDefault('samir'));

/*
  Function 
  - Reset Parameters
  - Only One Allowed
  - Must Be Last Element
 */

function calcolation(x, y, ...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  console.log(x, y, numbers);
  return result;
}
console.log(calcolation(10, 10, 10, 40));

/*
  Function Advanced Practice
  - Parameters
  - Default 
  - Rest 
  - Loop 
  - Condition
 */

function showInfo(us = 'Un', ag = 'Un', rt = 0, show = 'Yes', ...sk) {
  document.write(`<div 
  style="
  border-radius: 7px;
  color: white;
  width: fit-content;
  background: #374853;
  padding: 20px 30px;">`);

  document.write(`<h2> Welcome, ${us}</h2>`);
  document.write(`<h2> Age: ${ag}</h2>`);
  document.write(`<h2>Hour Rate: $${rt}</h2>`);
  if (show === 'Yes') {
    if (sk.length > 0) {
      document.write(`<span style="font-weight: bold;">Skills: </span>`);
      for (let i = 0; i < sk.length; i++) {
        document.write(`<span style="font-weight: bold;">${sk[i]}</span> `);
      }
    } else {
      document.write(`<p style="font-weight: bold;">Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p style="font-weight: bold;">Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo('Samir', 38, 20, 'Yes', 'html', 'CSS', 'JS');

/**
  Function - Random Argument Challenge
  
 */

function showDetails(a, b, c) {
  let age, name, stat;
  typeof a === 'number'
    ? (age = a)
    : typeof a === 'string'
    ? (name = a)
    : (stat = a);

  typeof b === 'number'
    ? (age = b)
    : typeof b === 'string'
    ? (name = b)
    : (stat = b);

  typeof c === 'number'
    ? (age = c)
    : typeof c === 'string'
    ? (name = c)
    : (stat = c);

  stat === true
    ? (stat = 'Avilable for Hire')
    : (stat = 'Not Avilable for Hire');
  document.write(
    `<div> Hello ${name}, Your age is ${age}, Your are <span style="font-weight: bold;"><mark>${stat}</mark></span></div>`
  );
}

showDetails('Samir', 20, true);
showDetails(20, 'Samir', true);
showDetails(true, 20, 'Samir');
showDetails(false, 'Samir', 20);

/*
  Funciton
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
 */

// you can use the normal function before initialization but in the anonymous you can't

console.log(calca(20, 20));

function calca(num1, num2) {
  console.log(num1 + num2);
}

// console.log(calclator(20, 20));

// let calclator = function (num1, num2) {
//   return num1 + num2;
// };

document.getElementById('show').onclick = function () {
  console.log('show');
};

// setTimeout(function () {
//   console.log('settime');
// }, 1000);

function helloMam() {
  document.write('<div>hello mam</div>');
}
// sayHello();
document.getElementById('beet').onclick = helloMam; // idk why it clear all elements in the document

/**
  Function
  - Function Inside Function
  - Return Function
 */

// Example 1
function sayMessage(fName, lName) {
  let message = 'hello';

  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
    return message;
  }
  return concatMsg();
}

console.log(sayMessage('samir', 'hani'));

// Example 2

function sayMessage(fName, lName) {
  let message = 'hello';

  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage('samir', 'hani'));

// Example 3

function sayMessage(fName, lName) {
  let message = 'hello';

  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage('samir', 'hani'));

/**
 * arrow function
 * - regular vs arrow [ param , no param]
 * multiple lines
 */

// let printo = function (num) {
//   return num;
// }

// let printo = _ => 10; // you can remove the {} and return word if you just have one line

// let printo = () => 10; // the () are optional with _ if there is no param

// let printo = () => {
//   return 10;
// }

// let printo = () => {
//   console.log('helo', 'welcome');
//   return 10;
// };

// console.log(printo());

/**
  Scope
  - Global And Local Scope
 */

var a = 1;
let b = 2;
function showText() {
  var a = 10;
  let b = 20;
  console.log(`hello local scope ${a}`);
  // if you decleared the var inside the local scope but you used it before intialization you will get error
  console.log(`hello local scope ${b}`);
  // local can read from global if there is no variables with the same name in the local
  // global can not ever read from the local
}
showText();

console.log(`hello global scope ${a}`);
console.log(`hello global scope ${b}`);

/**
 * Scope
 * - Block Scope [If , switch , For , While]
 * for, if, while and switch don't creat a new scope so the var keyowrd will not have an effect
 * let and const make new scope to keep the data secret , save memory so the block var will stop the exist one after the block finishes running
 * solve the namespace collisions problem
 * you will get ReferenceError if you tryied to acces local variable in the global with the let and const keys
 */

// Global Scope
// var c = 100;
let cc = 101;

// var is not block scope

if (true) {
  var c = 50;
}

if (true) {
  let cc = 10;
  console.log(cc);
}

console.log(c);
console.log(cc);

let x = 0;
switch (x) {
  case 0:
    var sam = 'samir';
}
console.log(sam);

// function shit() {
//   var samo = 'sama';
// }
// console.log(samo);

/**
 * Scope
  - Lexical Scope

  search 
  - Execution Context
  - Lexical Environment
 */

function parent() {
  var aa = 10;

  function child() {
    console.log(`from child ${a}`);

    function grand() {
      console.log(`From Grand ${a}`);
    }
    grand();
  }
  child();
}
parent();

/**
  heiger order function
  -filter    //make new array
  -map       //make new array
  -reduce    //make new array
  -forEach   //edit the array
 */

let myNums = [1, 2, 3, 4, 5, 6];

let addSelf = myNums.map(function (Element, index, arr) {
  console.log(Element + Element);
  console.log(index);
  console.log(arr);
  console.log(this);
  console.log('.'.repeat(40));
}, 10);

let swappingCases = 'elZERo';

let sw = swappingCases
  .split('')
  .map(function (el, index, arr) {
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  })
  .join('');
console.log(sw);

let nono = 'sam58i4r';

let ign = nono
  .split('')
  .map(function (el) {
    return isNaN(el) ? el : '';
  })
  .join('');
console.log(ign);

/*
 *filter
  !filter
 */
let friends = ['Ahmed', 'Sameh', 'Sayed', 'Asmaa', 'Omnia', 'Amgad', 'Israa'];
let numbers = [11, 20, 2, 5, 17, 10];

let filterFirends = friends.filter(function (el) {
  return el.startsWith('A');
});
let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(evenNumbers);
console.log(filterFirends);

/**
 * apply for filter and map
 */

let sentence = 'I Love Foood Code Too Playing Much';

let smallWord = sentence
  .split(' ')
  .filter(function (el) {
    return el.length <= 4;
  })
  .join(' ');
console.log(smallWord);

let mix = 'A13BS2ZX';

let multiNums = mix
  .split('')
  .filter(function (ele) {
    return !isNaN(ele);
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join(' ');
console.log(multiNums);

let acc = [1, 10, 20, 50, 30];

let red = acc.reduce(function (acc, current, index, arr) {
  return acc + current;
}, 111);
console.log(red);

let theBiggest = ['Bla', 'Propaganda', 'other', 'AAA', 'Battery', 'Test'];

let removeCars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

let check = theBiggest.reduce(function (acc, ele, ind, arr) {
  return acc.length > ele.length ? acc : ele;
});
console.log(check);

let finalString = removeCars
  .filter(function (ele) {
    return ele !== '@';
  })
  .reduce(function (acc, ele, ind, arr) {
    return `${acc}${ele}`;
  });
console.log(finalString);

/**
  forEach
    explain and practice;
 */

let liAll = document.querySelectorAll('ul li');
let divAll = document.querySelectorAll('.content div');
liAll.forEach(function (ele) {
  ele.onclick = function () {
    // remove the active class
    liAll.forEach(function (ele) {
      ele.classList.remove('active');
    });
    // add the active calss
    this.classList.add('active');
    //hide all divs
    divAll.forEach(function (ele) {
      ele.style.color = 'red';
    });
  };
});

document.querySelectorAll('.content div').forEach(function (ele) {
  ele.onclick = function () {
    this.style.color = 'white';
  };
});


