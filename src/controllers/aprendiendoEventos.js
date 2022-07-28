let etiquetaBoton = document.getElementById("boton")

// Pasos para detectar eventos 

etiquetaBoton.addEventListener("click", function(){
    console.log("Estoy haciendo clic")
    let titulo = document.getElementById("titulo")
    titulo.textContent=("Hola soy Felipe")
    let mensaje = document.getElementById("mensaje")
    mensaje.textContent=("Mentiras van a ganar")
    mensaje.classList.add("text-danger")
    let guaro = document.getElementById("guaro")
    guaro.src="https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/darioGomez.jpg?alt=media&token=fefa9a10-434b-41d5-b5c6-038ba0f1e554z"
})
