// Constnates
const path = './datos.txt';

// Librerias
const inquirer = require('inquirer');
const fs = require('fs'); //file system
const readline = require('readline');

// Manejo de archivos
function promesaLeerArchivo(path){
    return new Promise( //Definicion de la promesa
        (resolve, reject) => {
            fs.readFile(path, 'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject({mensaje: 'error leyendo contenido', error: error});
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    );
}
function promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    return new Promise( //Definicion de la promesa
        (resolve, reject) => {
            if (contenidoActual !== '') {
                nuevoContenido = contenidoActual + '\n' + nuevoContenido;
            }
            fs.writeFile(path, nuevoContenido, 'utf-8',
                (error) => {
                    if (error) {
                        reject({mensaje: 'error escribiendo contenido', error: error});
                    } else {
                        resolve("Escritura realizada con exito");
                    }

                });
        }
    );
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
        return await inquirer
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
        //console.log('Productora', productora);
    }catch(e){
        console.error(e);
    }
}

async function crearPelicula(){
    const productora = await menuProductora();
    if(productora !== null && productora !== undefined){
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
                        name: 'director',
                        message: 'Ingrese el nombre del director: '
                    }
                ]);
            pelicula['nombreProd'] = productora;
            return pelicula;
            //console.log('Pelicula', pelicula);
        }catch(e){
            console.error(e);
        }
    }else{
        return undefined;
    }
}

async function actualizarEntidad(tipo, valorAnterior){

    fs.readFile(path, 'utf8', function(err, data) {
        let re = new RegExp('^.*' + valorAnterior + '.*$', 'gm');

        if(data.match(re) !== null){
            let jsonObject;
            if(tipo === 'Productora'){
                const entidad = async function(){
                    await crearProductora();
                }
                entidad['tipoEntidad'] = 'Productora';
                jsonObject = JSON.stringify(entidad);
            }else{
                const entidad = async function(){
                    await crearPelicula();
                }
                entidad['tipoEntidad'] = 'Pelicula';
                jsonObject = JSON.stringify(entidad);
            }
            let formatted = data.replace(re, jsonObject);
            fs.writeFile(path, formatted, 'utf8', function(err) {
                if (err) return console.log(err);
            });
        }else{
            console.log('No se encontró coincidencias');
        }
    });
}

async function eliminarEntidad(clave){
    fs.readFile(path, 'utf8', function(err, data) {
        let re = new RegExp('^.*' + clave + '.*$\n', 'gm');
        let formatted = data.replace(re, '');

        if(data.match(re) !== null){
            fs.writeFile(path, formatted, 'utf8', function(err) {
                if (err) return console.log(err);
            });
        }else{
            console.log('No se encontró coincidencias');
        }
    });
}

async function leerEntidades(tipo){
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let entidades = [];
    let jsonObject;
    for await (const line of rl) {
        if(line.includes(tipo)){
            jsonObject = JSON.parse(line);
            //console.log(tipo, jsonObject)
            entidades.push(jsonObject);
        }
    }
    return entidades;
}
async function leerEntidad(clave){
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let jsonObject = null;
    for await (const line of rl) {
        if(line.includes(clave)){
            jsonObject = JSON.parse(line);

        }
    }
    if(jsonObject !== null){
        return jsonObject;
    }else{
        return 'No se encontraron coincidencias';
    }

}

async function menuProductora(){
    let productoras = await leerEntidades('Productora');
    let  cont = 1;
    let productoraSeleccionada;
    try{
        console.log('------------------Lista de Productoras--------------------');
        for(let productora of productoras){
            console.log(cont, '. ', productora['nombre']);
            cont++;
        }
        console.log(cont,'.  Salir');
        await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'opcion',
                    message: 'Seleccione una opcion: '
                }
            ]).then(
                (resultado) => {
                    if(resultado['opcion'] !== productoras.length + 1){
                        productoraSeleccionada =  productoras[resultado.opcion - 1]['nombre'];
                    }else{
                        productoraSeleccionada = null;
                    }
                }
            )
        }catch(e){
            console.error(e);
        }
        return productoraSeleccionada;
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
                        switch(resultado['opcion']){
                            case 1:
                                return crearProductora();
                            case 2:
                                return crearPelicula();
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
                                entidad['tipoEntidad'] = 'Productora';
                                let prod = JSON.stringify(entidad);
                                //return agregarEntidad(path, 'Productora' + JSON.stringify(entidad));
                                return agregarEntidad(path, prod);
                            }else{
                                console.log('Se ha creado una pelicula');
                                entidad['tipoEntidad'] = 'Pelicula';
                                let peli = JSON.stringify(entidad);
                                //return agregarEntidad(path, 'Pelicula' + JSON.stringify(entidad));
                                return agregarEntidad(path, peli)
                            }
                        }
                    }
                )
        }catch(e){
            console.error(e);
        }
    }while(opcion !== 3);
}

async function main(){
    //await ingresarEntidad();
    //await actualizarEntidad('Productora',"Twisted")
    //console.log(await leerEntidades('Productora'));
    //console.log(await leerEntidad('Twisted'));
    //await eliminarEntidad('Tristar')
}

main();



