class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = "Humano";
    protected nombreYApellido = ''; //Duck Typing -> string
    constructor(nombrePrametro: string, apellidoParametro: string){
        this.nombre = nombrePrametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombrePrametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string){
        super(nombreParametro, apellidoParametro);
    }
}

const adrian =  new Usuario(
    'Adrian',
    'Eguez',
    '1724421928',
    'soltero'
);

adrian.nombre;
adrian.apellido;
adrian.cedula;
adrian.estadoCivil;