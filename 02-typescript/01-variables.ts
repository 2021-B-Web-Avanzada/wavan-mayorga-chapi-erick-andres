let nombre: string = 'Adrian';
let nombre2: String = 'Adrian2';
// nombre = 1
nombre = 'Vicente';
let eda: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;
//Duck Typing
let apellido = 'Eguez'; // string ->
apellido = 'Adrian'; //igual a otros string
apellido.toUpperCase(); // metodos de string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true;