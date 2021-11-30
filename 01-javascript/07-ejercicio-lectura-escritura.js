const fs = require('fs'); //file system

// Hcaer una funcion que acepte como parametro una variable
// con el path de archivo y contenido a agreagar. La funcion
// toma estos valores, lee el archivo y añade el texto al final

function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path, 'utf-8',
        (errorEjemplo,contenidoEjemplo) => {
            if(errorEjemplo){
                console.error({mensaje: 'error leyendo contenido', error: errorEjemplo});
            }else{
                contenidoNuevo = contenidoEjemplo + '\n' + contenidoNuevo;
                fs.writeFile(path, contenidoNuevo, 'utf-8',
                    (error)=>{
                        if(error){
                            console.error({mensaje: 'error escribiendo contenido', error: error});
                        }else{
                            console.error("Escritura terminada con exito");
                        }

                    });
            }
        }
    );
}

escribirArchivo('./06-ejemplo.txt', 'Buenos dias');