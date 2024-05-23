import { conexionAPI } from "/main.js";

const lista = document.querySelector("[data-producto]");

function crearProducto(id,nombre,precio,imagen){
    const producto = document.createElement("div");
    producto.className= "card";
    producto.innerHTML = `
    <img class="imgProducto" src="${imagen}" alt="">
    <div class="container-info">
        <p class="nameProducto">${nombre}</p>
        <div class="container-value">
            <p class="precioProducto">$ ${precio}</p>
            <img data-borrar class="imgEliminar" src="./img/basura.png" alt="">
        </div>
    </div>`


    const botonBorrar = producto.querySelector("[data-borrar]");
    botonBorrar.addEventListener("click", async()=>{
        try{
            await conexionAPI.borrarProducto(id);
            producto.remove();
        }
        catch(error){
            console.log(error);
        }
    });


    return producto;
}



async function listarProducto(){
    try{
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(elemento => lista.appendChild(crearProducto(elemento.id, elemento.nombre, elemento.precio, elemento.imagen)));
    }
    catch(error){
        console.log(error);
    }
}

listarProducto();