import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => console.log(userCredential.user))
  .catch((error) => console.error(error.message));

  