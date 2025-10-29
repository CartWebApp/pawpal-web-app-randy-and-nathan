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


  