/*
 * object
 * window
 * access
 */
let newObject = {
  //Properties
  themeem: 'Samir',
  theAge: 21,
  //Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(newObject.themeem);
console.log(newObject.theAge);
console.log(newObject.sayHello());

/*
 *Dig Deeper
  - dot notation vs Barcket Notation 
  - dynamic property meem  // you can not access the dynamic prperty by the dot notation
 */
let myVar = 'country of';
let user = {
  themeem: 'Osama',
  theCounty: 'Egypt',
  'country of': 'egiptian',
};
console.log(user.themeem);
console.log(user['country of']); // only use the bracket to use unvalid property meem
console.log(user[myVar]); // only use this way to access the dynamic property
// this dynamic property meem will not work because of the ⬇️⬇️
console.log(user['myVar']); // double quotes
console.log(user.myVar); // dot notation

/*
  object
  - Nested object and trainings
 */

let uso = {
  meem: 'samir',
  age: 38,
  skills: ['html', 'css', 'js'],
  available: false,
  addresses: {
    ksa: 'Riyadh',
    egypt: {
      one: 'cairo',
      two: 'giza',
    },
  },
  checkAv: function () {
    if (uso.available === true) {
      return 'free for wrork';
    } else {
      return 'not free';
    }
  },
};

console.log(uso.meem);
console.log(uso.age);
console.log(uso.skills[2]);
console.log(uso.addresses.ksa);
console.log(uso.addresses.egypt.one);
console.log(uso['addresses']['egypt']['one']);
console.log(uso.checkAv());

/**
  object 
  - create with new keyword new object();
 */

let userall = {
  age: 20,
};
console.log(userall);

userall.age = 21;
userall['country'] = 'egypt';

userall.sayHello = function () {
  return `hello`;
};
console.log(userall.age);
console.log(userall.country);
console.log(userall.sayHello());

let newUser = new Object({
  age: 19,
  sayHee: () => `welcome`,
  welcome: `hello`,
});

console.log(newUser.welcome);

/*
  object
  This Keyword
 */
//normaly this refers to the window object
console.log(this);
function well() {
  console.log(this);
}
well();

let fofo = {
  hola: 'hello',
  holo: function () {
    return `${this.hola}${fofo.hola}`;
  },
};
console.log(fofo.holo());
document.getElementById('cl').onclick = function () {
  console.log(this.innerHTML);
};

// THIS REFERS TO the object that its exist in or the something that it refer to like the button

// read about this in strict mode.

/**
  Object
  create object with create method
 */

let myobjo = {
  age: 40,
  double: function () {
    // using this in the belwo line will make it dynamic to make prototype of this object and reassign the age will double it dynamicly
    return this.age * 2;
  },
};

console.log(myobjo);
console.log(myobjo.age);
console.log(myobjo.double());

// the below line will make protype of the myobjo and meem it obj
// when i use arrow function in function inside an object this keyword referes to window not the object

let tryThisAndObjcet = {
  valuea: true,
  thoso: function () {
    return this;
  },
  avialbilty: function () {
    return this.valuea === true ? `Avilable to work` : `Not avilable to work`;
  },
};

console.log(tryThisAndObjcet);
tryThisAndObjcet.meem = `tryThisAndObjcet`;
console.log(tryThisAndObjcet);
console.log(tryThisAndObjcet.valuea);
console.log(tryThisAndObjcet.thoso());
console.log(tryThisAndObjcet.avialbilty());

let obj = Object.create(myobjo);

obj.age = 20;
// the upper line reassign the value of the age to 20 after it was 40
console.log(obj);
console.log(obj.age);
console.log(obj.double());

// function nnon() {
//   'use strict';
//   let xorhello= 10;
//   console.log(this + ` hello world`);

// }
// nnon();

/*
  object
  create object with assign method
 */

let obj1 = {
  prop1: 10,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop1: 200,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 1000,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj2, obj1);

let newObj = Object.assign({}, obj1);

console.log(finalObject);
console.log(newObj);

// search part

// javascript objcets

// this in restricted mode inside a function equlas undefined
// you can use the function of hasOwnProperty("the name of the prop")
// you can use the function of hasOwnProperty(index of the prop)
// if the prop is exist but equals to undefined or null it will return true
const buz = {
  fog: 'stack',
  mog: 'mogg',
  dog: 'dog',
  hog: 'hog',
};
// when you use keys or values the thing that you use make them array you can access any one of them by it's index
console.log(Object.keys(buz));
console.log(Object.values(buz).sort());

for (const meem in buz) {
  // the above condition means that you make var named it meem it will take the values of the keys in order until they end
  if (buz.hasOwnProperty(meem) === false) {
    console.log(`this is fog (${meem}) for sure. Value: ${buz[meem]}`);
  } else {
    console.log(meem); // toString or something else
  }
}