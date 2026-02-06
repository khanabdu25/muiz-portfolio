document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  });
});
