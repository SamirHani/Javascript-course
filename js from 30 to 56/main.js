// start 31 to 39
/* 
  comparison operators
  - == Equal             comopare value only
  - != not Equal

  - === Identical        compare value + type
  - !== Not identical

  - > larger than
  - >= larger than or equal

  - < smaller than
  - <= smaller than or equal

*/
console.log(
  '%ccomparison operators',
  'color: red; font-size: 20px; font-weight; bold;'
);

console.log(10 == '10');
console.log(10 != '10');

console.log(10 === '10');
console.log(10 !== '10');
// ____________________________________________________________________________________________

/*
  logical operators
  - ! Not
  - && And
  - || or
*/
console.log(
  '%cLogical Operators',
  'color: red; font-size: 20px; font-weight; bold;'
);
console.log(true);
console.log(!true);
console.log(!(10 == '10'));

console.log(10 == '10' && 10 > 8 && 10 >= 10);

console.log(10 == 10 || 10 > 10 || 10 == 'welcome');
// ____________________________________________________________________________________________

/* 
  control flow
  - if 
  - else if
  - else

  if (condition) {
    block of code
  }

*/

/*
Nested If
*/

console.log(
  '%ccontrol flow and nested if',
  'color: red; font-size: 20px; font-weight; bold;'
);
let price = 100;
let discount = false;
let discountAmount = 30;
let country = 'Egypt';
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === 'Egypt') {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else if (country === 'syria') {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);
// ____________________________________________________________________________________________

/*
conditinal (ternary) operator {if المختصره}

Condition ? If True : If False

*/
console.log(
  '%cconditinal (ternary) operator',
  'color: red; font-size: 20px; font-weight; bold;'
);

let theName = 'Mona';
let theGender = 'Female';
let theAge = 60;

if (theGender === 'Male') {
  console.log('Mr');
} else {
  console.log('Mrs');
}

theGender === 'Male' ? console.log('Mr') : console.log('Mrs');

let resule = theGender === 'Male' ? 'mr' : 'mrs';

console.log(`hello ${resule} ${theName}`);
document.write(`hello ${theGender === 'Male' ? 'mrr' : 'mrss'} ${theName}`);

// for the else if

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge <= 60
  ? console.log('between 60 and 20')
  : theAge > 60
  ? console.log('larger than 60')
  : console.log('hello');
// ____________________________________________________________________________________________

/*
  Logical or ||
  - Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  - Null + Undefined
*/
console.log(
  '%cNullish Coalescing Operator',
  'color: red; font-size: 20px; font-weight; bold;'
);
let priceLogicOr = 200;

console.log(`The Price Is ${priceLogicOr || 200}`); // this return the value for or operator if there is null or undefined or 0
console.log(`The price IS ${priceLogicOr ?? 200}`); // this retun the nulling coalishing operator value if there is only null and undefined

// if there variabel without value like let month; it will return undefined

// ____________________________________________________________________________________________

/*
  switch statement
  switch(expression) {
    Case 1:
      code of block
      break;
    Case 2:
      code block
      break;
    Default:
      code block
  }
  - Default ordering 
  - Multiple Mathc
  - ===
*/
console.log(
  '%cSwitch Statement',
  'color: red; font-size: 20px; font-weight; bold;'
);

// let day = 2;

// switch (day) {
//   case 0:
//     console.log("sat");
//     break;
//   case 1:
//     console.log("sun");
//     break;
//   case 2:
//     console.log("mon");
//     break;
//   case 3:
//     console.log("tues");
//     break;
//   case 4:
//     console.log("wed");
//     break;
//   case 5:
//     console.log("thu");
//     break;
//   case 6:
//     console.log("fri");
//     break;
//   default:
//     console.log("unknown day") // you can put the default at any position not just the end
// }

let day = '  Wednesday  ';
day = day.trim().slice(0, 1).toUpperCase() + day.trim().slice(1);
// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day) {
  case 'Friday':
  case 'Saturday':
  case 'Sunday':
    console.log('No Appointments Available');
    break;
  case 'Monday':
  case 'Thursday':
    console.log('From 10:00 AM To 5:00 PM');
    break;
  case 'Tuesday':
    console.log('From 10:00 AM To 6:00 PM');
    break;
  case 'Wednesday':
    console.log('From 10:00 AM To 7:00 PM');
    break;
  default:
    console.log('Its Not A Valid Day');
}
console.log(day);

console.log(true || (false && false)); // the && is stronger than || and the () stronger than &&

// end 31 to 39
// ____________________________________________________________________________________________

// start 40 to 47

/* 
  arrays 
  - Create arrays [two methods] new Array() + []
  - Acess Arrays Elements
  - Nested Arrays
  - Cahnge Arrays Elements
  - Check for array Array.isArray(arr);
*/
console.log('%cArray', 'color: red; font-size: 20px; font-weight; bold;');
let myFriends = ['Ahmed', 'mohamed', 'sayed'];
let Friends = ['Ahmed', 'mohamed', ['omar', 'yasser']];
let nemo = 'shit';
console.log(`hello ${myFriends[2]}`);
console.log(`hello ${Friends[2][1]}`);

Friends[2][1] = 'change the array';
console.log(`${Friends[2][1]}`);

console.log(Array.isArray(Friends));
console.log(Array.isArray(nemo));
// ____________________________________________________________________________________________

/*
  Arrays Methods
  - Length
  index start from 0 , length starts from 1
*/

console.log(
  '%cArray length method',
  'color: red; font-size: 20px; font-weight; bold;'
);

let nwarray = ['Ahemd', 'mahmoud', 'osama'];
console.log(nwarray.length);
console.log(nwarray);

nwarray[2] = 'gamal';
console.log(nwarray.length);
console.log(nwarray);

nwarray[6] = 'osos';
console.log(nwarray.length);
console.log(nwarray);

nwarray[nwarray.length] = 'samir';
console.log(nwarray.length);
console.log(nwarray);

nwarray[nwarray.length - 1] = 'update auto';
console.log(nwarray);

nwarray.length = 4;
console.log(nwarray);

// ____________________________________________________________________________________________

/* 
  Array Methods [Adding And Removing]
  - unshift("", "") Add element to the start
  - push("", "") add element to the end
  - shift() remove first element from array and you can use it in varible
  -pop() remove last element from array and you can use it in varialbe
*/
console.log(
  '%cArray Methods [Adding And Removing]',
  'color: red; font-size: 20px; font-weight; bold;'
);
let addremove = ['One', 'Two', 'Three', 'Four'];

console.log(addremove);

addremove.unshift('minu One', 'Zero');
console.log(addremove);

addremove.push('Five', 'Six');
console.log(addremove);

let first = addremove.shift();
console.log(first);
console.log(addremove);

let end = addremove.pop();
console.log(end);
console.log(addremove);
// ____________________________________________________________________________________________
/* 
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(ValueToFind , From Index [Opt]) [ES7]
*/

console.log(
  '%cArrays Methods [Search]',
  'color: red; font-size: 20px; font-weight; bold;'
);

let searcho = ['ola', 'samah', 'omnia', 'sarah', 'ola'];

console.log(searcho);
console.log(searcho.indexOf('ola'));
console.log(searcho.indexOf('ola', 2));
console.log(searcho.indexOf('omnia')); // if the value not found will return -1
console.log(searcho.lastIndexOf('ola'));
console.log(searcho.lastIndexOf('ola', -2));

console.log(searcho.includes('sarah'));

let value = searcho.indexOf('sarah');
if (value === -1) {
  console.log('not found');
} else {
  console.log(`this value exist in index ${value}`);
}
// ____________________________________________________________________________________________
/*
  Arrays Methods [Sort]
  - sort(Function [opt])
  - reverse
*/
console.log(
  '%cArrays Methods [Sort]',
  'color: red; font-size: 20px; font-weight; bold;'
);

let sorto = ['10', 'ahmed', 'Amany', 'Omnia', 'osama', '1000', 50, 2, 99, 1000];

console.log(sorto); // Question i don't know why "1000" is before 1000 after sort
console.log(sorto.sort()); // all capital letters exists before all samll letters and it compare the first number only
console.log(sorto.sort().reverse());

// ____________________________________________________________________________________________

/*
  Arrays Methods [Slicing]
  - slice(start [opt], end [opt] not including end)
  --- slice() => All Array
  --- If start is Undefined => 0
  --- Negative count from end
  --- If end is Undefined || > Indexes => Slice to the end array.length
  --- Return New Array
  - splice(start [mand], DeleteCount [opt] [0 No Remove], The Items To Add [opt])
  --- If Negative => Start From The End
*/

console.log(
  '%cArrays Methods [Slicing]',
  'color: red; font-size: 20px; font-weight; bold;'
);

let sliceo = ['Ahmed', 'Saad', 'Othman', 'Morgan'];

console.log(sliceo.slice());
console.log(sliceo.slice(1));
console.log(sliceo.slice(1, 3));
console.log(sliceo.slice(-3));
console.log(sliceo.slice(2, -1));
console.log(sliceo.slice(-4, -1)); // this method return new array don't edit your array

sliceo.splice(1, 2, 'Samir', 'Samara'); // this method edit the array by delete and add items
console.log(sliceo);

/* 
  Arrays Methods [Joining]
  - concat(array, array) => REturn A new array 
  - join(separator) //this method take all the items in the array and make it string not array
*/

console.log(
  '%cArrays Methods [Joining]',
  'color: red; font-size: 20px; font-weight; bold;'
);

let myFriend = ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer'];
let myNewFriends = ['Samar', 'Sameh'];
let schoolFriends = ['Haytham', 'Shady'];

let allFriends = myFriend.concat(myNewFriends, schoolFriends, 'GAmeel', [1, 2]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join('|'));
console.log(allFriends.join(''));
console.log(allFriends.join(' @ '));

// end 40 to 47
// Start 48 to ..

/*
  Loop
  - For
  for ([initialization] [condition] [step]) {
    Block of code
  }
*/

// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

/*
  Loop
  - Loop ON sequences
*/

let loopo = [
  1,
  2,
  3,
  5,
  'Osama',
  true,
  'othman',
  7,
  'mariam',
  'amira',
  'omnia',
];

let onlyNames = [];

for (let i = 0; i < loopo.length; i++) {
  if (typeof loopo[i] === 'string') {
    onlyNames.push(loopo[i]);
  }
}
console.log(onlyNames);

/*
  Loop
  - Nested Loops
*/

let products = ['keyboard', 'mouse', 'pen', 'pad', 'monitor', 'iphone'];
let colors = ['Red', 'Green', 'Blue'];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log('#'.repeat(15));
  console.log(`# ${products[i]}`);
  console.log('#'.repeat(15));

  console.log('Colors: ');
  for (let j = 0; j < colors.length; j++) {
    console.log(colors[j]);
  }

  console.log('-Model: ');
  for (let k = 0; k < models.length; k++) {
    console.log(models[k]);
  }
}

/**
  Loop Control
  - Break 
  - Continue 
  - Label
 */

// for (let i = 0; i < products.length; i++) {
//   if (products[i] === "pen") {
//     break;
//   }
//   console.log(products[i]);
// }

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === 'number') {
//     continue; // continue means to not include this value or exclude the value
//   }
//   console.log(products[i]);
// }

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === 'Green') {
      break nestedLoop;
    }
  }
}

/*
  loop for advanced example
 */
let i = 0;
for (;;) {
  console.log(products[i]);
  i += 2;
  if (i === products.length) break;
}

/**
 * Products practice
 */

let showCount = 5;

document.write(`<h1> Showing ${showCount} Products</h1>`);
document.write(`<div class="prods">`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div class="prod">`);
  document.write(`<h2>[${i + 1}] ${products[i]}</h2>`);

  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<div>`);
  document.write(`${colors.join(' | ')}`);
  document.write(`</div>`);
  document.write(`</div>`);
}
document.write(`</div>`);

/**
 * Loop
 * - While
 */

let index = 0;
4;
while (index < products.length) {
  console.log(`${index} ${products[index]}`);
  index++;
}
// to stop the while if the condition always true to use the if and break;
while (true) {
  console.log(index);
  index++;
  if (index === 8) {
    break;
  }
}

/**
 * Loop 
 * - Do / While
 */

// do the order then check the loop
do {
console.log("hello");
} while(false);



// End 48 to ..
