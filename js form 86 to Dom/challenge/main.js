// set the font family for the page
document.body.setAttribute(
  'style',
  'font-family: sans-serif; background-color: #e3e6e6; margin: 0; display: flex; flex-direction: column; height: 100vh;'
);

// create the heade
let header = document.createElement('header');
document.body.appendChild(header);
header.setAttribute(
  'style',
  'padding: 10px; background-color: white; display: flex; justify-content: space-between; align-items: center; height: fit-content; font-weight: bold; '
);

// left side of the header
let logo = document.createElement('span');
let logoText = document.createTextNode('Elzero');
logo.appendChild(logoText);
header.appendChild(logo);
logo.setAttribute('style', 'color: #18996d; font-size: 25px;');

// right side of the header
let nav = document.createElement('nav');
header.appendChild(nav);
nav.setAttribute('style', 'display:flex; gap: 18px;');

let home = document.createElement('span');
let homeText = document.createTextNode('Home');
home.appendChild(homeText);

let products = document.createElement('span');
let productsText = document.createTextNode('Products');
products.appendChild(productsText);

let footer = document.createElement('span');
let footerText = document.createTextNode('Footer');
footer.appendChild(footerText);

let ads = document.createElement('span');
let adsText = document.createTextNode('Ads');
ads.appendChild(adsText);

nav.appendChild(home);
nav.appendChild(products);
nav.appendChild(ads);
nav.appendChild(footer);

// create the products
let section = document.createElement('section');

for (let i = 1; i <= 15; i++) {
  let pro = document.createElement('div');
  pro.setAttribute(
    'style',
    'display: flex; background-color: white; margin: 10px; padding:10px; flex-direction: column; align-items: center; gap: 10px; color: black; '
  );
  pro.innerHTML = `<span style="font-weight: 700; font-size: 25px">${i}</span> <span style="color: #759393; font-size: 12px;"> product </span>`;
  section.appendChild(pro);
}
document.body.appendChild(section);
section.setAttribute(
  'style',
  ' flex-grow: 1; padding: 10px; display: grid; grid-template-columns: repeat(3, 1fr)'
);

// create the footer
let foot = document.createElement('footer');
let footText = document.createTextNode('Copyright 2023');
foot.appendChild(footText);
document.body.appendChild(foot);
foot.setAttribute(
  'style',
  'background-color: #18996d; padding: 25px; color: white; font-weight: bold; display: grid; place-items: center; height: 30px'
);
