const fs = require('fs'); //file system

// Hcaer una funcion que acepte como parametro una variable
// con el path de archivo y contenido a agreagar. La funcion
// toma estos valores, lee el archivo y añade el texto al final.
// Luego, vamos a leer el archivo nuevamnete y se imprime en consola
// TOODO debe ser realizado con promesas

function promesaLeerArchivo(path){
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) => {
                fs.readFile(path, 'utf-8',
                    (error,contenido) => {
                        if(error){
                            reject({mensaje: 'error leyendo contenido', error: error});
                        }else{
                            resolve(contenido);
                        }
                    }
                );
        }
    );
    return miPrimerPromesa;
}
function promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) => {
            nuevoContenido = contenidoActual + '\n' + nuevoContenido;
            fs.writeFile(path, nuevoContenido, 'utf-8',
                (error)=>{
                    if(error){
                        reject({mensaje: 'error escribiendo contenido', error: error});
                    }else{
                        resolve("Escritura realziada con exito");
                    }

                });
        }
    );
    return miPrimerPromesa;
}
function ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (datosLectura)=>{
                return promesaEscribirArchivo(path, datosLectura, nuevoContenido);
            }
        )     //try
        .then(
            (datosEscritura)=>{
                console.log(datosEscritura);
                return promesaLeerArchivo(path)
            }
        )
        .then(
            (datosLecturaFinal)=>{
                console.log(datosLecturaFinal);
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )    //catch
}

ejercicio('./06-ejemplo.txt', 'Buenas tardes');