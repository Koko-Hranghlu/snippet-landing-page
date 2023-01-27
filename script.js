const hamburger_btn = document.querySelector("#hamburger_button");
const header = document.querySelector("header");
const nav_links = document.querySelector("nav ul");

hamburger_btn.addEventListener("click", () =>
  nav_links.classList.toggle("active")
);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) header.classList.add("white_bg");
  else header.classList.remove("white_bg");
});
