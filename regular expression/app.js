/*
  Regular Expression
  - Email
  - Ip
  - Phone
  - URL
*/

let str1 = 'os1 os12 os123 os123os';

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  MOdifiers => Flags 
  i => case insensitive
  g => global
  m => Multilines

  Sesarch Methods
  - match(Pattern)

  Match 
  -- Matches A String Against a Regular Expression Pattern
  -- Retruns An Array With The Mathces 
  -- Returns null If No Match Is Found.
*/

let myString = 'Hello Elzero Web School I Love elzero';

let regex = /Elzero/gim;

console.log(myString.match(regex));

// we will not use that way to make regex but you have to know it
// let shit = new RegExp(regex, "ig");
// console.log(myString.match(shit))

/*
  Regular Expression
  
  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z] 
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = 'Com Net Org Info Code Io';
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let nums = '12345678910';
let numsRe = /[0-2]/gi;
console.log(nums.match(numsRe));

let notNums = '12345678910';
let notNsRe = /[^0-2]/gi;
console.log(notNums.match(notNsRe));

let special = '1os!2@3#4$5%6^7&8*910';
let specialRe = /os[^0-9]/gi;
console.log(special.match(specialRe));

let theString = 'AaBbcdefG123!234%&*';
let atoZ = /[a-z]/g;
let notAtoZsmall = /[^a-z]/g;
let letters = /[A-Z][a-z]/gi;
let shit = /[Aa]/g;
// let numsAndSpecial = /[]/;
console.log(theString.match(atoZ));
console.log(theString.match(notAtoZsmall));
console.log(theString.match(letters));
console.log(theString.match(shit));
// console.log(theString.match(numsAndSpecial));

/*
Regular Expression
character Classes
. =>  mathces any chacter , except newline or other line terminator.
\w => matches word Charcters . [a-z , A-Z , 0-9 And Uderscore]
\W => matches Non word charcters
\d => matches digits form 0 to 9
\D => matches non-digit charcters
\s => matches wihtespace charcter
\S => matches no whitespace character
*/

let email = 'o@@@g...com o@g.com o@g.net A@Y.com o-g.com o!s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
  Regular Expression
  character classes
  \b => matches at the beginnin or end of a word.
  \B => matches Not at the beginnin/end of a word.

  Test Method 
  pattern.test(input)
*/

let names = 'sayed 1spam spam25spam 3spam spam4 spam5 osama ahmed aspamo';
let re = /\Bspam\B/;
let reatBorE = /(\bspam|spam\b)/g;

console.log(names.match(re));
console.log(names.match(reatBorE));
// returns true or false
console.log(reatBorE.test(names));

/*
Regular Expression

  quantifiers
  n+    => One or more
  n*    => Zero or more
  n?    => zero or one
*/

let mails = 'o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.re';
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let numss = '0110 01 150 05120 0560 350 00';
let nuumssRe = /0\d*0/g;
console.log(numss.match(nuumssRe));

let urls = 'https://google.com http://www.website.new web.com';

let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gim;
console.log(urls.match(urlsRe));

/*
  REGULAR EXPRESSION

  quantifiers
  n{x}    => Number of
  n{x,y}  => Range
  n{x,}   => At least x
 */

let serials = 's100s s3000s s50000s s950000s';
console.log(serials.match(/s\d{3}s/gi)); //s[three nummber]s
console.log(serials.match(/s\d{4,5}s/gi)); //s[four or five numbers]s
console.log(serials.match(/s\d{4,}s/gi)); //s[at least four]s

/*
  Regular Expresson

  Quantifiers
  $  => End with something
  ^  => start with something
  ?= => followed by something
  ?! => Not followed by something
*/

let myStrings = 'we love programming';
let namess = '1osamaz 2ahmedz 3mohammed 4moustafaz 5gamalz';

console.log(/ing$/gi.test(myStrings));
console.log(/^we/gi.test(myStrings));
console.log(/lz$/gi.test(namess));
console.log(/^1o/gi.test(namess));

console.log(namess.match(/\d\w{8}(?=z)/gi)); // start with digit then 5 words then followed by z
console.log(namess.match(/\d\w{8}(?!z)/gi)); // start with digit then 5 words then followed by z

/*
  Regluar Expression

  - replace 
  - replaceAll
*/

let txt = 'we love programming and @ because @ is amazing';

console.log(txt.replace('@', 'javaScript'));
console.log(txt.replaceAll('@', 'javaScript'));

let rea = /@/gi;
console.log(txt.replaceAll(rea, 'JavaScript'));

/*
  Regular Expression
  - Input Form Validation Practice
*/

// document.querySelector('form').onsubmit = function () {
//   let phone = document.querySelector('#phone').value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/gi;
//   let result = phoneRe.test(phone);
//   if (result === false) {
//     console.log("false")
//     return false;
//   }
//   return true;
// };

/*
  Regular Expression challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'http://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'https://web.facebook.com/friends/suggestions/?profile_id=100007034143719'

let urlRe = /^((https?:\/\/)?(www\.)?\w+.\w+)\b([a-zA-z0-9@:%_\+.~#?&/=]*)/gim;

console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));
console.log(url6.match(urlRe));
