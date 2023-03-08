let productos = []
const contenedor = document.querySelector('#contenedor')


fetch('/js/products.json')
  .then((response) => response.json())
  .then((json) => {
    productos = json

    abrirComestibles()
    
  })