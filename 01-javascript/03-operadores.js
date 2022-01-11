const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// FUNCIONES COMO PARÁMETROS
// FIND
// enviamos una expresnsión - TRUTY FALSY

const respuestaFind = arreglo.find(
    function(valorActual, indiceActual, arregloCompleto){
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Cristian";
    }
);

console.log('respuestaFind',respuestaFind);

// FINDINDEX
// enviamos una expresión - TRUTY FALSY

const respuestaIndex = arreglo.findIndex(
    function(valorActual, indiceActual, arregloCompleto){
        return valorActual.nombre === "Cristian";
    }
);

console.log('respuestaIndex',respuestaIndex); //indice -> 6 // No encuentra -> -1

//FOREACH
// Itera el arreglo
const respuestaForEach = arreglo.forEach(
    function(valorActual, indiceActual, arregloCompleto){
        console.log('valorActual', valorActual);
    }
);

console.log('respuestaForEach', respuestaForEach);

// MAP
// Modificar o mutar el arreglo y devuelve uno nuevo
// El ejemplo suma un punto a la nota de todos los estudiantes
const respuestaMap = arreglo.map(
    function(valorActual, indiceActual, arregloCompleto){
        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota +1,
        }
        return nuevoElemento;
    }
);

console.log('respuestaMap', respuestaMap);

// FILTER
// Filtrar el arreglo
// Enviamos una expresion TRUTY FALSY
// Devuelve el primero que cumpla la condicion

const respuestaFilter = arreglo.filter(
    function(valorActual, indiceActual, arregloCompleto){
        return valorActual.nota >= 14;
    }
);

console.log('respuestaFilter', respuestaFilter);

// SOME
// Devuelve booleano si hay alguna que cumpla la condicion

const respuestaSome = arreglo.some(
    function(valorActual, indiceActual, arregloCompleto){
        return valorActual.nota < 9;
    }
);

console.log('respuestaSome', respuestaSome);

// EVERY
// Devuelve booleano si todas cumplen la condicion

const respuestaEvery = arreglo.every(
    function(valorActual, indiceActual, arregloCompleto){
        return valorActual.nota > 14;
    }
);

console.log('respuestaEvery', respuestaEvery);

// REDUCE           izq -> der
// REDUCE RIGHT     der -> izq

const respuestaReduce = arreglo.reduce(
    function(valorAcumulado, valorActual, indice, arreglo){
        return valorAcumulado + valorActual.nota;
    },
    100 //Acumulador
);
console.log('respuestaReduce', respuestaReduce);