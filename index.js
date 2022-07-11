class Producto {
    constructor(id, nombre, descripcion, imagen, precio) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.precio = precio
    }
}

class Carrito {
    constructor(id){
        this.id = id
        this.productos = []
    }

    calcularTotal() {
        let total = 0 
        for(let i= 0; i< this.productos.length; i++){
                total = total + this.productos[i].precio
        }
        return total
    }
}

let listaProductos = []

let producto1 = new Producto (1,"New York","Vuelo + Hospedaje en hotel 5 estrellas x 8 noches", "newyork.jpg", 180000)
let producto2 = new Producto (2,"Mallorca","Vuelo + Hospedaje en hotel 5 estrellas x 8 noches", "mallorca.jpg", 220000)
let producto3 = new Producto (3,"Londres","Vuelo + Hospedaje en hotel 5 estrellas x 8 noches","londres.jpg", 250000)
let producto4 = new Producto (4,"Bariloche","Vuelo + Hospedaje en hotel 5 estrellas x 8 noches","bariloche.jpg", 40000)

listaProductos.push(producto1)
listaProductos.push(producto2)
listaProductos.push(producto3)
listaProductos.push(producto4)


let registroNombre
let registroId
let registroPrecio
let registrarTotal
let contenedorNombre
let contenedorId
let contenedorPrecio


function registrarHtml (){
    registroNombre = document.querySelector("#registro-nombre")
    registroId = document.querySelector("#registro-id")
    registroPrecio = document.querySelector("#registro-precio")
    registrarTotal = document.querySelector ("#registro-total")
}
registrarHtml()

function recorridoArray () {
    for (const producto of carrito.productos){
        contenedorNombre = producto.nombre 
        contenedorId = producto.id
        contenedorPrecio = producto.precio
    }   
}

function registrarProductos (){  
    registroNombre.innerHTML += `<li>${contenedorNombre}</li>`
    registroId.innerHTML += `<li>${contenedorId}</li>`
    registroPrecio.innerHTML += `<li>$ ${contenedorPrecio}</li>`
    registrarTotal.innerHTML = `<li>$ ${carrito.calcularTotal()}</li>`
}


function tarjetaDom (producto){
    let tarjetaDom =
    `<div class="productos p-0">
    <div class="productos__img">
    <img src="./img/${producto.imagen}">
    </div>
    <div class="productos__text">
        <h4>${producto.nombre}</h4>
        <p>${producto.descripcion}</p>
        <p>$ ${producto.precio}</p>
        <button id="${producto.id}" class="boton">Agregar al carrito</button>        
    </div>
    </div>`;
    return tarjetaDom
}




let tarjetaContenedora = document.querySelector("#cards")
listaProductos.forEach (producto => {
    tarjetaContenedora.innerHTML += tarjetaDom(producto)
})

let carrito = new Carrito (1)
let botones = document.querySelectorAll(".boton")
let arrayBotones = Array.from (botones)
arrayBotones.forEach (boton => {
    boton.addEventListener("click", (e) => {
        let productoSeleccionado = listaProductos.find (producto => producto.id == e.target.id)
        carrito.productos.push(productoSeleccionado)
        console.log(carrito)
        recorridoArray()
        registrarProductos()
        
    })
})