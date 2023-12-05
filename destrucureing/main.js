// first 3 vids in destructuring about arrays

// let myFriend = ['samir', 'said', ['hend', 'ali', 'ahmed'], 'osama'];
// let a = 6;
// [, , , a] = myFriend;

let myFriend = ['samir', 'said', ['hend', 'ali', 'ahmed'], 'osama'];
let [, , , a] = myFriend;
console.log(a);

[, , [, , b]] = myFriend;
document.write(b);

// the 3rd lesson in destructuing about swap
let book = 'video';
let video = 'book';

// normal way to swap values in js
// let stash = book;
// book = video;
// video = stash;

// Destructuring way to swap vars in js
[book, video] = [video, book];

console.log(book);
console.log(video);

// destructuring an object

const user = {
  theName: 'samir',
  theAge: '21',
  theTitle: 'student',
  skills: {
    html: 70,
    css: 80,
    js: 77,
    tile: '',
  },
};

// let { theName, theTitle } = user;
({ theName, theTitle } = user);
console.log(theName, 'is', theTitle);

// destructuring object part 2

// you can add another anme by this way
// add default value by useing assing operator
// the defaul tvalue will only appear when there is no property or the value of this prop in the assigned obj is undefined
const {
  html: h,
  css: cs,
  php: ph = 'no skill in php this is default value',
  tile = 'tiletile',
} = user.skills;
console.log(h, cs, ph, tile);

// you can acces nested object by this way or the above one
const {
  skills: { html, css },
} = user;
console.log(css, html);

//  Destructuring Function parameters

const hola = {
  welcome: 'hola',
  goodMorning: 'buenos dias',
  goodNight: 'buenos notches',
  anything: {
    thing: 'one',
    things: 'two',
  },
};

// function translate(obj) {
//   console.log(`welcome is => ${obj.welcome}`);
//   console.log(`goodMorning is => ${obj.goodMorning}`);
//   console.log(`goodNight is => ${obj.goodNight}`);
// }

function translate({
  welcome: w,
  goodMorning: m,
  goodNight: n,
  anything: { things: t },
} = hola) {
  console.log(`welcome is => ${w}`);
  console.log(`goodMorning is => ${m}`);
  console.log(`goodNight is => ${n}`);
  console.log(`thing is => ${t}`);
}

translate(hola);

// destructuring challenge

let chosen = 1;

let myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

// destructuring the array
let [one, two, three] = myFriends;

// destrucuring the function parameter object
function call(
  { title, age, available, skills: [, sec] } = myFriends[chosen - 1]
) {
  console.log(title);
  console.log(age);

  if (available === true) {
    console.log('avilable');
  } else {
    console.log('Not Avilable');
  }

  console.log(sec);
}

if (chosen === 1) {
  call(one);
} else if (chosen === 2) {
  call(two);
} else if (chosen === 3) {
  call(three);
}
