const promesaLeerArchivo = () =>{
    return new Promise(
        (res, rej) => {
            res('Contenido Leer Archivo');
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('Contenido Escribir Archivo');
        }
    );
}

//ASYNC AWAIT
// 1) Metodos de clase
// 2) Funcion
// ESTO NO ES POSIBLE
// PORQUE NO ESTA DENTRO DE UNA FUNCION
// const respuesta = await promesaEscribirArchivo;
// Al momento de usar la palabra ASYNC, esa funcion se convierte
// en una promesa

const ejemplo = async function(){}
const ejemplo2 = async() => {}
async function ejercicio(){
    console.log('1');
    let nuevoContenido ='';
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }catch(error){
        console.error(error);
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
ejercicio()
    .then(
        (data) =>{
            console.log('Esta es la respuesta del async await', data);
        }
    )
    .catch()
    .finally()