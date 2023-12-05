// two ways to export
// first you can put export word befor every thing you need
// or you can use expoert like in line 12
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `something`;
}

// or you can use export like this
export { a, arr, saySomething };

export default function sayHello() {
  return `hello `;
}
