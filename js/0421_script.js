// script.js
function loadAlert() {
  alert("Test!");
}

// header
let nav = document.querySelector(".nav");
let gnbL = document.querySelector(".left").querySelectorAll(".one_dep");
let sub = document.querySelector(".left").querySelectorAll(".two_dep");
let gnbR = document.querySelector(".right").querySelectorAll(".one_dep");
let sub2 = document.querySelector(".right").querySelectorAll(".two_dep");

gnbL.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".logo").style.display = "none";
    gnbL.forEach(function (item) {
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
  v.onmouseleave = function () {
    document.querySelector(".logo").style.display = "block";
    gnbL.forEach(function (item) {
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
});
gnbR.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".nav").style.height = "280px";
    sub2.forEach(function (v, k) {
      v.classList.add("on");
    });
    nav.classList.add("on");
    document.querySelector(".right").classList.add("on");
    v.querySelector("span").style.color = "#0890c0";
  };
  v.onmouseleave = function () {
    document.querySelector(".logo").style.display = "block";
    document.querySelector(".nav").style.height = "0";
    sub2.forEach(function (v, k) {
      v.classList.remove("on");
    });
    document.querySelector(".right").classList.remove("on");
    v.querySelector("span").style.color = "#333";
  };
});

// con
//나머지는 모두 같은데 updateBtn1,updateBtn2....으로 하시면 됩니다.
function updateBtn(swiper) {
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  prevBtn.classList.toggle("disabled", swiper.isBeginning);
  nextBtn.classList.toggle("disabled", swiper.isEnd);
}
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  // loop: true,
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
const btnPrev = document.querySelectorAll(".prev");
const btnNext = document.querySelectorAll(".next");
btnPrev.forEach(function (v, k) {
  v.addEventListener("mouseenter", () => {
    v.querySelector(".btn_prev").setAttribute("d", "M 30 10 Q -10 65 30 140");
  });
  v.addEventListener("mouseleave", () => {
    v.querySelector(".btn_prev").setAttribute("d", "M 30 10 Q 30 65 30 140");
  });
});
btnNext.forEach(function (v, k) {
  v.addEventListener("mouseenter", () => {
    v.querySelector(".btn_next").setAttribute("d", "M 20 10 Q 60 65 20 140");
  });
  v.addEventListener("mouseleave", () => {
    v.querySelector(".btn_next").setAttribute("d", "M 20 10 Q 20 65 20 140");
  });
});

// con2;
// function updateBtn1(swiper) {
//   const prevBtn = document.querySelector("#prev1");
//   const nextBtn = document.querySelector("#next1");
//   prevBtn.classList.toggle("disabled", swiper.isBeginning);
//   nextBtn.classList.toggle("disabled", swiper.isEnd);
// }
// const listItems = document.querySelectorAll(".con2 .right li");

// function myremove() {
//   listItems.forEach(function (v, k) {
//     v.classList.remove("on");
//   });
// }

// listItems[0].classList.add("on");
// var swiper1 = new Swiper(".mySwiper1", {
//   speed: 1000,
//   navigation: {
//     nextEl: "#next1",
//     prevEl: "#prev1",
//   },
//   on: {
//     init(swiper) {
//       updateBtn1(swiper);
//     },
//     slideChange(swiper) {
//       updateBtn1(swiper);
//     },
//     slideChange: function () {
//       myremove();
//       listItems[this.realIndex].classList.add("on");
//     },
//   },
// });
// const btns = document.querySelectorAll(".inner .left a");
// btns.forEach((v, k) => {
//   v.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(k);
//     swiper1.slideTo(k);
//   });
// });

function updateBtn1(swiper) {
  const prevBtn = document.querySelector("#prev1");
  const nextBtn = document.querySelector("#next1");
  prevBtn.classList.toggle("disabled", swiper.isBeginning);
  nextBtn.classList.toggle("disabled", swiper.isEnd);
}
const listItems = document.querySelectorAll(".con2 .right li");

function myremove() {
  listItems.forEach(function (v, k) {
    v.classList.remove("on");
  });
}
listItems[0].classList.add("on");

var swiper1 = new Swiper(".mySwiper1", {
  speed: 1000,
  navigation: {
    nextEl: "#next1",
    prevEl: "#prev1",
  },
  on: {
    init(swiper) {
      updateBtn1(swiper);
    },
    slideChange(swiper) {
      updateBtn1(swiper);
    },
    slideChange: function () {
      myremove();
      listItems[this.realIndex].classList.add("on");
    },
  },
});
const btns = document.querySelectorAll(".inner .left a");
btns[0].classList.add("on");
function myremove2() {
  btns.forEach(function (v, k) {
    v.classList.remove("on");
  });
}
btns.forEach((v, k) => {
  v.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(k);
    swiper1.slideTo(k);
    myremove2();
    v.classList.add("on");
  });
});

// con3
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

function updateBtn2(swiper) {
  const prevBtn = document.querySelector("#prev2");
  const nextBtn = document.querySelector("#next2");
  prevBtn.classList.toggle("disabled", swiper.isBeginning);
  nextBtn.classList.toggle("disabled", swiper.isEnd);

  var swiper2 = new Swiper(".mySwiper2", {
    speed: 1000,
    navigation: {
      nextEl: "#next2",
      prevEl: "#prev2",
    },
    on: {
      init(swiper) {
        updateBtn1(swiper);
      },
      slideChange(swiper) {
        updateBtn1(swiper);
      },
    },
  });
}
