let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

let myFriends = ['osama', 'ahmed', 'sayed', 'sayed', 'mahmoud', 'osama'];
console.log([...new Set(myFriends)].sort());

let myInfo = {
  username: 'Osama',
  role: 'Admin',
  country: 'Egypt',
};
let k = Object.keys(myInfo);
let v = Object.values(myInfo);

// let newMap = new Map([
//   [k[0], v[0]],
//   [k[1], v[1]],
//   [k[2], v[2]],
// ]);

//we use entries to convert the object to a map
// Object.entries(myInfo) => this will convert it to array inside arrays with the same count of the object keys and values
// so if we used the new map it will make this arrays map

let newMap = new Map(Object.entries(myInfo));
console.log(newMap);
console.log(newMap.size);
console.log(newMap.has('role'));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let theNumber = 100020003000;
console.log(parseInt([...new Set(theNumber.toString())].sort().join('')));

let theName = 'Elzero';
// 1
console.log(theName.split(''));
// 2
console.log(Array.from(theName));
// 3
console.log([...theName]);
// 4
console.log(Object.assign([], theName));
// 5
console.log(Array.prototype.slice.call(theName));
// 6
let arr = [];
for (const el of theName) {
  arr.push(el);
}
console.log(arr);
let num = 3.1;

// task 6

// let chars = ['A', 'B', 'C', 'D', 'E', 10, 15, 6];
// Output => ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Output => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ['Z', 'Y', 'A', 'D', 'E', 10, 1];
// Output => ["Z", "Y", "Z", "Y", "A", "D", "E"]

// sort the number in the first and chars at the end -
// with the same sort of chars
let iterNums = 0; // variable to calc the number of numbers
let empty = []; // to rearange the array
chars.forEach(function (e) {
  if (typeof e === 'string') {
    empty.push(e);
  } else if (typeof e === 'number') {
    iterNums++;
    empty.unshift(e);
  }
});

// copy the chars  to the place of the numbers
empty.copyWithin(0, iterNums, iterNums * 2);

console.log(empty);

// task 7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

//1
let arow = numsOne.concat(numsTwo);
console.log(arow);

//2
let any = [...numsOne, ...numsTwo];
console.log(any);

// 3
let poll = [];
poll.push(...numsOne, ...numsTwo);
console.log(poll);

// Needed Output
// [1, 2, 3, 4, 5, 6]

// taks 8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * n1.concat(n2).length);
