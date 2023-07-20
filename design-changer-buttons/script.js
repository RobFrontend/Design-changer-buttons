const body = document.body;

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
});

btnDesign2.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-2");
});

btnDesign3.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-3");
});

btnDesign4.addEventListener("click", function () {
  body.className = "";
  body.classList.add("design-palette-4");
});
