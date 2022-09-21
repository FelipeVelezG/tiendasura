import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

let ingreso = document.getElementById("ingreso")
ingreso.addEventListener("click", function (evento) {
  evento.preventDefault()
  console.log("Esta ingresando")

  let email = document.getElementById("emailEntrar").value;
  let password = document.getElementById("passwordEntrar").value;

  let formularioIngreso = document.getElementById("formularioIngreso");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert("Ingresamos")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("no accede")
  });
});

