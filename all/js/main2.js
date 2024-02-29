let sec1_h1 = document.querySelector(".h1_header");
let btn_travile = document.querySelector(".btn_travile");
let H1_sec1 = document.querySelector(".H1_sec1");
let header_btn = document.querySelector(".header_btn_bottom");

sec1_h1.classList.add("animate__backInUp");
btn_travile.classList.add("animate__backInUp");
H1_sec1.classList.add("animate__backInUp");
H1_sec1.style.animationDelay = "0.5s";
header_btn.classList.add("animate__backInUp");
header_btn.style.animationDelay = "1s";

// sectino 2

let col1Sec2 = document.querySelector(".col1Sec2");
let col2Sec2 = document.querySelector(".col2Sec2");
let col3Sec2 = document.querySelector(".col3Sec2");
let col4Sec2 = document.querySelector(".col4Sec2");

col1Sec2.classList.add("animate__slideInUp");

col2Sec2.classList.add("animate__slideInUp");
col2Sec2.style.animationDelay = "0.2s";
col3Sec2.classList.add("animate__slideInUp");
col3Sec2.style.animationDelay = "0.4s";
col4Sec2.classList.add("animate__slideInUp");
col4Sec2.style.animationDelay = "0.6s";

// section 3

let col1_sec3 = document.querySelectorAll(".col1_sec3");
let col2_sec3 = document.querySelectorAll(".col2_sec3");
let col3_sec3 = document.querySelectorAll(".col3_sec3");
let col4_sec3 = document.querySelectorAll(".col4_sec3");

for (let i = 0; i < col1_sec3.length; i++) {
  col1_sec3[i].classList.add("animate__fadeIn");

  col2_sec3[i].classList.add("animate__fadeIn");
  col2_sec3[i].style.animationDelay = "0.2s";

  col3_sec3[i].classList.add("animate__fadeIn");
  col3_sec3[i].style.animationDelay = "0.4s";

  col4_sec3[i].classList.add("animate__fadeIn");
  col4_sec3[i].style.animationDelay = "0.6s";
}

// section 4

// this is hover in section 5
let products1 = document.querySelector(".hover_img_sec5");
let one_Element_sec5 = document.querySelector(".one_Element_sec5");

let products2 = document.querySelector(".hover_img_sec5_tow");
let two_Element_sec5 = document.querySelector(".two_Element_sec5");

let products3 = document.querySelector(".hover_img_sec5_three");
let three_Element_sec5 = document.querySelector(".three_Element_sec5");

let products4 = document.querySelector(".hover_img_sec5_four");
let four_Element_sec5 = document.querySelector(".four_Element_sec5");

let products5 = window.document.querySelector(".hover_img_sec5_five");
let five_Element_sec5 = window.document.querySelector(".five_Element_sec5");

one_Element_sec5.onmousemove = function () {
  products1.style.display = "flex";
};

two_Element_sec5.onmousemove = function () {
  products2.style.display = "flex";
};

three_Element_sec5.onmousemove = function () {
  products3.style.display = "flex";
};

four_Element_sec5.onmousemove = function () {
  products4.style.display = "flex";
};

five_Element_sec5.onmousemove = function () {
  products5.style.display = "flex";
};
document.onclick = function () {
  products1.style.display = "none";
  products2.style.display = "none";
  products3.style.display = "none";
  products4.style.display = "none";
  products5.style.display = "none";
};

