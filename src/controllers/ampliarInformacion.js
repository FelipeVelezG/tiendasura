let contenedorProductos = document.getElementById("fila")
//escucho clic en la fila 
let informacionProducto = {}
contenedorProductos.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        informacionProducto.nombre = (evento.target.parentElement.querySelector("h1").textContent)
        informacionProducto.precio=(evento.target.parentElement.querySelector("h3").textContent)
        informacionProducto.descripcion=(evento.target.parentElement.querySelector("p").textContent)
        informacionProducto.foto=(evento.target.parentElement.querySelector("img").src)
        informacionProducto.popularidad =(evento.target.parentElement.querySelector("h5").textContent)
        
     // guardando un objeto en memoria 
        // localStorage.setItem(JSON.stringify("producto",informacionProducto))
        // 
        localStorage.setItem("producto",JSON.stringify(informacionProducto))

        window.location.href="./ampliarInfo.html"
    
    }
})
