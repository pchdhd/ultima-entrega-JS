let carrito = []
let precio = 0

const contenedor = document.querySelector('#contenedor')
const buttonCarrito = document.getElementById("carrito-compras")
const buttonId = document.getElementById("button-id")
const modalBody = document.querySelector("#modal-body")
const carritoCompras = document.querySelector("#carrito-compras")
const buttonVaciar = document.querySelector("#button-vaciar")
const buttonComprar = document.querySelector("#button-comprar")
const precioTotal = document.querySelector("#precio-total")

buttonVaciar.addEventListener("click", ()=> {
    carrito.length = []
    mostrarCarrito()
})
buttonComprar.addEventListener("click", ()=> {
    if(carrito.length !== 0){
        alert("Gracias por comprar en Superdescuento, lo esperamos, vuelva pronto.")
    carrito.length = []
}
    mostrarCarrito()
})

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})

productos.forEach((product) => {
 const {id, nombre, precio, precioAnterior, cantidad, img} = product
 contenedor.innerHTML += `<div class="col-2 div-externo ">
 <div class="div-interno"> <img src="${product.img}" alt="${product.nombre} ">
     <p><b>${product.nombre} </b> <br>
         <span> Antes $${product.precioAnterior} </span>
         <br> Ahora $${product.precio}
     </p>
     <button onclick="agregarProducto(${product.id})" id="button-unico">Añadir a el carrito</button>
 </div>`
})


function agregarProducto(id){
    const item = productos.find((product)=> product.id === id)
    carrito.push(item)
   mostrarCarrito()
}

const mostrarCarrito = () =>{
    
    modalBody.innerHTML = ""
    carrito.forEach((product)=> {
        const {id,nombre,img,cantidad,precio} = product
        modalBody.innerHTML +=`<div class="carrito-lista-producto"> <div class="modal-contenedor">
        
        <div class="row">
        <div class="col-2 justify-content-center align-items-center d-flex "><img src="${img} " alt=""></div>
        <div class="col-2 justify-content-center align-items-center d-flex"> <p>Producto:  ${nombre} </p></div>
        <div class="col-2 justify-content-center align-items-center d-flex"> <p>Precio:  $${precio} </p></div>
        <div class="col-2 justify-content-center align-items-center d-flex"> <p>cantidad:  ${cantidad} </p></div>
        <div class="col-2 justify-content-center align-items-center d-flex"> <button onclick="eliminarProducto(${id})" id="button-id" class="btn btn-danger">Eliminar producto del carrito</button> </div>
            </div>
        
            </div>
            

    </div>
    </div>`

    })
    carritoCompras.textContent = " 🛒 " + carrito.length
    precioTotal.innerText = carrito.reduce((acc , product)=> acc + product.cantidad * product.precio, 0)
    guardarStorage()
    
   
}
function eliminarProducto(id){
     const articulosid = id
     carrito = carrito.filter((articulo) => articulo.id !== articulosid )
     console.log(carrito)
     mostrarCarrito()
}
function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))

}


