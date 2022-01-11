// Importar librerias
const fs = require('fs'); //file system
console.log('Primero');

fs.readFile(
    './01-variables.js',
    'utf-8',
    (error,contenido) => {
        if(error){
            console.error({mesanje: 'error leyendo contenido', error: error});
        }else{
            console.log(contenido);
            fs.readFile(
                './06-ejemplo.txt',
                'utf-8',
                (errorEjemplo,contenidoEjemplo) => {
                    if(errorEjemplo){
                        console.error({mensaje: 'error leyendo contenido', error: errorEjemplo});
                    }else{
                        console.log(contenidoEjemplo);
                    }
                }
            );
        }
    }
);
console.log('Tercero');




