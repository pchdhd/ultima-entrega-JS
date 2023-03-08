let carrito = []
let precio = 0
const buttonCarrito = document.getElementById("carrito-compras")
const buttonId = document.getElementById("button-id")
const modalBody = document.querySelector("#modal-body")
const carritoCompras = document.querySelector("#carrito-compras")
const buttonVaciar = document.querySelector("#button-vaciar")
const buttonComprar = document.querySelector("#button-comprar")
let precioTotal = document.querySelector("#precio-total")
const divSweetAlert = document.querySelector("#div-sweetalert")
const contenedor1 = document.querySelector("#contenedor1")
const idb = document.querySelector("#id-b")
const ida = document.querySelector("#id-a")
const divOfertas = document.querySelector("#div-ofertas")
const divP = document.querySelector("#div-p")
const contenedorContador = document.querySelector("#contenedor-contador-1")
const buttonUnico = document.getElementById("button-unico")

carritoCompras.textContent = " 🛒 " + carrito.length

carritoCompras.addEventListener("click", () => {
    Swal.fire(
        {
            title: "Carrito de compras",
        });           
})

function abrirOfertas() {

    productos.slice(24, 29).forEach((product) => {
        const { id, nombre, precio, precioAnterior, cantidad, img } = product
        contenedor.innerHTML += `<div class="col-2 div-externo ">
        <div class="div-interno"> <img src="${product.img}" alt="${product.nombre} ">
            <p><b>${product.nombre} </b> <br>
                <span> Antes $${product.precioAnterior} </span>
                <br>Ahora Hasta 40% OFF $${product.precio}
            </p>
            <button onclick="agregarProducto(${product.id})" id="button-unico">Añadir a el carrito</button>
        </div>`
    })
}

const mostrarCarrito = () => {

    modalBody.innerHTML = ""
    carrito.forEach((product) => {
        const { id, nombre, img, cantidad, precio } = product
        modalBody.innerHTML += `<div class="carrito-lista-producto"> <div class="modal-contenedor">
        
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



    guardarStorage()


}

divOfertas.addEventListener("click", () => {
    cerrarA()
    abrirOfertas()
})

cerrarA()
abrirComestibles()



buttonVaciar.addEventListener("click", () => {
    if (carrito.length !== 0) {
        Swal.fire(
            {
                title: "Carrito Vacio",
                text: "Ya no tiene productos en el carrito",
                icon: "success"
            });
        precioTotal.innerText = carrito.reduce((acc, product) => acc + product.precio * product.cantidad, 0)
    }
    else {
        Swal.fire(
            {
                title: "Su carrito no tiene productos",
                icon: "warning"
            });
    }
    carrito.length = []


    mostrarCarrito()
})
buttonComprar.addEventListener("click", () => {
    if (carrito.length !== 0) {
        Swal.fire(
            {
                title: "Compra realizada con exito",
                text: "Gracias por comprar en Superdescuento, lo esperamos, vuelva pronto.",
                icon: "success"
            });
        carrito.length = []
        precioTotal.innerText = carrito.reduce((acc, product) => acc + product.precio * product.cantidad, 0)
    }
    else {
        Swal.fire(
            {
                title: "Carrito vacio",
                text: "No tiene productos en el carrito, agregue alguno para poder comprar.",
                icon: "warning"
            });
    }

    mostrarCarrito()
})

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})
idb.addEventListener("click", () => {
    cerrarA()
    abrirElectrodomesticos()
})
ida.addEventListener("click", () => {
    cerrarA()
    abrirComestibles()
})
function cerrarA() {
    contenedor.innerHTML = " "
}
function abrirComestibles() {
    precioTotal.innerText = carrito.reduce((acc, product) => acc + product.cantidad * product.precio, 0)
    productos.slice(0, 12).forEach((product) => {
        const { id, nombre, precio, precioAnterior, cantidad, img } = product
        contenedor.innerHTML += `<div class="col-2 div-externo ">
    <div class="div-interno"> <img src="${product.img}" alt="${product.nombre} ">
        <p><b>${product.nombre} </b> <br>
            <span> Antes $${product.precioAnterior} </span>
            <br> Ahora $${product.precio}
        </p>
        <button onclick="agregarProducto(${product.id})" id="button-unico">Añadir a el carrito</button>
    </div>`
    })
}

function abrirElectrodomesticos() {
    productos.slice(12, 24).forEach((product) => {
        const { id, nombre, precio, precioAnterior, cantidad, img } = product
        contenedor.innerHTML += `<div class="col-2 div-externo ">
    <div class="div-interno"> <img src="${product.img}" alt="${product.nombre} ">
        <p><b>${product.nombre} </b> <br>
            <span> Antes $${product.precioAnterior} </span>
            <br> Ahora $${product.precio}
        </p>
        <button onclick="agregarProducto(${product.id})" id="button-unico">Añadir a el carrito</button>
    </div>`
    })
}



function agregarProducto(id) {
    const item = productos.find((product) => product.id === id)
    carrito.push(item)
    mostrarCarrito()
    console.log(carrito)  

}


function eliminarProducto(id) {
    const articulosid = id
    carrito = carrito.filter((articulo) => articulo.id !== articulosid)
    console.log(carrito)
    mostrarCarrito()

}
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    precioTotal.innerText = carrito.reduce((acc, product) => acc + product.precio * product.cantidad, 0)
    carritoCompras.textContent = " 🛒 " + carrito.length
}