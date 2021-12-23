let inputData = document.querySelectorAll("input");
const button = document.querySelector(".button");

let naamVeld = document.querySelector(".displayNaam");
let telfVeld = document.querySelector(".displayTel");
let adresVeld = document.querySelector(".displayStraat");
let emailVeld = document.querySelector(".displayEmail");

button.addEventListener("click", (event) => {
  event.preventDefault();
  for (let input of inputData) {
    console.log(input.name);
    switch (input.name) {
      case "naam":
        console.log(input.value);
        naamVeld.innerHTML = input.value;
        break;
      case "telf":
        telfVeld.innerHTML = input.value;
        break;
      case "straat":
        adresVeld.innerHTML = input.value;
        break;
      case "nummer":
        adresVeld.innerHTML = adresVeld.innerHTML + " " + input.value;
        break;
      case "postcode":
        adresVeld.innerHTML = adresVeld.innerHTML + " " + input.value;
        break;
      case "stad":
        adresVeldinnerHTML = adresVeld.innerH + " " + input.value;
        break;
      case "email":
        emailVeld.innerHTML = input.value;
    }
  }
});
