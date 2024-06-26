async function listarProductos(){
    try{
        const conexion = await fetch("https://664e872afafad45dfae04d44.mockapi.io/api/p1/productos");    
        const conexionConvertida = await conexion.json();

        return conexionConvertida;

        // console.log(conexionConvertida);
        
    }
    catch(error){
        console.log(error);
    }
}

async function enviarProducto(nombre, precio, imagen){
    try{
        const conexion = await fetch("https://664e872afafad45dfae04d44.mockapi.io/api/p1/productos", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                nombre:nombre,
                precio:precio,
                imagen:imagen
            })
        })
        const conexionConvertida = await conexion.json();

        return conexionConvertida;
    }
    catch(error){
        console.log(error);
    }
}

async function borrarProducto(id){
    try{
        const conexion = await fetch(`https://664e872afafad45dfae04d44.mockapi.io/api/p1/productos/${id}`,{
        method: "DELETE",
    });

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    }
    catch(error){
        console.log(error);
    }
    

}

export const conexionAPI = {
    listarProductos, enviarProducto, borrarProducto
}
