import { getAuth, createUserWithEmailAndPasswordd } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"

let botonRegistro=document.getElementById("botonRegistro")

botonRegistro.addEventListener("click",function(evento){
  console.log("estoy en el evento");
    evento.preventDefault()

    let email=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let formulario =document.getElementById("formulario")

    const auth = getAuth();
    createUserWithEmailAndPasswordd(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 2000
    })
    formulario.reset()
    
    })
    .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
    Swal.fire({
      icon: 'error',
      title: 'Upps...',
      text: errorCode + errorMessage,
    })
  });
  window.location.href = "../../index.html"

})