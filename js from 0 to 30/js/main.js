// start 9 videos

// THIS event wait the page loaded then do this command
window.onload = function () {
  document.querySelector("h3").style.fontSize = "20px";
  document.querySelector("h3").style.color = "orange";
};

document.querySelector("p").style.color = "red";
document.querySelector("p").style.fontSize = "40px";
document.querySelector("p").style.fontWeight = "bold";
document.querySelector("p").style.fontFamily = "sans-serif";
// document.getElementById ("");

// window.alert("hello samir from js");
// it is not used becouse it stop the page load

document.write("<h1> hello h1 from document.write </h1>");
document.querySelector("h1").style.color = "green";
// it is not the profissional way to do this

// document.createElement("<h1> hello world </h1>");
console.error("document create element dose not work ya 3am");
/*
console methods
1-log
3-error
2-table
*/

// this is called directive %c used to style any thing after it

console.log(
  "hello console from %cjs %cfile",
  "color: red; font-size: 40px;",
  "color: blue; font-size: 40px;"
);
// it is used to print any message in the console

// console.error("this is error ya %csamir", "color: yellow; font-size: 40px;" );
// to print error in the console

console.table(["zsamir", "hani", "samir", "amir"]);
console.table(["S", "A"]);
// to see table with the array in the console with the index

// API is application programming interface
// the console is not in js but js use it from WEB API

var myname = "samir";
console.log(`Hello ${myname}`); // to print the var in the console in es6
console.log("Hello " + myname); // in old version js

// end 9 videos
// start from 10 to 17 videos

/* Data Type Intro
  - string
  - number
  - Array => Object
  - Object
  - Boolean
  - Undefined
  - Null => Object
  - We will study big int, symbol
  */
console.log(
  "%cData Type Intro",
  "color: red; font-size:30px; font-weight: bold;"
);

console.log(typeof "samir");
console.log(typeof 20);
console.log(typeof 20.2);
console.log(typeof [20, 10, 44]);
console.log(typeof ["samir", "ahmed", "mona"]); // it is array but it's object
console.log(typeof { name: "samir", age: 20, country: "EG" }); // this is realy object it's key and value
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

// Variables Intro
console.log(
  "%cVariavles Intro",
  "color: red; font-size:30px; font-weight: bold;"
);

var user = "samir"; //normal decliration

var name = "SAmira",
    type = "male"; // multi decliration
    
console.log(user, "is", type, ",what about you ?");
// if You typed decleared the variable without add var it will make overrider
// if you made a id for element it will declear a var with the same id name automaticly and you can use it directly
secd.innerHTML = "is this element edited by innerHTML ?";
// used to edit the element content in html
h3.innerHTML = "hello shit"; // it uses only the id
console.log(secd);
console.log(user);

// declear the varible before use it
// loosly typed vs strongly typed

// identfire name rules
// don't start var name with num or special char you can start with underscore and dollar sign and you can use camelCase or PASCALCASE or many ways you can search about

// var, let, const compare
console.log(
  "%cVar , %clet , %cconst",
  "color: violet; font-size:20px; font-weight: bold;",
  "color: lightblue; font-size:20px; font-weight: bold;",
  "color: chartreuse; font-size:20px; font-weight: bold;"
);

/*
  var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window Object] (Yes)
  - Block or Function Scope

  let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama [Added To Window] (No)
  - Block or Function Scope

  const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama [Added To Window] (No)
  - Block or Function Scope
*/

/*
  search about character escape sequences

  string syntax + character escape sequences
  \ Escape + Line continue
  \n
*/
console.log(
  "%cEscape Sequences",
  "color: red; font-size:20px; font-weight: bold;"
);

console.log("You can Write 'single in double'");
console.log("You can Write 'single in single'");
console.log('You can Write "double in single"');
console.log('You can Write "double in double"');
console.log('samir\
website "double in double"'); // it's alredy double in double but the fucken prettier make it single
console.log("samir website \\\"double\"'hello'");
console.log("samir\nwebsite\n");
console.log("samir \\n website\n");

/*
concatenation
*/
console.log(
  "%cConcatenation",
  "color: red; font-size:20px; font-weight: bold;"
);

let a = "i love";
let b = "Javascript";

document.write(a + b);
document.write(" * new element * ");
console.log(a + b + "\n" + a);
console.log(a, b); // it add the space in the console by adding comma, between the two vars
document.write(a, " ", b);

// the seconde lesson for concatenation
console.log(
  "%cSeconde Lesson for Concatienation",
  "color:red; font-weight: bold; font-size: 20px;"
);
let myPara = "hello";

let card = `
<div class="card"
style="background: white;
text-align: center;
margin-top: 50px;">
  <div calss="text">
    <h1>${myPara + 50 * 20}</h1>
    <p>paragaraph is the most way to find your self</P>
  </div>
</div>
`;
document.write(card);

let we = "we";
let love = "love";
let Javascript = "javascript";

console.log(we + " " + love + "\n" + Javascript);
console.log(`${we} ${love}
${Javascript}`);

console.log(`${we} ${love}
  ${Javascript}
  ${myPara} ${"i loved this backteck alot"}`);

document.write(`${we} ${love}
  ${Javascript}
  ${myPara} "i loved this backteck alot" `);

// end from 10 to 17 videos
// start from 18 to 22 videos

/*
  Arithmetic Opearators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre]
  -- Decrement [ Post / Pre]
  */
console.log(
  "%cArithmetic Opearators",
  "color: red; font-size:20px; font-weight: bold;"
);

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama");
console.log(typeof NaN); // not a number but it is number

console.log(10 * 20);
console.log(10 * -20);

console.log(10 / -20);

console.log(2 ** 4);

console.log(100 % 5);
console.log(104 % 5);

let numPreI = 1;
++numPreI;
console.log(numPreI);

let numPostI = 1;
++numPostI;
console.log(numPostI);

let numPreD = 1;
--numPreD;
console.log(numPreD);

let numPostD = 1;
--numPostD;
console.log(numPostD);

// there is no deferance between the pre and the post here but if you tried it in the console it will be right

/*
this thing is used to make string number or trans the string to number like null and false and true
  + Unary Plus [Return Number If Its Not Number]
  - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float 
  - Hexadecimal Numeral System => 0xFF
  - null 
  - false
  - true
*/
console.log(
  "%cUnary operators",
  "color: red; font-size:20px; font-weight: bold;"
);

console.log("start unary Plus operations");
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"samir");
console.log(+"10.2");
console.log(+"0xFF");
console.log(+null);
console.log(+false);
console.log(+true);

console.log("start unary Negative operations");
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"samir");
console.log(-"10.2");
console.log(-"0xFF");
console.log(-null);
console.log(-false);
console.log(-true);

/*
  Type Coercion (Type Casting)
  - +
  - - 
  - "" - 2
  - false - true
*/
console.log(
  "%cType Coercion",
  "color: red; font-size:20px; font-weight: bold;"
);

let ab = "10";
let bb = 20;
let cb = true;

console.log(ab + bb); // string it is concatinate

console.log(+ab + bb); // number
console.log(ab - bb); // number
console.log(bb - true); // number
console.log("" - 2); // number
console.log(+""); // number it = 0
console.log(false - true);
console.log(+false - +true);

console.log(ab + bb + cb); // string
console.log(+ab + bb + cb); // Number

/*
  Assignment Operators
*/
console.log(
  "%cAssignment Operators",
  "color: red; font-size:20px; font-weight: bold;"
);

let x = 10;

x = x + 20;

x = x + 70;

x **= 2; // x = x ** 2;
x += 10; // x = x + 100;
x -= 10; // x = x + 100;
x *= 44; // x = x + 100;
x /= 14; // x = x + 100;
x %= 10; // x = x + 100;

console.log(x);
// end from 18 to 22 videos
// start from 23 to 26 videos

console.log("%cNumber", "color: red; font-size:20px; font-weight: bold;");
/*
all number in js is double Precision 
- Syntactic sugar "_"
- e
- **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
  */
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_SAFE_INTEGER);

console.log(
  "%cNumber Methods",
  "color: red; font-size:20px; font-weight: bold;"
);

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger()
  - isNaN()
  */

console.log((100).toString());
console.log((100).toString());
console.log((100.1).toString());

console.log((100.55555).toFixed());

// the diffenence between the unary operator and the number and parseInt 👇

console.log(+"100");
console.log(Number("100 Osama"));
console.log(parseInt("100.5600 Osama"));
console.log(parseFloat("100.560 Osama"));

console.log(Number.isInteger("100.500"));
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.5));
console.log(Number.isNaN("OSAMA" / 20));

console.log("%cMath Object", "color: red; font-size:20px; font-weight: bold;");

/*
Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.5)); // it will be 100
console.log(Math.round(99.2)); // it will be 99

console.log(Math.ceil(99.5)); // سقف
console.log(Math.floor(99.5)); // أرضية

console.log(Math.min(10, 20, 30, 5, -4, 100, 77));
console.log(Math.max(10, 20, 30, 5, -4, 100, 77));

console.log(Math.pow(4, 2)); // it will be 16 it means power
console.log(Math.random()); // it will be random
console.log(Math.trunc(99.5)); // it means cut it will return only the integer part

// end from 23 to 26 videos
// start from 27 to 30 videos
console.log(
  "%cString Methods",
  "color: red; font-size:20px; font-weight: bold;"
);
/*
Strign Methods
  - Access With Index[]
  - Access With charAt()
  - length
  - trim() it trim the spaces before and after
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/
let theList = [1, 2, 2, 5, 17, 10];
let theName = " samir ";
console.log(theList[4]);
console.log(theList);
console.log(theName);
console.log(theName[4]);
console.log(theName.charAt(3));
// the spaces in the "" considered as a character

console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log(theName.toUpperCase().trim());
console.log(theName[4].toUpperCase().trim());

/* string methods
  -indexOf(Value [Mand], start [opt] Length)
  -lastIndexOf(Value [Mand], start [opt] Length)
  -slice(Start [Mand], End [opt] Not Include End)
  -repeat(Times) [ES6]
  -split(Separator [opt], Limit [opt])  
*/
console.log(
  "%cString Methods 2",
  "color: red; font-size:20px; font-weight: bold;"
);

let and = "Elzero Web School\n"

console.log(and.indexOf("Web" , 5));
console.log(and.indexOf("Web" , 8));
console.log(and.indexOf("Web"));
console.log(and.lastIndexOf("Web"));

console.log(and.slice(5, 9));
console.log(and.slice(1, 7))
console.log(and.slice(-6, -1));
console.log(and.repeat(5));
console.log(and.split(" ")) // this split from the space
console.log(and.split("")); // this split from every charcter
console.log(and.split("o" , 2)); //  this split form the o char but give you first two

/*
string methods
  - substring(start [mand], end [opt] not including end)
  --- start > end will swap
  --- start > 0 it start from 0
  ---use length to get last charcter

  -substr(start [mand], cahracters to extract)
  ---start >= length =""
  ---Negative start from end

  -includes(value [mand], start [opt] default 0) [ES6]
  -startWith(value [mand], start [opt] default 0) [ES6]            this 3 features gives true and false
  -endWith(value [mand], start [opt] default full length) [ES6]
*/

console.log(
  "%cString Methods 3",
  "color: red; font-size:20px; font-weight: bold;"
);

let string3 = "elzero web school";

console.log(string3.substring(2, 6));
console.log(string3.substring(6, 2));
console.log(string3.substring(-6, 6)); // seems like from 0 to 6
console.log(string3.substring(string3.length - 5 , string3.length - 3));

console.log(string3.substr(0, 6));  
console.log(string3.substr(17));  // the result will be empty string if you use index more than the exist index
console.log(string3.substr(-3));  
console.log(string3.substr(-5, 2)); 

console.log(string3.includes("web"));
console.log(string3.includes("web", 8));

console.log(string3.startsWith("e"));
console.log(string3.startsWith("e", 2));
console.log(string3.startsWith("z", 2)); // we use the length not the index

console.log(string3.endsWith("o", 6)) // we use the length not the index


// end from 27 to 30 videos
