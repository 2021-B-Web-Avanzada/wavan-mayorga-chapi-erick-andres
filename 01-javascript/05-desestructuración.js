const adrian = {
    nombre: 'Adrian'
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};
const adrianCarolina = {
    ...carolina,
    ...adrian
};

console.log('adrianCarolina', adrianCarolina);

// Desestructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno,
    ...arregloDos
];
console.log('superArreglo', superArreglo);

console.log(...superArreglo);


