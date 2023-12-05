/*
  DOM [Events]
  - Validate Form pracitce
  - Prevent default
*/
let user = document.querySelector("[name='username']");
let age = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (user.value !== "" && user.value.length <= 10) {
    userValid = true;
  }
  
  if (age.value !== "") {
    ageValid = true;
  }
  
  if (userValid === false || ageValid === false) {
    e.preventDefault();
    console.log(e);
  }
  
};
