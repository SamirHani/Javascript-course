let msTY = 31557600000;
/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In coputer science is the number of seconds since january 1 , 1970.
  why 1970 [829 days to 136 years] 

  search for 
  - year 2038 proplem in couputer science
*/

let dateNow = new Date();

console.log(dateNow);

console.log(`${Date.now() / msTY} year`);

/*
  date and time 
  - getTime() = > Number of miiliseconds
  - getDate() => day of the month
  - getFullYear() 
  - getMonth() => zero based
  - getDay() => Day of the weak
  - getHours()
  - getMinutes()
  - getSeconds()
*/
let birthday = new Date('04 dec , 2002 ');
let birthdays = new Date(2002, 11, 4, 5);
let age = (dateNow - birthday) / msTY;
let days = (age - Math.floor(age)) * 365.25;
console.log(`${Math.floor(age)} Years and ${Math.round(days)} days`);
// as elzero suggested you can make an array with months or array
// with days to choose the day or the month you need from the index below
console.log(dateNow.getTime() / msTY, 'gets time from 1970 to provided date');
console.log(dateNow.getDate(), 'what is the day of the month');
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth(), 'this is month index not number of it');
console.log(dateNow.getDay(), 'day of the weak {sunday is 0 index}');
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

/*
  date and time
  - setTime(mill)
  - setDate() => day of the month [negative and positive]
  - setFullYear(year , month => optional [0-11] , day => optional [1-31])
  - setMonth(month [0-11], Day => opt [1-31] [Negative and positive])
  - setHours(Hours [0-23], minutes => opt [0-59] ,seconds => opt [0-59] , MS opt [0-999])
  - setMinutes(minutes => opt [0-59] ,seconds => opt [0-59] , ms opt [0-999])
  - setSeconds(seconds => opt [0-59] , ms opt [0-999])
*/

console.log(dateNow);
console.log('#'.repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);
// console.log('#'.repeat(66));

// dateNow.setDate(-7);
// console.log(dateNow);

// dateNow.setFullYear(2022);
// console.log(dateNow);

// dateNow.setMonth(0);
// console.log(dateNow);

// dateNow.setHours(0);
// console.log(dateNow);

// dateNow.setMinutes(55);
// console.log(dateNow);

// dateNow.setSeconds(59);
// console.log(dateNow);

// dateNow.setSeconds(59);
// console.log(dateNow);

/*
  date and time

  new Date(timestamp)
  new Date(date string )
  new Date(numeric values )

  format 
  'oct 25 1982'\
  '10/25/1982'
  1982-10-25
  1982 10
  1982
  82
  1982 , 9 ,25, 2, 10 ,0
  1982 , 9 , 25
  1982-10-25t06:10:00Z
*/

let date1 = new Date('oct 25 1982');
console.log(date1);

let date2 = new Date('10/25/1982');
console.log(date2);

let date3 = new Date('1982-10-25');
console.log(date3);

let date4 = new Date('1982 10');
console.log(date4);

let date5 = new Date('1982');
console.log(date5);

let date6 = new Date('82');
console.log(date6);

let date7 = new Date('2002', '8', '28', '2', '10', '0');
console.log(date7);

let date8 = new Date('1982 , 9 , 25');
console.log(date8);

let date9 = new Date('1982-10-25t06:10:00Z');
console.log(date9);

/*
  date iand time
  l- track opertiaons time

  search 
  - performance.now()
  - performance.mark()
*/

//start time
let start = new Date();

// for (let i = 0; i < 10000; i++) {
//   document.write(`<div>${i}</div>`);
// }
//end time
let end = new Date();
// duraton time
let duration = end - start;
console.log(duration);

/* 
  generators 
  - generator function run it's code when required.
  - generator function return special object [generator object]
  - generators are iterable 
*/

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();
console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

// the second one will not print any thing because the generator is fully used and done is true
for (let value of generator) {
  console.log(value);
}

/* 
  generators 
  - delegate generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield 'a';
  yield 'b';
  yield 'c';
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  // this will return the array as it is nut yielding it
  // yield [4, 5, 6];
  yield* [4, 5, 6];
}

let generate = generateAll();
console.log(generate);
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
// if you want to stop you can use return
console.log(generate.return());

/*
  generators
  - generate infinite numbers
  - use return inside generators
*/
// if you use retrun the function will not run anymore like
// the normal function

function* generateinfinite() {
  let index = 0;
  while (true) {
    yield ++index;
  }
}
let generateinf = generateinfinite();
console.log(generateinf.next());
console.log(generateinf.next());
console.log(generateinf.next());
console.log(generateinf.next());
console.log(generateinf.next());

/*
  modules
  - import and export
*/
import { a, arr, saySomething as s } from './app.js';
console.log(a);
console.log(s());
console.log(arr);

/*
  modules 
  - export alias
  - named export
  - default export
  - import all 
*/

import say, { a as samir } from './app.js';
console.log(say());
console.log(samir);
import * as any from './app.js';
console.log(any);
console.log(any.saySomething());
console.log(any.arr);

/*
  JSON
  - API Overview
  - tools to test API
  - Preview Github API
*/

const myJsonObjectFromServer = '{"Username": "Osama", "Age":30}';

console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject.Username = 'elzero';
myJsObject.Age = '50';
console.log(myJsObject);

const myJsonObjectToServer = JSON.stringify(myJsObject);

console.log(myJsonObjectToServer);

console.log(JSON);
// asynchronos , synchronos

/*
  to understand ajax , fetch , promises
  callstack and callstack queue;

*/

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log('settimeout one');
// }, 0);
// setTimeout(() => {
//   console.log('settimeout two');
// }, 0);

// function one() {
//   console.log('function one');
// }
// function two() {
//   one();
//   console.log('function one');
// }
// function three() {
//   two();
//   console.log('function one');
// }

// three();

/*
  AJAX
  - new XMLHttpRequest();
  - open("get or post" , "fileDirection" , async true or false)
  - send()
  - .onreadystatechange

  - readyState
    (meaning of numbers of readyState)
      0 request not initialized
      1 server connection established
      2 request received
      3 processing request
      4 request is finished and response is ready

  - status
      200 response is successful
      404 not found


*/
let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'repos.json'); // default is async true
myRequest.send();
// console.log(myRequest.readyState);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    let repos = JSON.parse(this.responseText);
    console.log(repos)
    for (let i = 0; i < repos.length; i++) {
      //make the variables of the nameofrepos and avatar link
      let div = document.createElement('div');
      let repsoName = document.createTextNode(repos[i].full_name);
      let img = document.createElement('img');
      // let ownerAvatar = document.createTextNode(repos[i].owner.avatar_url);

      // append the img and reposName to the div
      div.appendChild(img);
      div.appendChild(repsoName);

      // set the link attribue and alt to the photo
      // img.setAttribute('url', ownerAvatar);
      img.setAttribute('src', 'images/SpotifyFlat.png');
      img.setAttribute('alt', 'ownerAvatar');

      // add the div to the body then add class card to it
      document.body.appendChild(div);
      div.classList.add('card');
    }
  }
};


