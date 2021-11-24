function soloNumeros(a,b,c){
    return a-b+c;
}

// JS permite el uso de funciones sin validaciones
soloNumeros('v',true,[1,2,3]);
soloNumeros(1,2,3,4,5,6,7,8);
soloNumeros();

function soloLetras(a,b,c){ //Undefined
    console.log(a,b,c);
}

// Funciones nombradas
function funcionNombrada(){
}

// Funciones anonimas
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};
[].forEach(function(){});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

// Fat arrow function
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(() => {});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = (x) => {
    return x + 1;
};
const funcionFatArrow5 = (x) => x + 1;
const funcionFatArrow6 = x => x + 1;
const funcionFatArrow7 = (x,y,z) => x + y + z;

function sumarNumeros(...otrosNumeros){
    let total = 0;
    otrosNumeros.forEach(
        (valorActual)=>{
            total = total +valorActual;
        }
    );
    return total;
    // return otrosNumeros.reduce((a,v) => a + v, 0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10);

