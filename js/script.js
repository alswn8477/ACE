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
    document.getElementsByClassName("up").style.display = "none";
    document.getElementsByClassName("down").style.display = "block";

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

// let span = gnbL.querySelectorAll("span");
// span[1].style.display = "none";

// * con2 *
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
let a = document.querySelectorAll(".con2 .inner .left a");
let lir = document.querySelectorAll(".con2 .inner .right li");
let vid = document.querySelectorAll(".con2 .inner .center video");

// a[0].classList.add("on");
// lir[0].classList.add("on");
// vid[0].classList.add("on");

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

// * con2 button *
// function updateBtn(swiperI) {
//   const prevBtn = document.querySelector("#prev");
//   const nextBtn = document.querySelector("#next");

//   prevBtn.classList.toggle("disabled", swiperI.isBeginning);
//   nextBtn.classList.toggle("disabled", swiperI.isEnd);
// }

const swiper2 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
  on: {
    init(swiper) {
      updateBtn(swiper);
    },
    slideChange(swiper) {
      updateBtn(swiper);
    },
  },
});
const btnPrev = document.querySelector("#prev");
const pathPrev = btnPrev.querySelector(".btn_prev");
const btnNext = document.querySelector("#next");
const pathnext = btnNext.querySelector(".btn_next");

btnPrev.addEventListener("mouseenter", () => {
  pathPrev.setAttribute("d", "M 30 10 Q -10 65 30 140");
});

btnPrev.addEventListener("mouseleave", () => {
  pathPrev.setAttribute("d", "M 30 10 Q 30 65 30 140");
});
btnNext.addEventListener("mouseenter", () => {
  pathnext.setAttribute("d", "M 20 10 Q 60 65 20 140");
});

btnNext.addEventListener("mouseleave", () => {
  pathnext.setAttribute("d", "M 20 10 Q 20 65 20 140");
});
const btns = document.querySelectorAll(".btn div");
btns.forEach((v, k) => {
  v.addEventListener("click", () => {
    swiper.slideTo(k); // 0부터 시작하는 인덱스
  });
});

// * con3 *
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
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
