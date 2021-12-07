// Constnates
const path = './datos.txt';

// Librerias
const inquirer = require('inquirer');
const fs = require('fs'); //file system

// Manejo de archivos
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
                        resolve("Escritura realizada con exito");
                    }

                });
        }
    );
    return miPrimerPromesa;
}
function agregarEntidad(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (datosLectura)=>{
                return promesaEscribirArchivo(path, datosLectura, nuevoContenido);
            }
        )     //try
        .catch(
            (error)=>{
                console.log(error);
            }
        )    //catch
}

// Ingreso de Datos
async function crearProductora(){
    try{
        console.log('INGRESO DE PRODUCTORA');
        const productora = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre: '
                },
                {
                    type: 'input',
                    name: 'ciudad',
                    message: 'Ingresa la ciudad: '
                },
                {
                    type: 'number',
                    name: 'yearFundacion',
                    message: 'Ingrese el año de fundacion: '
                },
                {
                    type: 'input',
                    name: 'CEO',
                    message: 'Ingrese el nombre del CEO: '
                },
                {
                    type: 'input',
                    name: 'parent',
                    message: 'Ingrese el nombre del parent: '
                }
            ]);
        return productora;
        //console.log('Productora', productora);
    }catch(e){
        console.error(e);
    }
}

async function crearPelicula(){
    try{
        console.log('INGRESO DE PELICULA');
        const pelicula = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre: '
                },
                {
                    type: 'input',
                    name: 'genero',
                    message: 'Ingresa el genero: '
                },
                {
                    type: 'number',
                    name: 'duracionHoras',
                    message: 'Ingrese la duracion en horas: '
                },
                {
                    type: 'input',
                    name: 'nombreProductora',
                    message: 'Ingrese el nombre de la productora: '
                },
                {
                    type: 'input',
                    name: 'director',
                    message: 'Ingrese el nombre del director: '
                }
            ]);
        return pelicula;
        //console.log('Pelicula', pelicula);
    }catch(e){
        console.error(e);
    }
}

async function actualizarEntidad(tipo, valorAnterior, valorNuevo){

}

async function eliminarEntidad(tipo, clave){

}

async function leerEntidades(tipo){

}
async function leerEntidad(tipo, nombre){
    if(tipo === 'Productora'){
        promesaLeerArchivo(path)
            .then(
                (contenido) => {
                    if(contenido.includes(clave)){
                                       
                    }else{

                    }
                }
            )
    }else{

    }
}

async function ingresarEntidad(){
    let opcion;
    do{
        try{
            console.log('------------------Ingreso de Entidades--------------------');
            console.log('1. Ingresar una productora');
            console.log('2. Ingresar una pelicula');
            console.log('3. Salir');
            await inquirer
                .prompt([
                    {
                        type: 'number',
                        name: 'opcion',
                        message: 'Seleccione una opcion: '
                    }
                ]).then(
                    (resultado) => {
                        switch(resultado.opcion){
                            case 1:
                                return crearProductora();
                                break;
                            case 2:
                                return crearPelicula();
                                break;
                            case 3:
                                opcion = 3;
                                break;
                            default:
                                console.log('Opcion incorrecta');
                                break;
                        }
                    }
                )
                .then(
                    (entidad) => {
                        if(typeof entidad !== "undefined"){
                            if(entidad.hasOwnProperty('CEO')){
                                console.log('Se ha creado una productora');
                                return agregarEntidad(path, 'Productora' + JSON.stringify(entidad));
                            }else{
                                console.log('Se ha creado una pelicula');
                                return agregarEntidad(path, 'Pelicula' + JSON.stringify(entidad));
                            }
                        }
                    }
                )
        }catch(e){
            console.error(e);
        }
    }while(opcion !== 3);
}

ingresarEntidad();
