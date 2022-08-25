console.log("Estoy detallando la compra ")

// Llamar a la memoria 
let producto=JSON.parse(localStorage.getItem("producto")) 
console.log(producto)
let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora=document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]
}
let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria)

// Referenceiar la imagen del producto
let foto = document.getElementById("imagenInfo")
foto.src=producto.foto

let nombre = document.getElementById("nombreInfo")
nombre.textContent=producto.nombre

let precio =document.getElementById("precioInfo")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcionInfo")
descripcion.textContent=producto.descripcion

let popularidad=document.getElementById("popularidadInfo")
// popularidad.textContent=producto.popularidad


let pildora=document.getElementById("pildora")
console.log(pildora.textContent)

let contenedorEstrellas= document.getElementById("contenedorEstrellas")

pintarEstrellas(producto.popularidad,contenedorEstrellas)
// calificar()

//Escucho el clic en el boton añadiendo al carrito


let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click",function(evento){
   
    let cantidad=document.getElementById("cantidadProducto")
    cantidad=cantidad.value
    // console.log("Agregaste: "+ cantidad)

  

    //Agregamos la cantidad al objeto producto 
    producto.cantidad=cantidad
    console.log(producto)

    //Agregamos el producto al carrito de compras
    carrito.push(producto)
    console.log(carrito)

    // agregando el carrito a la memoria 
    localStorage.setItem("carrito",JSON.stringify(carrito))
    // pintando pildora 
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito


})
// function calificar(popularidad) {
//     let contador = popularidad 
//     contador = 1
//     if (contador == 1) {
//         document.getElementById("1estrella").style.color = "orange";
//     }else if (contador==2){
//         document.getElementById("2estrella").style.color = "orange";
//     }else if(contador==3){
//         document.getElementById("3estrella").style.color = "orange";
//     }else if(contador==4){
//         document.getElementById("4estrella").style.color = "orange";
//     }else if (contador==5){
//         document.getElementById("5estrella").style.color = "orange";
//     }else {
//         document.getElementById(1 + nombre).style.color = "black";
//     }
// }

function calificar(item) {
    var contador;
    console.log(item);
    contador = item.id[0];
    let nombre = item.id.substring(1);
    for (let i = 0; i < 5; i++) {
      if (i < contador) {
        document.getElementById(i + 1 + nombre).style.color = "orange";
      } else {
        document.getElementById(i + 1 + nombre).style.color = "black";
      }
    }
  }
// function pintarEstrellas (popularidad,contenedorEstrellas){

//     for (let i = 1;i <= popularidad;i++){
//            let estrella=document.createElement("i")
//            estrella.classList.add("bi","bi-star-fill")
//            contenedorEstrellas.appendChild(estrella)
//     }
// }
function pintarEstrellas (popularidad,contenedorEstrellas){

    // for (let i = 1;i <= 5;i++){
    //        let estrella=document.createElement("i")
    //        estrella.classList.add("bi","bi-star-fill")
    //        contenedorEstrellas.appendChild(estrella)
    // }
    
    for (let i = 1;i <= popularidad;i++){
        let estrella=document.createElement("i")
           estrella.classList.add("bi","bi-star-fill","text-warning")
           contenedorEstrellas.appendChild(estrella)
    }
}