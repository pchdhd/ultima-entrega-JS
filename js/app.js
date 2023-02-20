let carrito = []
let precio = 0
let URLactual = window.location.href;
const contenedor = document.querySelector('#contenedor')
const buttonCarrito = document.getElementById("carrito-compras")
const buttonId = document.getElementById("button-id")
const modalBody = document.querySelector("#modal-body")
const carritoCompras = document.querySelector("#carrito-compras")
const buttonVaciar = document.querySelector("#button-vaciar")
const buttonComprar = document.querySelector("#button-comprar")
const precioTotal = document.querySelector("#precio-total")
const divSweetAlert = document.querySelector("#div-sweetalert")
const contenedor1 = document.querySelector("#contenedor1")
const idb = document.querySelector("#id-b")
const ida = document.querySelector("#id-a")
 fetch("productos.json")
 .then((resp) => resp.json())
 .then((productos) => {
console.log(productos);

        cerrarA()
        abrirComestibles()

carritoCompras.addEventListener("click",()=>{
    Swal.fire(
        {title:"Carrito de compras",
          
        });
})

buttonVaciar.addEventListener("click", ()=> {
    if(carrito.length !== 0){
    Swal.fire(
        {title:"Carrito Vacio",
          text:"Ya no tiene productos en el carrito",
          icon:"success"
        });}
        else{
            Swal.fire(
                {title:"Su carrito no tiene productos",
                  icon:"warning"
                });
        }
    carrito.length = []
   
        
    mostrarCarrito()
})
buttonComprar.addEventListener("click", ()=> {
    if(carrito.length !== 0){
        Swal.fire(
            {title:"Compra realizada con exito",
              text:"Gracias por comprar en Superdescuento, lo esperamos, vuelva pronto.",
              icon:"success"
            });
    carrito.length = []
}
else{
    Swal.fire(
        {title:"Carrito vacio",
          text:"No tiene productos en el carrito, agregue alguno para poder comprar.",
          icon:"warning"
        });  
}

    mostrarCarrito()
})

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})
    idb.addEventListener("click",()=>{
       cerrarA()
        abrirElectrodomesticos()
     })
     ida.addEventListener("click",()=>{
        cerrarA()
        abrirComestibles()

     })
    function cerrarA(){
        contenedor.innerHTML = " "
    }
function abrirComestibles(){
   productos.slice(0,12).forEach((product) => {
    const {id, nombre, precio, precioAnterior, cantidad, img} = product
    contenedor.innerHTML += `<div class="col-2 div-externo ">
    <div class="div-interno"> <img src="${product.img}" alt="${product.nombre} ">
        <p><b>${product.nombre} </b> <br>
            <span> Antes $${product.precioAnterior} </span>
            <br> Ahora $${product.precio}
        </p>
        <button onclick="agregarProducto(${product.id})" id="button-unico">Añadir a el carrito</button>
    </div>`
   })}

   function abrirElectrodomesticos(){
   productos.slice(12,24).forEach((product) => {
    const {id, nombre, precio, precioAnterior, cantidad, img} = product
    contenedor.innerHTML += `<div class="col-2 div-externo ">
    <div class="div-interno"> <img src="${product.img}" alt="${product.nombre} ">
        <p><b>${product.nombre} </b> <br>
            <span> Antes $${product.precioAnterior} </span>
            <br> Ahora $${product.precio}
        </p>
        <button onclick="agregarProducto(${product.id})" id="button-unico">Añadir a el carrito</button>
    </div>`
   })}

const buttonUnico = document.getElementById("button-unico")
buttonUnico.addEventListener("click",()=>{
    agregarProducto()
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
})

