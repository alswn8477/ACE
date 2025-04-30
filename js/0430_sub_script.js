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
  v.querySelector(".down").style.color = "#0890c0";
  this.classList.add("on");
};
gnbL.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  gnbL.querySelectorAll(".one_dep").forEach(function (item) {
    let spans = item.querySelectorAll("div > a > span");
    spans[0].style.display = "block"; // 첫 번째 span 숨기고
    spans[1].style.display = "none"; // 두 번째 span 보이기
  });
  document.querySelector(".nav").style.height = "0";
  sub.forEach(function (v, k) {
    v.classList.remove("on");
  });
  nav.classList.add("on");
  document.querySelector(".left").classList.remove("on");
  v.querySelector(".down").style.color = "#333";
  this.classList.remove("on");
};
gnbR.onmouseenter = function () {
  document.querySelector(".logo").style.opacity = "0";
  document.querySelector(".nav").style.height = "280px";
  sub2.forEach(function (v, k) {
    v.classList.add("on");
  });
  nav.classList.add("on");
  document.querySelector(".right").classList.add("on");
  v.querySelector("span").style.color = "#0890c0";
};
gnbR.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  document.querySelector(".nav").style.height = "0";
  sub2.forEach(function (v, k) {
    v.classList.remove("on");
  });
  document.querySelector(".right").classList.remove("on");
  v.querySelector("span").style.color = "#333";
};
