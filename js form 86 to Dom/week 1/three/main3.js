// main div have class product
// h3 have text
// p have text
// maek 100 copy in the page
for (let i = 0; i < 100; i++) {
  let myElement = document.createElement('div');
  let myHeading = document.createElement('h3');
  let myPara = document.createElement('p');
  
  myElement.className = 'product';
  
  let mytext = document.createTextNode(`product title ${i + 1}`);
  let mytext2 = document.createTextNode('product description');


  myHeading.appendChild(mytext);
  myPara.appendChild(mytext2);

  myElement.appendChild(myHeading);
  myElement.appendChild(myPara);

  // ading style to the products
  myElement.setAttribute(
    'style',
    'background-color: #213440; text-align: center; padding: 10px; margin: 20px; color: white; width: 150px; border-radius: 10px;'
  );
  // center the elements in the body
  document.body.setAttribute(
    'style',
    'display: flex; flex-wrap: wrap; justify-content: center;'
  );
  document.body.appendChild(myElement);
}
//#323532 color;
