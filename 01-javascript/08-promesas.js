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
        (resolve, reject) => {
            const numeroElevado = Math.pow(numero,2);
            resolve(numeroElevado);
        }
    );
    return miPrimerPromesa;
}