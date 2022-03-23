const burger = document.querySelector(".burger");
const navlist = document.querySelector(".nav-list");
const navreal = document.querySelector(".nav");
const logo = document.querySelector(".logo");
burger.addEventListener("click", function (e) {
  navlist.classList.toggle("nav-active");
  navreal.classList.toggle("navreal");
  logo.classList.toggle("hidden");
});
