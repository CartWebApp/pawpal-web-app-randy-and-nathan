import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => console.log(userCredential.user))
  .catch((error) => console.error(error.message));


function toggleOverlay() {
  const overlay = document.getElementById("settings-overlay");
  overlay.classList.toggle("show");
}

// Optional: close overlay when clicking outside
window.addEventListener("click", (event) => {
  const overlay = document.getElementById("settings-overlay");
  if (!event.target.closest(".overlay") && !event.target.closest(".menu-button")) {
    overlay.classList.remove("show");
  }
});



  