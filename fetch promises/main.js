// /*
//   promise intro and stntax
//   promise is something that will happen in the future
//   promise avoid callback hell
//   promise is the object that represent the status of an async operation and it's resulting value

//   then
//   -- takes 2 optional arguments [callback for success or failure]
// */

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction('connection established');
//   } else {
//     rejectFunction(Error('not connected'));
//   }
// });

// console.log(myPromise);

// myPromise.then(
//   (resolveValue) => console.log(`${resolveValue}`),
//   (rejectValue) => console.log(`${rejectValue}`)
// );

// /*
//   promise training
//   Then    => promise is successfull use the resolved data
//   catch   => promise is failed , catch the error
//   finally => promise successfull or failed finally do something
// */

// const newPromise = new Promise((resolveFunction, rejectFuction) => {
//   let arr = ['samir', 'hani', 'mah'];
//   if (arr.length === 4) {
//     resolveFunction(arr);
//   } else {
//     rejectFuction(Error('Number of employees is less than 4'));
//   }
// });

// newPromise
//   .then(
//     (resolveValue) => {
//       resolveValue.length = 2;
//       return resolveValue;
//     }
//     // ,(rejectValue) => `rejected because ${rejectValue}`
//   )
//   .then(
//     (resolve) => console.log(resolve)
//     // ,(reject) => console.log(reject)
//   )
//   .catch((rejectReson) => console.log(rejectReson))
//   .finally(console.log('the operation is done'));

// /*
//   Promise and XHR (XMLHttpRequest)
// */
// const getData = (apiLInk) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error('wrong URL'));
//       }
//     };
//     myRequest.open('GET', apiLInk);
//     myRequest.send();
//   });
// };

// getData('./repos.json')
//   .then((resolve) => {
//     resolve.length = 10;
//     return resolve;
//   })
//   .then((resolve) => console.log(resolve[0].name))
//   .catch((rej) => console.log(rej));

/*
  fetch API  
*/

// let any = fetch('./repos.json')
//   .then((result) => result.json())
//   .then((s) => console.log(s[0].name));
// /*
//   training about xhr :)
// */
// let xhr = new XMLHttpRequest();
// xhr.open('get', './repos.json');
// xhr.send();
// console.log(xhr.readyState);
// xhr.onload = function () {
//   let data = JSON.parse(xhr.responseText);
//   data.length = 10;
//   console.log(data[0].name);
// };

/*
  Promise 
  - All
  - All Settled
  - Race
*/

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('iam the first promise');
//   }, 5000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('iam the second promise');
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('iam the third promise');
//   }, 2000);
// });

// all should be resolved if one is rejected it will return the first rejectvalue
// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resvalues) => console.log(resvalues),
//   (rejecValues) => console.log(rejecValues)
// );

// it will return the all value either res or rej but will type beside it rejected
// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resvalues) => console.log(resvalues),
//   (rejecValues) => console.log(rejecValues)
// );

// it will return the first value it will face dont matter it res or rej
// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resvalues) => console.log(`Resolved ${resvalues}`),
//   (rejecValues) => console.log(` Rejected ${rejecValues}`)
// );

/*
 *Async
 *- Async Before Function Mean This Function Return A Promise
 *- Async And Await Help In Creating Asycnhronous Promise Behavior With Cleaner style
  return && throw
 */

// function data() {
//   return new Promise((resolve, reject) => {
//     let users = ['osama'];
//     if (users.length > 0) {
//       resolve('Users Found');
//     } else {
//       reject('No Users Found');
//     }
//   });
// }
// data().then(
//   (res) => console.log('resolved', res),
//   (rej) => console.log('rejected', rej)
// );

// function data() {
//   let users = ['osama'];
//   if (users.length > 0) {
//     return Promise.resolve('Users Found');
//   } else {
//     return Promise.reject('No Users Found');
//   }
// }
// data().then(
//   (res) => console.log('resolved', res),
//   (rej) => console.log('rejected', rej)
// );

// async function data() {
//   let users = ['smair'];
//   if (users.length > 0) {
//     return 'Users Found';
//   } else {
//     throw new Error('No Users Found');
//   }
// }
// console.log(data());
// data().then(
//   (res) => console.log('resolved', res),
//   (rej) => console.log('rejected', rej)
// );

/*
  Await
  - Await Wrorks Only Inside Async Function
  - Await Make Javascript Wait For The Promise Result 
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

// const iPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('iam the good promise');
//     reject(Error('iam the bad promise'));
//   }, 3000);
// });

// async function readData() {
//   console.log('Before Promise');
//   // iPromise.then((res) => console.log(res));
//   // console.log(await iPromise)
//   console.log(await iPromise.catch((err) => err));
//   console.log('after Promise');
// }
// readData();

/*
  Async & Await With try catch finally
*/

async function fetchData() {
  console.log('before fetch');
  try {
    let data = await fetch('./rpos.json');
    console.log(await data.json())
  } catch (error) {
    console.log('reson:', error);
  } finally {
    console.log('after fetch');
  }
}

fetchData();
