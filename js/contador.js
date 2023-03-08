let minutosCounter = document.querySelector("#minutos")
let segundosCounter = document.querySelector("#segundos")

let i = 0
let minutos = 5

segundosCounter.innerHTML = i
minutosCounter.innerHTML = minutos;
i--
setTimeout(() => {
    i = 59
    minutos = 4
}, 999)
let id = setInterval(() => {
    segundosCounter.innerHTML = i
    minutosCounter.innerHTML = minutos;
    i--

    if (i == -1) {
        i = 59;
        minutos--;
    }
}, 1000)

setTimeout(() => {
    clearInterval(id)
    contenedorContador.innerHTML = ''
    Swal.fire(
        {
            title: "Se terminó el tiempo para la oferta de el día",
            icon: "info"
        });
    contenedorContador.innerHTML = '<div class="contain-2 d-flex justify-content-center align-items-center" id="contenedor-contador"></div>'
    divP.innerHTML = '<p id="p-navbar-1">¡Tiempo para que acabe la oferta de el día!</p></div>'
    divOfertas.innerHTML = ''
}, 300000)