/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
"use strict";

const data = document.getElementById("search");
const submit = document.getElementById("submit-btn");
let dataplace = document.getElementById("output");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let data_in = data.value;
  if (data_in == "") {
    data.value = "";
    alert("You have not entered data!");
  } else if (isNaN(data_in)) {
    alert("Seriously?! You want me calculate text value into lb, g, or oz?  ");
  } else {
    dataplace.innerHTML = `<div class="entered_data">Your entered Weight is: <span>${data_in} KG</span></div>
    <div>Your Weight in (lb) is: <span>${(data_in * 2.2046).toFixed(
      4
    )} lb</span></div>
    <div>Your Weight in (g) is: <span>${(data_in / 0.001).toFixed(
      0
    )} g</span></div>
    <div>Your Weight in (oz) is: <span>${(data_in * 35.274).toFixed(
      4
    )} oz</span></div>
`;
  }
  data.value = "";
});
