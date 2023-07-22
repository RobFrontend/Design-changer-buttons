// //////////////////////////////////////////////////////////
// DATE CURRENT YEAR
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// //////////////////////////////////////////////////////////
// CHANGING DESIGN COLOR
const btnPallete1 = document.querySelector(".btn-palette-1");
const btnPallete2 = document.querySelector(".btn-palette-2");
const btnPallete3 = document.querySelector(".btn-palette-3");

const colorP = document.querySelector("body");
const pText = document.querySelector("p");
const h2 = document.querySelector("h2");

btnPallete1.addEventListener("click", function () {
  colorP.className = "";
  colorP.classList.add("design-palette-1");
  pText.textContent = "You are using Baby Blue Palette";
  h2.textContent = "Baby Blue";
});

btnPallete2.addEventListener("click", function () {
  colorP.className = "";
  colorP.classList.add("design-palette-2");
  pText.textContent = "You are using Calm Dark Palette";
  h2.textContent = "Calm Dark";
});

btnPallete3.addEventListener("click", function () {
  colorP.className = "";
  pText.textContent = "You are using Simple White Palette";
  h2.textContent = "Simple White";
});
//////////////////////////////////////////////////////////////
