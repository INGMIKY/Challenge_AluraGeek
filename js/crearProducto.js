const formulario = document.querySelector("[data-formulario]");

// capturas los datos del formulario para crear los productos

function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    console.log(nombre);
    console.log(precio);
    console.log(imagen);
}

formulario.addEventListener("submit", evento => crearProducto(evento));

