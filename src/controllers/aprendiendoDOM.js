//pasos para controlar una etiqueta desde js

//1.1 Controlando contenido
let etiquetaTitulo = document.getElementById("titulo")

let etiquetaImagen = document.getElementById("foto")


//1.1 Manipulando eltexto de la etiqueta 

etiquetaTitulo.textContent = " Jefe vacaiones "
etiquetaImagen.src = "https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Carama%C3%B1olasKarate.jpg?alt=media&token=f5eb3d94-9fa1-4fc4-a752-cba59354b4b8"

//2. Controlando el diseño 

let parrafo = document.getElementById("parrafo")
parrafo.textContent = "El piloto empezará a descubrir la fascinante historia del principito, que comienza en su asteroide, donde vivía con tres volcanes, uno inactivo, y se entretenía en arrancar las malas hierbas y ver puestas de sol. Un día en el suelo del asteroide del principito nace una flor."
//2.1 Agrengando un style (class)
// text-danger 
etiquetaImagen.classList.add("d-block","mx-auto","img-fluid","w-75")
etiquetaTitulo.classList.add("text-center")
parrafo.classList.add("text-danger","fs-1", "text-center")


//2.2 Quitar o eliminar un estilo style ()
parrafo.classList.remove("text-danger")

