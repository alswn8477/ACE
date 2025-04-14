// script.js
function loadAlert() {
  alert("Test!");
}

// * con2 *

let a = document.querySelectorAll(".con2 .down .left a");
let lir = document.querySelectorAll(".con2 .down .right li");
let vid = document.querySelectorAll(".con2 .down .center video");

a[0].classList.add("on");
lir[0].classList.add("on");
vid[0].classList.add("on");

function myr() {
  a.forEach(function (v, k) {
    v.classList.remove("on");
    lir.forEach(function (v, k) {
      v.classList.remove("on");
    });
    vid.forEach(function (v, k) {
      v.classList.remove("on");
    });
  });
}

a.forEach(function (v, k) {
  v.onclick = function (event) {
    event.preventDefault();
    myr();
    a[k].classList.add("on");
    lir[k].classList.add("on");
    vid[k].classList.add("on");
  };
});

// * con3 *
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// * con4 *
