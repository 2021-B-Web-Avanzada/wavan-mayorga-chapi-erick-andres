//Arreglos
let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Erick", 'Mayorga', undefined, null, {}, [1,2]];
arreglo = [6,7,8,9,10];

//Bucles
for (let numero of arreglo){
    console.log('numero',numero);
}

for (let indice in arreglo){
    arreglo[indice];
    console.log('indice',indice);
}

let objetoPrueba = {a: '1', b: '2', c: '3'};
for (let llave in objetoPrueba){
    console.log('llave',llave);
}

//Funciones de arreglos
arreglo.push(11);   //Agregar al final
arreglo.pop();      //Eliminar al final
arreglo.unshift(5);  //Agregar al principio
console.log(arreglo);
arreglo.splice(0,0,4); //splice(indice, cantidad a borrar, items a agregar)
// Ejemplo
// [4, 5, 6, 7, 8, 9, 10];
const indiceNueve = arreglo.indexOf(9);
arreglo.splice(indiceNueve,2);
console.log(arreglo);