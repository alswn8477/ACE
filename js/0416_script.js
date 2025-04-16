// script.js
function loadAlert() {
  alert("Test!");
}
// * header *
let nav = document.querySelector(".nav");
let gnbL = document.querySelector(".left").querySelectorAll(".one_dep");
let sub = document.querySelector(".left").querySelectorAll(".two_dep");
gnbL.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".logo").style.display = "none";
    // let span = v
    //   .querySelector("div")
    //   .querySelector("a")
    //   .querySelectorAll("span");
    // span[0].style.display = "none";
    // span[1].style.display = "block";
    gnbL.forEach(function (item) {
      let spans = item.querySelectorAll("div > a > span");

      spans[0].style.display = "none"; // 첫 번째 span 숨기고
      spans[1].style.display = "block"; // 두 번째 span 보이기
    });
    document.querySelector(".nav").style.height = "180px";
    sub.forEach(function (v, k) {
      v.classList.add("on");
    });
  };
  v.onmouseleave = function () {
    document.querySelector(".logo").style.display = "block";
    let span = v
      .querySelector("div")
      .querySelector("a")
      .querySelectorAll("span");
    span[0].style.display = "block";
    span[1].style.display = "none";
    document.querySelector(".nav").style.height = "0";
    sub.forEach(function (v, k) {
      v.classList.remove("on");
    });
  };
});
