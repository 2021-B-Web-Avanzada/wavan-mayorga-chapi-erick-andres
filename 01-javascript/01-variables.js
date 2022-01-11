// 01-javascript
//  /01 variables
// Mutable e Inmutable: Significa reasignable
//Mutable
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Innutables
const configuracionArchivos = "PDF";
//Vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Adrian"; // string
const apellido = 'Eguez'; // string
const booleanooo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log( typeof numero );
console.log( typeof sueldo );
console.log( typeof texto );
console.log( typeof booleanooo );
console.log( typeof hijos );
console.log( typeof zapatos );
console.log( typeof apellido );
console.log( typeof Number("asd")); //number
console.log(Number("asd")); //NaN

if(""){
    console.log("String vacio es verdadero");
}else{
    console.log("String vacio es falsy");
}

if("Erick"){
    console.log("String con datos es truty");
}else{
    console.log("String con datos es falso");
}

if(-1){
    console.log("Negativos es truty");
}else{
    console.log("Negativos es falsy");
}

if(0){
    console.log("Cero es truty");
}else{
    console.log("Cero es falsy");
}

if(1){
    console.log("Positivos es truty");
}else{
    console.log("Positivos es falsy");
}

if(null){
    console.log("Null es truty");
}else{
    console.log("Null es falsy");
}

if(undefined){
    console.log("Undefined es truty");
}else{
    console.log("Undefined es falsy");
}

// Objetos js (JSON) - Arreglos
const adrian = {
  nombre: "Erick", //llave: valor
  apellido: 'Mayorga',
  edad: 22,
  hijos: null,
  zapatos: undefined,
  casado: false,
  ropa: {
      color: 'plomo',
      talla: '40',
  },
  mascotas: ['Jime', 'Oddie'],
};

// Acceder a las propiedades del objeto
adrian.nombre;
adrian.apellido;
adrian["nombre"];
console.log(adrian);
adrian.nombre = "Vicente";
console.log(adrian);
adrian.nombre = "Erick";
adrian.sueldo; //undefined
console.log(adrian.sueldo);

adrian.sueldo = 1.2;
console.log(adrian.sueldo);
adrian.gastos = 0.8;
console.log(adrian.gastos);
adrian.nombre = undefined;
adrian.sueldo = 1.2;
console.log(adrian);
adrian.sueldo = 1.2;
console.log(Object.keys(adrian));
console.log(Object.values(adrian));

delete adrian.nombre;
console.log(adrian);

// Variables por valor o referencia
// Variables por valor en JS son las primitivas: number, string, boolean
let edadErick = 22;
let edadAndres = edadErick; //Guardamos una primitiva en otra variable
                            //Variables por valor
console.log(edadErick); //22
console.log(edadAndres); //22
edadErick = edadErick + 1;
console.log(edadErick); //23
console.log(edadAndres); //22

// variable por referencia: object {}, []

// let erick = {
//     nombre: "Erick"
// };
// let lenin = erick;
// console.log(erick);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(erick);
// console.log(lenin);
//
// delete erick.nombre;
// console.log(erick);
// console.log(lenin);

//Para clonar

let erick = {
    nombre: "Erick"
};
let lenin = Object.assign({},erick);
console.log(erick);
console.log(lenin);
lenin.nombre = "Lenin";
console.log(erick);
console.log(lenin);

//Arreglos
let numeros = [1,2,3,4,5];
let clonado = Object.assign([], numeros);
console.log(numeros);
console.log(clonado);
numeros[0] = 200;
clonado[0] = 100;
console.log(numeros);
console.log(clonado);

