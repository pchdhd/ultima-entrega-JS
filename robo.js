 fetch("productos.json")
     .then((resp) => resp.json())
     .then((productos) => {
         console.log(productos); })