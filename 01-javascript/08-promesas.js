const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) => {
            if(numero % 2 == 0){
                resolve(numero);
            }else{
                reject('No es par =(');
            }
        }
    );
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) => { // return, throw
            const numeroElevado = Math.pow(numero,2);
            resolve(numeroElevado); // resolve() -> return indefined
        }
    );
    return miPrimerPromesa;
}

promesaEsPar(4)
    .then(
        (datosPromesa)=>{
            console.log(datosPromesa);
            return promesaElevarAlCuadrado(datosPromesa);
        }
    )     //try
    .then(
        (datosElevar)=>{
            console.log(datosElevar);
        }
    )
    .catch(
        (error)=>{
            console.log(error);
        }
    )    //catch
    .finally()  //finally
