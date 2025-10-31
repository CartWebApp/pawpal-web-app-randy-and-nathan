document.addEventListener("DOMContentLoaded", () => {
  const specialLi = document.querySelector(".special");
  const specialIcon = document.querySelector(".special-icon");
  const specialOverlay = document.querySelector(".special-overlay");

  if (specialLi && specialIcon && specialOverlay) {
    specialOverlay.style.display = "none";

    specialIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      specialLi.classList.toggle("active");
      if (specialLi.classList.contains("active")) {
        specialOverlay.style.display = "block";
        specialOverlay.classList.add("slide-down");
      } else {
        specialOverlay.classList.remove("slide-down");
        setTimeout(() => (specialOverlay.style.display = "none"), 300);
      }
    });


    document.addEventListener("click", (e) => {
      if (!specialOverlay.contains(e.target) && !specialIcon.contains(e.target)) {
        specialLi.classList.remove("active");
        specialOverlay.classList.remove("slide-down");
        setTimeout(() => (specialOverlay.style.display = "none"), 300);
      }
    });
  }
});
