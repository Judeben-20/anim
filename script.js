document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("profileToggle");
  const menu = document.getElementById("profileMenu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
