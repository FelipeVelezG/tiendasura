let productos = [
    {
        nombre:"Baberos",
        precio:18000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Babero.jpg?alt=media&token=da293754-cd72-4f96-b684-fc5c20f88fac","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Babero2.jpg?alt=media&token=9512219f-74b9-4ef7-9c16-19f825989924","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Babero3.jpg?alt=media&token=519d7aef-6c42-4629-b015-f6af10964da9","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Babero4.jpg?alt=media&token=1a11d82c-8ab8-49ad-9386-68ca155f09a9"],
        descripcion: "Baberos con estampados personalizados, con diseños personalizados"

    },
    {
        nombre:"Caramanolas",
        precio:25000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Carama%C3%B1olasKarate.jpg?alt=media&token=f5eb3d94-9fa1-4fc4-a752-cba59354b4b8","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Carama%C3%B1olasKarate2.jpg?alt=media&token=e620a605-4336-4209-b0ee-7297c8f58b6c","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Carama%C3%B1olasKarateTama%C3%B1o2.jpg?alt=media&token=cccd5ab8-fd05-4562-a773-c2a547af48ce","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Carama%C3%B1olasKarateTama%C3%B1o2delante.jpg?alt=media&token=f5abc03d-4bb1-4472-bcd5-f603a0fd1faf",],
        descripcion: "Caramañolas con color blanco o plateado"
    },
    {
        nombre:"Cerveceros",    
        precio:30000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/cervecero.png?alt=media&token=bc9a2f50-c1e9-4a27-b699-5fd3de438b2d","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Cervecero1.jpg?alt=media&token=9235361c-3d3d-4eb0-ac78-92390abd2c5e","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/cervecero2.jpg?alt=media&token=f77bad90-299a-402a-a1ff-22892b5ef12e"],
        descripcion: "Cerveceros opalizados"
    },
    {
        nombre:"Mamelucos",
        precio:25000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Mameluco.jpg?alt=media&token=81c4955d-5991-4ad2-be89-65df699e7f4b","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/mameluco1.jpg?alt=media&token=c57129e1-74ec-4ae4-83db-c3e573982dd9","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/mameluco2.jpg?alt=media&token=14a3577e-f5ee-4086-9e4c-8d2d376fb223","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/mameluco3.jpg?alt=media&token=c76e41ee-7c8b-4cad-834b-d90a64e5c085"],
        descripcion: "Mamelucos manga corta y larga"
    },
    {
        nombre:"Mausepad",
        precio:15000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Mousepad-ATEEZ.jpg?alt=media&token=6dba64a2-149b-455d-96f7-072f94aa8b73","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Mousepad-LOL.jpg?alt=media&token=c34123c3-e117-4f65-9d3c-3275d777ad2b","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/Mousepad-MARVEL.jpg?alt=media&token=7f9e4f0e-fdbc-4b8b-86c6-ea08cdee17dd","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/MousepadDBZ.jpg?alt=media&token=1849031c-b860-40a9-95d1-0fd57da4f92e"],
        descripcion: "Mouse pad con mucha presencia"
    },
    {
        nombre:"Camiseta",
        precio:28000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/camiseta2.png?alt=media&token=9da445b3-7015-40e2-8de0-0f03b3c5e848","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/camiseta3.jpg?alt=media&token=2c7b8ca7-5f8e-4fc1-84d2-6966c8d49bfb","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/camiseta4.jpg?alt=media&token=cc89698c-3aec-4250-a9bf-d4cbe7bc7fd8","https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/camiseta5.jpg?alt=media&token=04b50c5f-079b-43bf-8e63-e7761959088e"],
        descripcion: "Camisetas en piel de durazno con sublimación personalizada"
    },
    {
        nombre:"Pocillo Conico",
        precio:18000,
        popularidad :5,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/conico1.jpg?alt=media&token=e7a1a72c-3281-4319-bc72-bbe3c681705b",""],
        descripcion: ""
    },
    {
        nombre:"peltre",
        precio:0,
        popularidad :0,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/peltre.png?alt=media&token=27c23d32-bffb-4ad1-ab08-124e7754f045"],
        descripcion: ""
    },
    {
        nombre:"Pocillo",
        precio:0,
        popularidad :0,
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasurajfv.appspot.com/o/pocillo1.png?alt=media&token=c63388d3-8d8b-4c5b-8758-c519a69712e3"],
        descripcion: ""
    }
]


let fila = document.getElementById("fila")
// recorriendo el arreglo

productos.forEach(function(producto){
   // creando un div desde js
   let columna =document.createElement("div")
   columna.classList.add("col")

   //creando una tarjeta 
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card","shadow","text-center","h-100")


   // creando una imagen 
   let imagen =document.createElement("img")
   imagen.classList.add("img-fluid","w-100","h-75")
   imagen.src=producto.fotos[0]
   // Detectando evento de mouse 
   imagen.addEventListener("mouseover",function(){
    imagen.src=producto.fotos[1]

   })
   imagen.addEventListener("mouseleave",function(){
    imagen.src=producto.fotos[0]
   })
   // creamos texto de nombre 
   let text=document.createElement("h1")
   text.classList.add("text-center")
   text.textContent=producto.nombre
   // creamos texto de precio
   let valor=document.createElement("h3")
   valor.classList.add("text-center")
   valor.textContent="$"+ producto.precio

   // creamos popularidad
   let popular=document.createElement("h5")
   popular.classList.add("text-center")
   popular.textContent= "*"+ producto.popularidad
   //Creando descripcion
   let descripcion=document.createElement("p")
   descripcion.classList.add("text-danger","d-none.")
   descripcion.textContent=producto.descripcion

   // Definicion padres e hijos 
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(text)
    tarjeta.appendChild(valor)
    tarjeta.appendChild(popular)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    



})