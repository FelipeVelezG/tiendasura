let boton = document.getElementById("boton")

boton.addEventListener("click",function(){
    let nombre = document.getElementById("nombre").value
    let saludo = document.getElementById("saludo")
    saludo.textContent = "Hola " +nombre + " como estas?"8
})

