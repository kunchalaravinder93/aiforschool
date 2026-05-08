const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.toggleAttribute("data-scrolled", window.scrollY > 8);
});
