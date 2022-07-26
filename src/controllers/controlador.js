// Creando variables

let nombreUsuario = "Felipe Velez"
const EDAD_USUARIO = 32
let estaturaUsuario = 1.78
let hinchadaDelVeerde = true

console.log (nombreUsuario)


console.log(EDAD_USUARIO)



// Areglos de datos
// Un arreglo es una vatiable especial 
 //1. Arreglo tradicional 
let numeros = [1,2,8,9,45]
let nombres = ["juan","catalina","mario","carlos"]
let tieneVirusDelMono=[true,false,false,false,true]
//1.1Accediendo a todos los controladores (elementos) de un arreglo 
console.log(numeros)
// 1.2Accediendo a un solo elemento del arreglo 
console.log(numeros[3])

//2.Areglos orientados a objetos ARREGLO POO
let notas = Array(3.5,2.8,3.9,5)
console.log(notas)


// 3. Variables especiales para guardar varios datos 
//de tipos diferentes
// Objetos 
let persona = {

    nombre:"Juan Jose",
    apellidos : ["Gallego","Mesa"],
    edad : 33,
    hinchaDelMejor : true

}
//3.1 Accediendo a todos los datos de un objeto 
console.log(persona)
// 3.1 Accediendo a un solo atributo del objeto 
console.log(persona.nombre)