var navbar = document.querySelector("nav");

var float = document.getElementById("float-wpp");

window.addEventListener("scroll", function () {
  var scroll = window.scrollY;

  if (scroll >= 50) {
    navbar.style.background = "#f6f9fa";
    logobranco.style.display = "none";
    logoverde.style.display = "block";
  } else {
    navbar.style.background = "rgba(0,0,0,0)";
    logobranco.style.display = "block";
    logoverde.style.display = "none";
  }
  if (scroll >= 500) {
    float.style.opacity = "1";
  } else {
    float.style.opacity = "0";
  }
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >= 50);
});

const li = document.querySelectorAll(".menu-item");
const sec = document.querySelectorAll("section, footer");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const menuHamburger = document.getElementById("nav-icon");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("menu");
  const burger = document.getElementById("nav-icon");
  nav.classList.toggle("mobile");
  burger.classList.toggle("open");
  const active = nav.classList.contains("mobile");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
menuHamburger.addEventListener("click", toggleMenu);
menuHamburger.addEventListener("touchstart", toggleMenu);

document
  .querySelectorAll(".menu-item")
  .forEach((l) =>
    l.addEventListener("click", (e) =>
      document.getElementById("nav-icon").click()
    )
  );
