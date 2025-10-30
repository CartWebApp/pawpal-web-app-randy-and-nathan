import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => console.log(userCredential.user))
  .catch((error) => console.error(error.message));



const gearIcon = document.querySelector(".gear-icon");
const overlay = document.querySelector(".overlay");


gearIcon.addEventListener("click", () => {
  overlay.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !gearIcon.contains(e.target)) {
    overlay.classList.remove("show");
  }
});

gearIcon.addEventListener("mouseenter", () => overlay.classList.add("show"));
overlay.addEventListener("mouseleave", () => overlay.classList.remove("show"));


    // Toggle dropdown on click
    const stats = document.querySelector('.stats');
    stats.addEventListener('click', () => {
      stats.classList.toggle('active');
    });

    // Optional: close if clicked outside
    document.addEventListener('click', (e) => {
      if (!stats.contains(e.target)) {
        stats.classList.remove('active');
      }
    });

  (function() {
    const statsLi = document.querySelector('.stats');
    if (!statsLi) return;

    const overlay = statsLi.querySelector('.stats-overlay');
    if (!overlay) return;

    // move overlay to body to avoid clipping by parents
    document.body.appendChild(overlay);

    function positionOverlay() {
      const rect = statsLi.getBoundingClientRect();
      overlay.style.position = 'absolute';
      overlay.style.top  = (rect.bottom + window.scrollY + 8) + 'px';
      overlay.style.left = (rect.right + window.scrollX - overlay.offsetWidth) + 'px';
    }

    statsLi.addEventListener('click', (e) => {
      e.stopPropagation();
      statsLi.classList.toggle('active');
      if (statsLi.classList.contains('active')) {
        overlay.style.display = 'block';
        positionOverlay();
      } else {
        overlay.style.display = 'none';
      }
    });

    document.addEventListener('click', (e) => {
      if (!overlay.contains(e.target) && !statsLi.contains(e.target)) {
        statsLi.classList.remove('active');
        overlay.style.display = 'none';
      }
    });

    window.addEventListener('resize', () => {
      if (statsLi.classList.contains('active')) positionOverlay();
    });

    window.addEventListener('scroll', () => {
      if (statsLi.classList.contains('active')) positionOverlay();
    });
  })();





  