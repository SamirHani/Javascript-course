// Set
// properties
// - size

//Methods
// - add
// - delete
// - clear
// - has

let mydata = ['iam', 'mydata', 'mydata'];
for (let i = 0; i < mydata.length; i++) {
  console.log(mydata[i]);
}

// this is normal array :)
console.log(mydata);

// the first char of Set should be capital
let unique = new Set(mydata);
unique.add('samira samir');
// the set don't allow the repeted elements
// you can not access the elements in side the set with index
console.log(unique);

console.log(unique.size);
// the size is equal to the length in the array

console.log(unique.add('mydata'));
// console.log(unique.delete('iam'));
// console.log(unique.clear());
console.log(unique.has('mydata'));

unique.forEach((x) => console.log(x + 1));

// the Set and the WeakSet

/*
  data type
  - set can contain all data types
  - weakSet just stores the objects
  size
  - set has size
  - weakSet dont has size
  values + keys [alias for the values]
  - set has values and keys and entries 
  - weak set dont has clear , keys , values and entries
  forEach 
  - set can use foreach
  = weak set can not use foreach


  usage: store objects and removes them once they become inaccessible
*/

// type of data

let mySet = new Set([1, 2, 3, 4, 'A', 'samir hani']);
let myws = new WeakSet([{ A: 1, B: 2 }]);
console.log(mySet.entries());
mySet.forEach((el) => console.log(el));
console.log(myws);

console.log(mySet.size);

let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next());
console.log(iterator);
console.log(iterator.next());
console.log(iterator);
console.log(iterator.next());
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(mySet.keys());

/*
  - map data type
  syntax : new Map(Iterable with key/value)
  -
  -- map vs Object
  -
  ------ Map => don't contain key by default
  ------ object => has default keys
  -
  ------ map => key can be anyting [function , object ,any primitvie data types]
  ------ object => string or symbol
  -
  ------ Map => ordered by insertion
  ------ object => not 100% till now
  - 
  ------ Map => Get items by size
  ------ object => need to do manually 
  -
  ------ Map => can be directly iterated
  ------ object -> Not directly and need to use object.keys() and so on 
  -
  ------ Map => better performance when add or remove data
  ------ object => low performance when coparing to map

*/
let myObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

let emptyObj = Object.create(null); // this object dont have defualt keys exactly like the map
let myMap = new Map();

myMap.set('name', 'samir');
myMap.set('age', 30);
myMap.set('country', 'Eg');

myMap.forEach((el) => console.log(el));

console.log(myMap.get('name'));

console.log('#'.repeat(20));

console.log(Object.keys(myObject));

console.log('#'.repeat(20));

console.log(myMap.keys());

console.log('#'.repeat(20));

console.log(myObject);

console.log('#'.repeat(20));

/*
Map data type
- methods
--- set 
--- get
--- delete
--- clear
--- has

properties
--- size
*/

let newMap = new Map([
  ['name', 'samir'],
  ['age ', 30],
  [
    'welcome',
    {
      name: 'samir',
      age: 30,
    },
  ],
]);

newMap.set('shit key', 'shit value');

console.log(newMap.get('welcome').age);

/* 
  Map vs WeakMap
  "
  WeakMap allows garbage collector to do its taks but not map
  "
  --
  Map      => key can be anyting
  weakMap  => key can be object only
  --
*/

/*
  Array Methods
  - Array.from(Iterable , MapFunc , This)
  --- Variabe
  --- string numbers
  --- set
  --- using the map funciton
  --- arrow function
  --- shorten the method + use arguments
*/
console.log(Array.from('osama'));
console.log(Array.from('12345'));
console.log(
  Array.from('12345', function (n) {
    return +n + +n;
  })
);
console.log(Array.from('12345', (n) => +n + +n));

// remove repeated elements in the array  using array.form
let arr = [1, 1, 1, 2, 2, 2, 4, 3, 'a'];
let newSet = new Set(arr);
console.log(Array.from(newSet));

// to make array from funciton arguments
function af() {
  return Array.from(arguments);
}
console.log(af('samir', 'osama', 'elzero'));

/*
  copyWithin(tartget , start , end but not included)
  the array will stay in the same length
  so if you copy a two elements (0,1) and put it in any position
  the two elements in this position will be removed and replace the 
  two elemnts thAT YOU WANT to keep the arry length

  improtant note
  the array will be changed for ever not just edit it temporary

  if there is no start index it will start from 0 and
  if there is no end  index it will reach to the end

*/
let myArray = [10, 20, 30, 40, 'a', 'b'];

// console.log(myArray.copyWithin(3, 0, 2)); //[10, 20, 30, 10, 20,'b'];

// console.log(myArray.copyWithin(0 , -2)); // ['a', 'b', 30, 40, 'a', 'b']

// console.log(myArray.copyWithin(0, -3, -1)); //[40, 'a', 30, 40, 'a', 'b']

/*
  Array Methods

  *important it only returns true and false not like the filter
  - array.some(CallbackFunc(Element, Index , Array), This argument)
  --- CallbackFunc => function to run on every elemetn on the given array
  ------ element => the current element to process
  ------ Index => index of current element
  ------ array => the current array working with
  --- this argument => value to use as this when executing callbackfunction
  -- 
  using 
  - check if element exists in array
  - check if number in range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// variable to make as this argument
let myNumber = 5;

let check = nums.some(function (e) {
  console.log(this);
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 9);

console.log(check);

// make function to see if there is specific number in array
function checkValue(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValue(nums, 20));
console.log(checkValue(nums, 3));

// make function to check if there is a number in a specific range

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

// make function to give us any element infringe the condition

function gool(arr) {
  return arr.every(function (e) {
    return e > 0;
  });
}

console.log(gool(nums));

/*
array.every()
*/

const locations = {
  10: 'eg',
  20: 'iran',
  30: 'ksa',
  40: 'UAE',
};
let locationReferance = 15;
let locationsArray = Object.keys(locations);

function checkLocation() {
  return locationsArray.every(function (e) {
    return e > locationReferance;
  }, locationReferance);
}

console.log(checkLocation());

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log('osama');
console.log(...'osama');
console.log([...'osama']);

// Concatenate Array

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ['osama', 'ahmed', 'sayed'];
let thisYearFriends = ['sameh', 'mahmoud'];

allFriends.push(...thisYearFriends);
console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, 30, 40, 50, 1000, -200];
console.log(Math.max(...myNums));

// Spread With Object => Merge Objects

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
let obj2 = {
  d: 4,
  e: 5,
};

console.log({ ...obj1, ...obj2, f: 6 });
