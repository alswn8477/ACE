// header
let nav = document.querySelector(".nav");
let gnbL = document.querySelector(".left");
let sub = document.querySelector(".left").querySelectorAll(".two_dep");
let gnbR = document.querySelector(".right");
let sub2 = document.querySelector(".right").querySelectorAll(".two_dep");

gnbL.onmouseenter = function () {
  document.querySelector(".logo").style.opacity = "0";
  gnbL.querySelectorAll(".one_dep").forEach(function (item) {
    let spans = item.querySelectorAll("div > a > span");
    spans[0].style.display = "none"; // 첫 번째 span 숨기고
    spans[1].style.display = "block"; // 두 번째 span 보이기
  });
  document.querySelector(".nav").style.height = "280px";
  sub.forEach(function (v, k) {
    v.classList.add("on");
  });
  nav.classList.add("on");
  document.querySelector(".left").classList.add("on");
  this.querySelector(".down").style.color = "#0890c0";
  this.classList.add("on");

  document.querySelector("header").style.backgroundColor = "#fff";
  document.querySelector("header .nav").style.backgroundColor = "#fff";
};
gnbL.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  gnbL.querySelectorAll(".one_dep").forEach(function (item) {
    let spans = item.querySelectorAll("div > a > span");
    spans[0].style.display = "block"; // 첫 번째 span 숨기고
    spans[1].style.display = "none"; // 두 번째 span 보이기
  });
  sub.forEach(function (v, k) {
    v.classList.remove("on");
  });
  nav.classList.add("on");
  document.querySelector(".left").classList.remove("on");
  this.querySelector(".down").style.color = "#333";
  this.classList.remove("on");

  document.querySelector("header").style.backgroundColor = "transparent";
  document.querySelector(".nav").style.backgroundColor = "transparent";
};
gnbR.onmouseenter = function () {
  document.querySelector(".logo").style.opacity = "0";
  document.querySelector(".nav").style.height = "280px";
  sub2.forEach(function (v, k) {
    v.classList.add("on");
  });
  nav.classList.add("on");
  document.querySelector(".right").classList.add("on");
  this.querySelector("span").style.color = "#0890c0";

  document.querySelector("header").style.backgroundColor = "#fff";
  document.querySelector("header .nav").style.backgroundColor = "#fff";
};
gnbR.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  document.querySelector(".nav").style.height = "0";

  sub2.forEach(function (v, k) {
    v.classList.remove("on");
  });
  nav.classList.add("on");
  document.querySelector(".right").classList.remove("on");
  // this.querySelector("span").style.color = "#333";
  this.classList.remove("on");

  document.querySelector("header").style.backgroundColor = "transparent";
  document.querySelector(".nav").style.backgroundColor = "transparent";
};

// let prevScroll = window.pageYOffset;
// window.addEventListener("scroll", function () {
//   const currentScroll = window.pageYOffset;
//   const header = this.document.querySelector("header");
//   if (prevScroll < currentScroll) {
//     header.style.top = "-500px";
//   } else {
//     header.style.top = "0";
//   }
//   prevScroll = currentScroll;
// });
