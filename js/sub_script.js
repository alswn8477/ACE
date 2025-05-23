// header
let header = document.querySelector("header");
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

  header.style.height = "330px";
  header.style.background = "#fff";
  document.querySelector(".search").classList.add("on");
  document.querySelector("header .top ul").classList.add("on");
  nav.classList.add("on");

  sub.forEach(function (v, k) {
    v.classList.add("on");
  });

  nav.classList.add("on");
  document.querySelector(".left").classList.add("on");
  this.classList.add("on");
};

gnbL.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";

  gnbL.querySelectorAll(".one_dep").forEach(function (item) {
    let spans = item.querySelectorAll("div > a > span");
    spans[0].style.display = "block"; // 첫 번째 span 숨기고
    spans[1].style.display = "none"; // 두 번째 span 보이기
  });

  header.style.height = "330px";
  header.style.background = "transparent";
  document.querySelector(".search").classList.remove("on");
  document.querySelector("header .top ul").classList.remove("on");
  nav.classList.remove("on");

  sub.forEach(function (v, k) {
    v.classList.remove("on");
  });

  nav.classList.remove("on");
  document.querySelector(".left").classList.remove("on");
  this.classList.remove("on");
};

gnbR.onmouseenter = function () {
  document.querySelector(".logo").style.opacity = "0";
  document.querySelector(".nav").style.height = "280px";
  header.style.height = "330px";
  header.style.background = "#fff";
  document.querySelector(".search").classList.add("on");
  document.querySelector("header .top ul").classList.add("on");
  nav.classList.add("on");

  sub2.forEach(function (v, k) {
    v.classList.add("on");
  });

  nav.classList.add("on");
  document.querySelector(".right").classList.add("on");
};

gnbR.onmouseleave = function () {
  document.querySelector(".logo").style.opacity = "1";
  document.querySelector(".nav").style.height = "0";
  header.style.height = "330px";
  header.style.background = "transparent";
  document.querySelector(".search").classList.remove("on");
  document.querySelector("header .top ul").classList.remove("on");
  nav.classList.remove("on");

  sub2.forEach(function (v, k) {
    v.classList.remove("on");
  });

  nav.classList.remove("on");
  document.querySelector(".right").classList.remove("on");
};

let prevScroll = window.pageYOffset;
window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;
  const header = this.document.querySelector("header");
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".logo img"); // 로고 이미지 선택 (클래스명에 맞게 수정)

  if (prevScroll < currentScroll) {
    header.style.top = "-500px";
  } else {
    header.style.top = "0";
    header.style.height = "150px";
    header.style.background = "#fff";
    nav.classList.add("on");
    logo.src = "./images/header-logo.png";
  }
  prevScroll = currentScroll;
});

//con3

// con4
let img = document.querySelectorAll(".con4 .bg img");
img[0].classList.add("on");

function con4remove() {
  img.forEach(function (v) {
    v.classList.remove("on");
  });
}

let con4div = document.querySelectorAll(".con4 .txt > div");

con4div.forEach(function (v, k) {
  let a = v.querySelector("a");
  a.onmouseenter = function () {
    con4remove();
    img[k].classList.add("on");
  };
});

// footer
let leftli = document.querySelectorAll("footer .left ul li");
leftli[2].classList.add("on");

// sideBtn
window.addEventListener("scroll", function () {
  const sideBtna = this.document.querySelector(".sideBtn a");
  const sideBtn = this.document.querySelector(".sideBtn");
  const triggerHeight = 2000;
  if (this.window.scrollY > 200) {
    sideBtna.style.opacity = "1";
  } else {
    sideBtna.style.opacity = "0";
  }
  if (this.window.pageYOffset > triggerHeight) {
    sideBtn.classList.add("on");
  } else {
    sideBtn.classList.remove("on");
  }
});
