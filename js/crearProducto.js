import { conexionAPI } from "./main.js";

const formulario = document.querySelector("[data-formulario]");

// capturas los datos del formulario para crear los productos

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conexionAPI.enviarProducto(nombre,precio,imagen);
        location.reload();
    }
    catch(e){
        alert(e)
    }


}


formulario.addEventListener("submit", evento => crearProducto(evento));

