/*
  Constructor Function
*/

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, 'samir', 5000);
// let userTwo = new User(101, 'elzero', 6000);
// let userThr = new User(102, 'osama', 7000);
// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);
// console.log(userThr.i);
// console.log(userThr.u);
// console.log(userThr.s);

/*
  constructor function
  New Syntax with ES6
  and Deal With Properties And Metohds
*/

// this is the ES6 syntax
// it's just javascript function don't forget that

class User {
  constructor(id, username, salary) {
    // properties
    this.i = id;
    this.u = username || 'Unknown';
    this.s = salary < 6000 ? salary + 500 : salary;
    // the below just property not method
    this.msg = function () {
      return `hello ${this.u} YOur salary is ${this.s} in property functoin`;
    };
  }
  // methods
  sayMsg() {
    return `hello ${this.u} YOur salary is ${this.s} in method`;
  }
}

let newUser = new User(123, 'welcome', 8000);

console.log(newUser.i);
console.log(newUser.u);
console.log(newUser.s);

console.log(newUser instanceof User); // new user example of user
console.log(newUser.constructor === User); // value of constructor is User

// console.log(newUser.sayMsg); // native code
// console.log(newUser.msg); // native code

console.log(newUser.sayMsg()); //method
console.log(newUser.msg()); // properties

/*
  constructor function
  - Update Properties
  - Built In Constructors
*/

class Client {
  // Static Property it's only related to the class
  static count = 0;
  // object properties
  constructor(id, name) {
    this.id = id;
    this.name = name;
    Client.count++;
  }
  // object methods
  updateName(newName) {
    this.name = newName;
  }
  // static method it's only related to the class
  static sayHello() {
    return `hello from class`;
  }
  static countMembers() {
    return `Client Members is ${this.count}`;
  }
}
let fClint = new Client(1000, 'samir');
let fClints = new Client(1000, 'samir');
let fClintss = new Client(1000, 'samir');
console.log(fClint.name);
fClint.updateName('osama');
console.log(fClint.name);

let strOne = 'elzero';
let strTwo = new String('elzero');
// built in constructors
// String Number Boolean Object
console.log(typeof strOne); // string
console.log(typeof strTwo); // object

console.log(strOne instanceof String); // false معمول بطرقه تانيه بس بيتخدم الكونستراكتور
console.log(strTwo instanceof String); // true

console.log(strOne.constructor === String); // true
console.log(strTwo.constructor === String); // true

/*
  Class
  - Static Properties And Methods
*/

// simply the static property is used to create a method
// that you can only access it form the class not the new object
console.log(Client.sayHello());
// console.log(fClint.sayHello()); // Uncaught TypeError: fClint.sayHello is not a function
console.log(Client.countMembers());

/*
  Class
  - Inheritance
*/

class Admin extends Client {
  // extends also extend the count but i used it again to reset the number
  static count = 0;
  constructor(id, name, permissions) {
    // by using super you can import the properties you want form client
    super(id, name);
    this.permissions = permissions;
    Admin.count++;
  }
  // this class can access the client methods too without type it agian
}
let adminU = new Admin(101, 'samirhani name', 1);
console.log(adminU.id);
console.log(adminU.name);
console.log(adminU.permissions);
console.log(Admin.countMembers());

class Superman extends Admin {
  constructor(id, name, permissions, addUsers) {
    super(id, name, permissions);
    this.add = addUsers;
  }
}
let superMan = new Superman(101, 'soso', 1, 'can');
console.log(superMan.id);
console.log(superMan.name);
console.log(superMan.permissions);
console.log(superMan.add);
superMan.updateName('mahmoud');
console.log(superMan.name);

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards the data against illegal access
  - Helps to achieve the target without revealing it's complex datails
  - Will reduce human errors
  - Make the app more flexible and manageable
  - Simplifies the app
*/

class Encap {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let encapOne = new Encap(100, 'samir', 5000);
console.log(encapOne.u);
console.log(encapOne.getSalary());

class Superencap extends Encap {
  constructor(id, username, eSalary, anything) {
    super(id, username, eSalary);
    this.a = anything;
  }
}
// You can't extend the private property it will return undefined
let superEncap = new Superencap(10, 'abosamra', 10215, 'anything');
// but it works if you used the function in the main class
console.log(superEncap.getSalary());

/*
  Prototype
  - intordouction
  - prototypes are the mechanism by which javasccript objects
    inherit features form one another
  -add to prototype chain
  - extend built in constructors features
*/

// Object.prototype.love = function () {
//   return `elzero love scholl`;
// };
// Now you added this feature to all objects and strings
String.prototype.addDots = function (val) {
  return `${val ?? '.'} ${this} ${val ?? '.'}`;
};

let str = 'elzero';

console.log(str.addDots('0'));

/*
  object meta data and descriptor 
  writable
  enumerable
  configurable [cannot delete or reconfigure]
*/
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, 'c', {
  writable: false, // edtitable or not
  enumerable: true, // when looping you can loop it also or not
  configurable: false, // deletabel or redefine
  value: 3,
});

// try edit the prop
myObject.c = 100;

// try loop the prop
for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

// try delete the prop
console.log(delete myObject.c);

// try redefine the prop
// if you edit the configralbe in the first define to false
// then you made a copy of the defining
// if you made any change for any thing it will make error
// Uncaught TypeError: Cannot redefine property: c
// if you copy it typecally it will not show the error but what is the perpose if you copied it
// Object.defineProperty(myObject, 'c', {
//   writable: false, // edtitable or not
//   enumerable: true, // when looping you can loop it also or not
//   configurable: true, // deletabel or re define
//   value: 200,
// }); // Cannot redefine property

console.log(myObject);

/*
  object meta data and descriptor 
  - Define multiple properties
  - check descriptors
*/

const myObj = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObj, {
  c: {
    // when you use that way to add prop
    // any one you don't write it will be false
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});
console.log(myObj);
console.log(Object.getOwnPropertyDescriptor(myObj, 'd'));
console.log(Object.getOwnPropertyDescriptors(myObj));
