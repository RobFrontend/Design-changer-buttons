const body = document.body;
const header = document.querySelector("header");
const pPalette = document.querySelector(".p-palette");
const titleBox = document.querySelector(".title-box");

const design1 = document.querySelector(".design-palette-1");
const btnDesign1 = document.querySelector(".btn-palette1");

const design2 = document.querySelector(".design-palette-2");
const btnDesign2 = document.querySelector(".btn-palette2");

const design3 = document.querySelector(".design-palette-3");
const btnDesign3 = document.querySelector(".btn-palette3");

const design4 = document.querySelector(".design-palette-4");
const btnDesign4 = document.querySelector(".btn-palette4");

btnDesign1.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-1");
  header.className = "";
  header.classList.add("header-palette-1");
  pPalette.textContent = "Now you are using Palette 1";
  titleBox.textContent = "Palette number 1";
});

btnDesign2.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-2");
  header.className = "";
  header.classList.add("header-palette-2");
  pPalette.textContent = "Now you are using Palette 2";
  titleBox.textContent = "Palette number 2";
});

btnDesign3.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-3");
  header.className = "";
  header.classList.add("header-palette-3");
  pPalette.textContent = "Now you are using Palette 3";
  titleBox.textContent = "Palette number 3";
});

btnDesign4.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-4");
  header.className = "";
  header.classList.add("header-palette-4");
  pPalette.textContent = "Now you are using Palette 4";
  titleBox.textContent = "Palette number 4";
});
